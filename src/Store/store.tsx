import { configureStore } from '@reduxjs/toolkit';
import { MoviesApi } from './Api/MoviesApi';
import GuessesSlice from './Slices/GuessesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import sessionStorage from 'redux-persist/es/storage/session';

const config = {
  key: 'root',
  storage: sessionStorage,
  version: 1,
  blacklist: ['guess', 'img', 'selectedCard'],
};

const rootReducer = combineReducers({
  GuessesSlice: persistReducer(config, GuessesSlice),
  [MoviesApi.reducerPath]: MoviesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});

export const persist = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

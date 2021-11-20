import { configureStore } from '@reduxjs/toolkit';
import { MoviesApi } from './Api/MoviesApi';
import GuessesSlice from './Slices/GuessesSlice';
export const store = configureStore({
  reducer: { GuessesSlice, [MoviesApi.reducerPath]: MoviesApi.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

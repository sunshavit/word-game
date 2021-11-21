import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { ServerResponse } from '../../Types/serverType'


export const MoviesApi = createApi({
    reducerPath : 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL}),
    endpoints:(builder)=>({getMovies:builder.query<ServerResponse,string>({
        query: (page) => ({url:'/top_rated' ,params:{
            api_key:process.env.REACT_APP_KEY,
            language:'en-US',
            page,
        }}),
    })})
})

export const {useGetMoviesQuery} = MoviesApi;
import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { ServerResponse } from '../../Types/serverType'


export const MoviesApi = createApi({
    reducerPath : 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/tv'}),
    endpoints:(builder)=>({getMovies:builder.query<ServerResponse,string>({
        query: (page) => ({url:'/top_rated' ,params:{
            api_key:'7552925846ab0e142a1f61935b4d5885',
            language:'en-US',
            page,
        }}),
    })})
})

export const {useGetMoviesQuery} = MoviesApi;
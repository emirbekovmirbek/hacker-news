import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { INews, id } from '../types'


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0' }),
  endpoints: (builder) => ({
    getNewsList: builder.query<INews[], string>({
      async queryFn (param, _queryApi, _extraOptions, fetchWithBQ) {
        const newsArray = await fetchWithBQ(`/${param}.json?print=pretty`)        
        if (newsArray.error)
          return { error: newsArray.error as FetchBaseQueryError }
        const newsList = newsArray.data as number[]
        const result = await Promise.all(newsList.slice(0, 100).map(async (newsId: id) => {
          const {data} = await fetchWithBQ(`/item/${newsId}.json?print=pretty`);
          return data;
        }))
        const data = result as INews[];
        const sortData = data.sort((a, b) => b.time - a.time)
        return {data: sortData};
      },
    }),
    getNews: builder.query<INews, id | undefined>({
      query: (id) => `/item/${id}.json?print=pretty`
    }),
  }),
});

export const { useGetNewsListQuery, useGetNewsQuery } = api

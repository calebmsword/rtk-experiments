import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const myApi = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
    tagTypes: ['MatchupChart'],
    endpoints: builder => ({
        getMatchupCharts: builder.query({
            query: () => '/matchupchart',
            providesTags: ['MatchupChart']
        }),
        getMatchupChart: builder.query({
            query: id => `matchupchart/${id}`,
            providesTags: ['MatchupChart'],
        }),
        addMatchupChart: builder.mutation({
            query: matchupChart => ({
                url: 'matchupchart',
                method: 'POST',
                body: matchupChart  
            }),
            invalidateTags: ['MatchupChart']
        }),
        updateMatchupChart: builder.mutation({
            query: ({id, ...matchupChart}) => ({
                url: `contacts/${id}`,
                method: 'PUT',
                body: matchupChart
            }),
            invalidateTags: ['MatchupChart']
        }),
        deleteMatchupChart: builder.mutation({
            query: id => ({
                url: `matchupchart/${id}`,
                method: 'DELETE'
            }),
            invalidateTags: ['MatchupChart']
        })
    })
})
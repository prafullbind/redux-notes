//this component created for RTK query 
// RTK Query mainly used for api fetching and it's provide various functionality like as cashing and polling
// and this reference created Admin.js component in components folder to show data
// and changes some json data in db.json for clarity
//for more visit https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    reducerPath: 'admin',
    //this is a base of url
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    //here endpoints describe REST API and query means find data and give path of request in query
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => `accounts`,
            //If you want to sort the response before sending then use transformResponse
            transformResponse:(response)=>response.sort((a,b)=>b.amount-a.amount),
            //adding below tags to removing cache memory
            providesTags: ['accounts'], //for GET request

        }),
        //If adding post method to add data in server then using mutation
        addAccount: builder.mutation({
            query: (amount, id) => ({
                url: "accounts",
                method: "POST",
                body: { amount, id }
            }),
            invalidatesTags: ['accounts'] //for POST, PUT, DELETE request
        }),
        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['accounts'] //for POST, PUT, DELETE request
        }),
        updateAccount: builder.mutation({
            query: ({id, amount}) => ({
                url: `accounts/${id}`,
                method: "PATCH",
                body: { amount }
            }),
            invalidatesTags: ['accounts'] //for POST, PUT, DELETE request
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } = adminApi;
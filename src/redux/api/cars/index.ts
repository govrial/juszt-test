import {createApi} from "@reduxjs/toolkit/query/react";
import {apiBaseQuery} from "../../../api";
import {Cars, ICar} from "./types.ts";

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: apiBaseQuery({baseURL: 'cars/'}),
  endpoints: (builder) => ({
    getCars: builder.query<Cars, string>({
      query: () => ({
        method: "GET",
        url: ''
      }),
    }),

    getCarById: builder.query<ICar, string>({
      query: (id: string) => ({
        method: 'GET',
        url: `${id}`
      })
    })
  })
})

export const {useGetCarsQuery, useGetCarByIdQuery} = carsApi;
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {BaseQueryFn} from "@reduxjs/toolkit/query";

export const $api = axios.create({
  // withCredentials: true,
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const apiBaseQuery =
  ({
     baseURL,
   }: {
    baseURL?: string;
  }): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    { status: number | undefined; data: unknown }
  > =>
    async ({ url, method, data, params }) => {
      try {
        const result = await $api({
          url: (baseURL ?? "") + url,
          method,
          data,
          params,
        });
        return { data: result.data };
      } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }
    };
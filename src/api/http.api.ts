import axios, { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

export const httpApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  const headers = config.headers;
  headers.set('Authorization', `Bearer ${readToken()}`);
  console.log('Starting Request', config);
  console.log(`Full URL: ${config.baseURL}${config.url}`);
  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  console.log(error)
  if (error.response) {
    const responseData = error.response.data as ApiErrorData;
    throw new ApiError<ApiErrorData>(responseData.message || error.message, responseData);
  } else {
    throw new ApiError<ApiErrorData>(error.message, undefined);
  }
});

export interface ApiErrorData {
  message: string;
}

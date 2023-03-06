import Axios, { AxiosRequestConfig } from "axios";

const defaultAxios = Axios.create({
  headers: { "Content-Type": "application/json" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(
  method: string,
  url: string,
  options: AxiosRequestConfig<any> = {}
) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url: string, args: AxiosRequestConfig<any>) =>
    apiClient("get", url, args),
  post: (url: string, args: AxiosRequestConfig<any>) =>
    apiClient("post", url, args),
  put: (url: string, args: AxiosRequestConfig<any>) =>
    apiClient("put", url, args),
  patch: (url: string, args: AxiosRequestConfig<any>) =>
    apiClient("patch", url, args),
  delete: (url: string, args: AxiosRequestConfig<any>) =>
    apiClient("delete", url, args),
};

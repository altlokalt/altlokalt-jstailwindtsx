import { apis } from "service";

import { AxiosPromise, AxiosRequestConfig } from "axios";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/`;

const API_URLS = {
  POST_LIST: `${COMMON_URL}api/v1/user/list`,
  POST_LOGIN: `${COMMON_URL}auth/login`,
  PUT_UPDATE_PROFILE: `${COMMON_URL}api/v1/user/update-profile`,
  POST_REGISTER: `${COMMON_URL}auth/register`,
} as const;

export type PostListRequestType = Partial<{ options: unknown }>;

export type PostListResponseType = Partial<{
  status: string;
  message: string;
  data: {
    data: any[];
    paginator: {
      itemCount: number;
      perPage: number;
      pageCount: number;
      currentPage: number;
      slNo: number;
      hasPrevPage: unknown;
      hasNextPage: unknown;
      prev: unknown;
      next: unknown;
    };
  };
}>;

export const postList = (
  payload: AxiosRequestConfig<PostListRequestType>
): AxiosPromise<PostListResponseType> =>
  apis.post(API_URLS.POST_LIST, {
    ...payload,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTNmOTI0NTNjODViYzEyNjU4ZjNiZSIsInVzZXJuYW1lIjoiSnVkZ2VfQ3JvbmluIiwiaWF0IjoxNjcxNjk3MTcxfQ.hbZLKSsS6Mdj1ndhAf4rm_5we4iWYvKY1VPSo51sQRM",
      ...payload?.headers,
    },
  });

export type PostLoginRequestType = Partial<{
  username: string;
  password: string;
}>;

export type PostLoginResponseType = Partial<{
  status: string;
  message: string;
  data: {
    loginRetryLimit: number;
    username: string;
    email: string;
    name: string;
    profile: string;
    role: number;
    createdAt: string;
    updatedAt: string;
    isDeleted: unknown;
    isActive: unknown;
    id: string;
    token: string;
  };
}>;

export const postLogin = (
  payload: AxiosRequestConfig<PostLoginRequestType>
): AxiosPromise<PostLoginResponseType> =>
  apis.post(API_URLS.POST_LOGIN, payload);

export type PutUpdateProfileRequestType = Partial<{ name: string }>;

export type PutUpdateProfileResponseType = Partial<{
  status: string;
  message: string;
  data: {
    loginRetryLimit: number;
    username: string;
    password: string;
    email: string;
    name: string;
    profile: string;
    role: number;
    createdAt: string;
    updatedAt: string;
    isDeleted: unknown;
    isActive: unknown;
    id: string;
  };
}>;

export const putUpdateProfile = (
  payload: AxiosRequestConfig<PutUpdateProfileRequestType>
): AxiosPromise<PutUpdateProfileResponseType> =>
  apis.put(API_URLS.PUT_UPDATE_PROFILE, payload);

export type PostRegisterRequestType = Partial<{
  username: string;
  password: string;
  email: string;
  name: string;
  profile: string;
  role: number;
}>;

export type PostRegisterResponseType = Partial<{
  status: string;
  message: string;
  data: {
    loginRetryLimit: number;
    username: string;
    password: string;
    email: string;
    name: string;
    profile: string;
    role: number;
    createdAt: string;
    updatedAt: string;
    isDeleted: unknown;
    isActive: unknown;
    id: string;
  };
}>;

export const postRegister = (
  payload: AxiosRequestConfig<PostRegisterRequestType>
): AxiosPromise<PostRegisterResponseType> =>
  apis.post(API_URLS.POST_REGISTER, payload);

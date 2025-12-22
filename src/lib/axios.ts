import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.serverUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

// ----------------------------------------------------------------------

const axiosAuthen = axios.create({ baseURL: 'https://api.dethiai.org/' });

axiosAuthen.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.code) {
      throw response.data.message;
    }

    if (response.status === 200 && !response.data.code && !response.data.data) {
      throw response.data.message;
    }

    return response.data;
  },
  async (error) => {
    if (error.status === 403) {
      throw error.message;
    }
    if (error.status === 500) {
      throw error.message;
    }
    const originalRequest = error.config;
    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const refreshToken = sessionStorage.getItem(JWT_REFRESH_STORAGE_KEY);
      try {
        const { data } = await axios.post(endpoints.auth.refreshToken);
        // setSession(data.data.accessToken, data.data.refreshToken);
        axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        return axiosAuthen(originalRequest);
      } catch (refreshError) {
        // sessionStorage.removeItem(JWT_REFRESH_STORAGE_KEY);
        // sessionStorage.removeItem(JWT_STORAGE_KEY);
        // localStorage.removeItem(USER_LOCAL_STORAGE);
        delete axiosAuthen.defaults.headers.common.Authorization;
        window.location.href = '/';
        console.error('Error during token expiration:', refreshError);
      }
    }
    return Promise.reject((error.response && error.response.data) || 'Đã xảy ra lỗi');
  }
);

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------
export { axiosAuthen, axiosInstance };

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    refreshToken: '/api/auth/refresh-token',
    signIn: '/api/v1/guest/login',
    signUp: '/api/auth/sign-up',
    refresh: '/api/v1/user/refresh-token',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
  landing: {
    silver: '/api/v1/silver-price',
    gold: '/api/v1/gold-price',
    price: '/api/v1/price-chart',
    products: '/api/v1/products',
    img: (path: string) => `/api/v1/images/${path}`,
  },
};

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { dispatch } from "../store";
import accountReducer from "../store/accountReducer";
import { LOGOUT } from "../store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const axiosServices = axios.create({
  baseURL: "https://inka-service-app-test.azurewebsites.net/",
});

export const refreshApi = axios.create({
  baseURL: "https://inka-service-app-test.azurewebsites.net/",
});

interface RefreshResponse {
  accessToken: { token: string; expiration: string };
  refreshToken: string;
}

interface RetryableAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

interface ErrorDetail {
  detail: string;
  instance: string;
  status: number;
  title: string;
  type: string;
}

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const refreshToken = async (): Promise<string> => {
  try {
    const token = await AsyncStorage.getItem("token");
    const refreshToken = await AsyncStorage.getItem("refreshToken");

    refreshApi.defaults.headers.common.Authorization = `Bearer ${token}`;

    const response = await refreshApi.post<RefreshResponse>(
      "/api/auth/refresh",
      { refreshToken }
    );
    await AsyncStorage.setItem("token", response.data.accessToken.token);
    await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data.accessToken.token;
  } catch (error) {
    throw error;
  }
};

const onRefreshed = (newToken: string): void => {
  isRefreshing = false;

  refreshSubscribers.forEach((callback) => {
    callback(newToken);
  });

  refreshSubscribers = [];
};

const logout = () => {
  accountReducer(undefined, {
    type: LOGOUT,
  });

  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("refreshToken");

  // navigation.navigate('Login')}
};

// axiosServices.interceptors.request.use(
//   async (config: RetryableAxiosRequestConfig) => {
//     if (!config.headers) {
//       config.headers = {};
//     }

//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

axiosServices.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableAxiosRequestConfig;
    const errorDetail = error.response?.data as ErrorDetail;

    if (error.response?.status === 401 && !originalRequest._retry) {
      switch (errorDetail?.detail) {
        case "Token expired":
          if (!isRefreshing) {
            isRefreshing = true;

            try {
              const newToken = await refreshToken();
              onRefreshed(newToken);
              if (!originalRequest.headers) {
                originalRequest.headers = {};
              }
              axiosServices.defaults.headers.common.Authorization = `Bearer ${newToken}`;
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
              originalRequest._retry = true;
              return axiosServices(originalRequest);
            } catch (refreshError) {
              await logout();
              return Promise.reject(refreshError);
            }
          }
          break;
        case "You are not authenticated":
          await logout();
          return Promise.reject(error);
        case "You are not authorized":
          //TODO: Error Message Show
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    }

    //TODO: Error Message Show

    return Promise.reject(error);
  }
);

export default axiosServices;

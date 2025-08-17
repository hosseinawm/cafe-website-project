import axios from "axios";

interface RefreshResponse {
  access: string;
  refresh?: string;
}

declare module "axios" {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/account/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) {
          localStorage.removeItem("access");
          window.location.href = "/login";
          return Promise.reject(error);
        }

        const res = await axiosInstance.post<RefreshResponse>(
          "token/refresh/",
          { refresh },
          { headers: { Authorization: undefined } }
        );

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);

        originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh token failed:", err);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

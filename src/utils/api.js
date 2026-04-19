import axios from "axios";

let accessToken = null;

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => {
  return accessToken;
};

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/refresh", 
          {},
          { withCredentials: true },
        );

        const newToken = res.data.accessToken;
        setAccessToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        localStorage.clear(err);
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
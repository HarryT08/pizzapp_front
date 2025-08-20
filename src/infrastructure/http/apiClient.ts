import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

let _token: string | null = null;
export const setToken = (t: string | null) => (_token = t);
export const getToken = () => _token;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar token automáticamente
apiClient.interceptors.request.use((config) => {
  if (_token) {
    config.headers.Authorization = `Bearer ${_token}`;
  }
  return config;
});

// Wrapper de API
export async function api<T>(path: string, options?: any): Promise<T> {
  try {
    const res = await apiClient.request<T>({
      url: path,
      ...options,
    });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || err.message);
  }
}

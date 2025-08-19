export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// token en memoria (rápido para demo). Si prefieres localStorage, combínalo.
let _token: string | null = null;
export const setToken = (t: string | null) => (_token = t);
export const getToken = () => _token;

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init?.headers as Record<string, string> | undefined),
  };
  if (_token) headers.Authorization = `Bearer ${_token}`;

  const res = await fetch(`${API_URL}${path}`, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "Request failed");
    throw new Error(text || `HTTP ${res.status}`);
  }
  
  // si el endpoint no devuelve JSON (204), evita parsear
  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return {} as T;
  return res.json() as Promise<T>;
}

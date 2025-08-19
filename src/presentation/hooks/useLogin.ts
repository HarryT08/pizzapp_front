import { useMutation } from "@tanstack/react-query";
import { useCases } from "../../config/di";
import { setToken } from "../../infrastructure/http/apiClient";
import { userToDomain } from "../../infrastructure/mappers/user.mapper";
import { useAuthStore } from "../state/authStore";

export function useLogin() {
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (input: { username: string; password: string }) =>
      useCases.auth.login.exec(input),
    onSuccess: (res) => {
      if (!res.ok) return;
      const { token, user } = res.value;
      setToken(token);
      const domainUser = userToDomain(user);
      setSession({ token, user: domainUser });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
  });
}

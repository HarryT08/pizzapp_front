import { useMutation } from "@tanstack/react-query";
import { useCases } from "../../config/di";
import { setToken } from "../../infrastructure/http/apiClient";
import { userToDomain } from "../../infrastructure/mappers/user.mapper";
import { useAuthStore } from "../state/authStore";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginDTO } from "@/application/dto";
import { useState } from "react";

export function useLogin() {
  const setSession = useAuthStore((s) => s.setSession);

  const [showPassword, setShowPassword] = useState(false);


  const methods = useForm<LoginDTO>({
    defaultValues: { username: "", password: "" },
    mode: "onSubmit",
  });

  const mutation = useMutation({
    mutationFn: (input: LoginDTO) => useCases.auth.login.exec(input),
    onSuccess: (res) => {
      if (!res.ok) return;
      const { token, user } = res.value;
      setToken(token);
      const domainUser = userToDomain(user);
      setSession({ token, user: domainUser });
      localStorage.setItem("token", token);
    },
  });

  const onSubmit: SubmitHandler<LoginDTO> = (values) => {
    mutation.mutate(values);
  };

  return {
    methods,
    onSubmit,
    ...mutation,
    showPassword,
    setShowPassword,
  };
}

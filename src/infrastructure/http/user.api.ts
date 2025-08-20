import { AuthService } from "../../application/ports/AuthService";
import { api } from "./apiClient";
import type { LoginResponse, LoginDTO } from "../../application/dto/user.dto";

export class AuthServiceHttp implements AuthService {
  async login(input: LoginDTO) {
    const data = await api<LoginResponse>("/auth/login", {
      method: "POST",
      data: input,
    });
    return { token: data.token, user: data.user };
  }
}

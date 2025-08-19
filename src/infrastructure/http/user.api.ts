import { AuthService } from "../../application/ports/AuthService";
import { api } from "./apiClient";
import type { LoginResultDTO } from "../../application/dto/user.dto";

export class AuthServiceHttp implements AuthService {
  async login(input: { username: string; password: string }) {
    const data = await api<LoginResultDTO>("/auth/login", {
      method: "POST",
      body: JSON.stringify(input),
    });
    return { token: data.token, user: data.user };
  }
}

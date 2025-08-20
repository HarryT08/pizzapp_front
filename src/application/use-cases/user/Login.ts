import { AuthService } from "../../ports/AuthService";
import { Result, ok, err } from "../../common/Result";
import { LoginDTO, LoginResponse } from "@/application/dto";

export class Login {
  constructor(private auth: AuthService) {}

  async exec(input: LoginDTO): Promise<Result<LoginResponse>> {
    try {
      const { token, user } = await this.auth.login(input);
      return ok({ token, user });
    } catch (e: any) {
      return err(e?.message ?? "Login failed");
    }
  }
}

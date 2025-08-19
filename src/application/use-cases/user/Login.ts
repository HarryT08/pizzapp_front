import { AuthService } from "../../ports/AuthService";
import { Result, ok, err } from "../../common/Result";

export class Login {
  constructor(private auth: AuthService) {}

  async exec(input: {
    username: string;
    password: string;
  }): Promise<
    Result<{
      token: string;
      user: AuthService["login"] extends (...a: any) => Promise<infer R>
        ? R["user"]
        : never;
    }>
  > {
    try {
      const { token, user } = await this.auth.login(input);
      return ok({ token, user });
    } catch (e: any) {
      return err(e?.message ?? "Login failed");
    }
  }
}

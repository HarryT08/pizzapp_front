import { AuthServiceHttp } from "../infrastructure/http/user.api";
import { Login } from "../application/use-cases/user/Login";

const auth = new AuthServiceHttp();

export const useCases = {
  auth: {
    login: new Login(auth),
  },
};

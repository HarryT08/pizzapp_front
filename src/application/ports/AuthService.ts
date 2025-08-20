import { LoginDTO, LoginResponse } from '../dto/user.dto';
export interface AuthService {
  login(input: LoginDTO): Promise<LoginResponse>;
  me?(): Promise<any>;
}

import { User } from "../../domain/entities/User";
import type { LoginResultDTO } from "../../application/dto/user.dto";

export const userToDomain = (u: LoginResultDTO["user"]): User =>
  new User(u.cedula, u.username, u.idRol, u.persona, u.rol);
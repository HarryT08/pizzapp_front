import { User } from "../../domain/entities/User";
import type { LoginResponse } from "../../application/dto/user.dto";

export const userToDomain = (u: LoginResponse["user"]): User =>
  new User(u.cedula, u.username, u.idRol, u.persona, u.rol);
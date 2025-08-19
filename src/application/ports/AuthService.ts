export interface AuthService {
  login(input: { username: string; password: string }): Promise<{
    token: string;
    user: {
      cedula: number;
      username: string;
      idRol: number;
      persona: {
        cedula: number;
        nombre: string;
        apellido: string;
        celular: string;
      };
      rol: { id: number; nombre: string };
    };
  }>;
  me?(): Promise<any>; // opcional si luego agregas /auth/me
}

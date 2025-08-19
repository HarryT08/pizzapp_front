export type LoginDTO = { username: string; password: string };
export type LoginResultDTO = {
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
    rol: {
      id: number;
      nombre: string;
    };
  };
  token: string;
};

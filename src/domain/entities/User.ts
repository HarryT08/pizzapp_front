export type Rol = { id: number; nombre: string };

export type Persona = {
  cedula: number;
  nombre: string;
  apellido: string;
  celular: string;
};

export class User {
  constructor(
    public readonly cedula: number,
    public readonly username: string,
    public readonly idRol: number,
    public readonly persona: Persona,
    public readonly rol: Rol
  ) {}
}

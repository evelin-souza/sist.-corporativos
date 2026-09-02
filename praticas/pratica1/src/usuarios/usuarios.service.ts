import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Evelin',
      email: 'evelin@empresa.com',
      senhaHash: '$2b$10$3p8C6B6fR4I3uR0QzY5u.O/eX5z/gM6xN8J9aK0L1M2N3O4P5Q6R7',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Silva',
      email: 'silva@empresa.com',
      senhaHash: '$2b$10$7q9D7C7gS5J4vS1RA6v.P/fY6a/hN7yO9K0bL1M2N3O4P5Q6R7S8',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla',
      email: 'carla@empresa.com',
      senhaHash:
        '$2b$12$gS/DXI3nfwdn8IL/XOxtPuOtwridIUakwhghB5WOknkkldYehfoxW',
      papel: 'solicitante',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
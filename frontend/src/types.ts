export interface IInputError {}

export interface IInput {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  error?: any;
}

export interface Address {
  id: string;
  state?: string;
  city?: string;
  street?: string;
  zipCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Role = 'ROLE_USER' | 'ROLE_ADMIN';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  address?: Address | null;
  roles: Set<Role>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenericResponse {
  status: string;
  message: string;
}

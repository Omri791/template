export type UserRole = 'DONOR' | 'HOSPITAL' | 'CENTER' | 'ADMIN';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

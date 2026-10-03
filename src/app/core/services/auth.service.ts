import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'bloodcare_user';

  constructor(private router: Router) {}

  login(email: string, password: string, role: UserRole): boolean {
    if (!email || !password) return false;
    const user: User = { id: 1, firstName: 'Utilisateur', lastName: 'BloodCare', email, role };
    localStorage.setItem(this.key, JSON.stringify(user));
    return true;
  }

  signup(firstName: string, lastName: string, email: string, role: UserRole): boolean {
    const user: User = { id: Date.now(), firstName, lastName, email, role };
    localStorage.setItem(this.key, JSON.stringify(user));
    return true;
  }

  user(): User | null {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) as User : null;
  }

  isLoggedIn(): boolean { return !!this.user(); }

  logout(): void {
    localStorage.removeItem(this.key);
    this.router.navigate(['/']);
  }

  dashboardLink(): string {
    const role = this.user()?.role;
    return role === 'HOSPITAL' ? '/dashboard/hospital' :
           role === 'CENTER' ? '/dashboard/center' :
           role === 'ADMIN' ? '/dashboard/admin' : '/dashboard/donor';
  }
}

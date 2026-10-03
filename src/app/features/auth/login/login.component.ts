import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../shared/models/user.model';

@Component({standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./login.component.html',styleUrl:'./login.component.css'})
export class LoginComponent {
  email=''; password=''; role:UserRole='DONOR'; error='';
  constructor(private auth:AuthService,private router:Router){}
  submit(){if(this.auth.login(this.email,this.password,this.role)){this.router.navigateByUrl(this.auth.dashboardLink())}else this.error='Veuillez remplir tous les champs.'}
}

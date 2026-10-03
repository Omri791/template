import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../shared/models/user.model';

@Component({standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./signup.component.html',styleUrl:'./signup.component.css'})
export class SignupComponent {
  firstName='';lastName='';email='';password='';role:UserRole='DONOR';
  constructor(private auth:AuthService,private router:Router){}
  submit(){if(this.firstName&&this.lastName&&this.email&&this.password){this.auth.signup(this.firstName,this.lastName,this.email,this.role);this.router.navigateByUrl(this.auth.dashboardLink())}}
}

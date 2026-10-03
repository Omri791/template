import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./hospital-dashboard.component.html'})
export class HospitalDashboardComponent {
  showForm=false;
  request={bloodType:'O+',quantity:2,urgency:'URGENT',notes:''};
  requests=[
    {id:104,hospital:'Hôpital Charles Nicolle',type:'O-',quantity:4,status:'EN ATTENTE'},
    {id:103,hospital:'Hôpital La Rabta',type:'A+',quantity:2,status:'TRAITÉE'},
    {id:102,hospital:'Hôpital Mongi Slim',type:'B+',quantity:3,status:'EN COURS'}
  ];
  submit(){this.showForm=false;alert('Demande enregistrée (mode template).')}
}

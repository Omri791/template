import { Component } from '@angular/core';
@Component({standalone:true,templateUrl:'./admin-dashboard.component.html'})
export class AdminDashboardComponent {
  users=[{name:'Amine Ben Ali',role:'Donneur',status:'Actif'},{name:'Hôpital Charles Nicolle',role:'Hôpital',status:'Actif'},{name:'Centre Tunis',role:'Centre',status:'Actif'},{name:'Sara Trabelsi',role:'Donneur',status:'En attente'}];
}

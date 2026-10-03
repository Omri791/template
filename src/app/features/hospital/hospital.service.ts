import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class HospitalService {
  // Remplacer progressivement les données mockées par les appels Spring Boot.
  // Exemple : return this.api.get<Type>('/hospital');
  list(): Observable<unknown[]> { return of([]); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl: string = 'http://localhost:8084/restaurant'; // <-- URL de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des restaurants
  getRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/public/list`);
  }
}

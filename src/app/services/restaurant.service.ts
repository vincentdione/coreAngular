import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) {}

  getRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/public/list`);
  }
}

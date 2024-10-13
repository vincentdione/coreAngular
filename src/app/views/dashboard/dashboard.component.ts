import { Component } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    // this.restaurantService.getRestaurants().subscribe(
    //   (data) => {
    //     this.restaurants = data;
    //   },
    //   (error) => {
    //     console.error('Erreur lors du chargement des restaurants:', error);
    //   }
    // );
  }

}

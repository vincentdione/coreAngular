import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // <-- Utilisez HttpClientTestingModule
    });
    service = TestBed.inject(RestaurantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Vérifiez qu'aucune requête n'est en attente
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch restaurants', () => {
    const mockRestaurants = [{ id: 1, name: 'Restaurant A' }, { id: 2, name: 'Restaurant B' }];

    service.getRestaurants().subscribe((restaurants) => {
      expect(restaurants).toEqual(mockRestaurants);
    });

    const req = httpMock.expectOne('http://localhost:8084/restaurant/public/list');
    expect(req.request.method).toBe('GET');
    req.flush(mockRestaurants);  // Simulez la réponse avec des données mockées
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;
  const mockApiUrl = '';  // URL factice ou vide pour le test

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'API_URL', useValue: mockApiUrl }],  // Injectez l'URL factice
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

    // Utilisez l'URL factice pour simuler la requête
    const req = httpMock.expectOne('/restaurant/public/list');
    expect(req.request.method).toBe('GET');
    req.flush(mockRestaurants);  // Simulez la réponse avec des données mockées
  });
});

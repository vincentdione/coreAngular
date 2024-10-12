import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { HttpClientModule } from '@angular/common/http';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

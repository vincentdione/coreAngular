import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { RestaurantService } from '../../services/restaurant.service';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: RestaurantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, DashboardComponent], // Mettez HttpClientModule ici
      providers: [RestaurantService,
        { provide: 'API_URL', useValue: '' }, // Fournissez un mock pour API_URL

      ], // Ajouter les services ici
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RestaurantService);

    fixture.detectChanges();
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

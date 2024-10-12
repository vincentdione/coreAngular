import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Utilisé pour simuler les valeurs de l'ActivatedRoute

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HeaderComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({}) } } // Simule ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); // Déclenche le changement de détection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

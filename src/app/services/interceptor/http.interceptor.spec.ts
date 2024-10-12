import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpTokenInterceptor } from './http.interceptor'; // Importation de la classe correcte
import { KeycloakService } from '../keycloak/keycloak.service'; // Importez également KeycloakService

describe('HttpTokenInterceptor', () => {
  let interceptor: HttpTokenInterceptor; // Déclarez le type correct de l'intercepteur

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTokenInterceptor,
        { provide: KeycloakService, useValue: { keycloak: { token: 'mocked-token' } } } // Mock de KeycloakService
      ]
    });
    interceptor = TestBed.inject(HttpTokenInterceptor); // Injectez l'intercepteur
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy(); // Vérifiez que l'intercepteur est créé
  });

  // Vous pouvez ajouter d'autres tests pour vérifier le comportement de l'intercepteur
});

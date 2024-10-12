import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MenuItem } from '../default-layout.component';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({}) } } // Simule ActivatedRoute
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;

    const menuItem: MenuItem = {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: []
    };

    component.item = menuItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

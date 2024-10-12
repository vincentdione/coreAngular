import { animate, style, transition, trigger } from '@angular/animations';
import { Component, effect, Input, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: 'Opx' }),
        animate('500ms ease-in-out', style({ opacity:1, height: '*' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity:0, height: '0px' }))
      ])
    ])
  ],
  imports: [RouterModule,MatListModule,MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  @Input() item!: MenuItem;
  collapsed = input(false);

  nestedMenuOpen = signal(false)

  routeHistory = input('');

  logRoutes = effect(() => console.log(this.routeHistory()))

  toggleNested(){
    if(!this.item.subItems){
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());

  }

}

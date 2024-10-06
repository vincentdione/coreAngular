import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, computed, effect } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DrawerComponent } from './drawer/drawer.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}


@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,MatToolbarModule,MatIconModule,MatSidenavModule,MenuItemComponent,DrawerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  darkmode = signal(false);

  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark',this.darkmode());
  });

  // constructor() {
  //   effect(() => {
  //     if (this.darkmode()) {
  //       document.documentElement.classList.add('dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //     }
  //   });
  // }


}

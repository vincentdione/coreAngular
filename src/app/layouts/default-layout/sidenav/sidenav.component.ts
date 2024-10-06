import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from '../menu-item/menu-item.component';


export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ MatIconModule, MatListModule,RouterModule,CommonModule,MenuItemComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
      this.sidenavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'dashboard', label: 'Content', route: 'contents',
      subItems: [
      {icon: 'dashboard', label: 'Videos', route: 'videos',subItems: [
        {icon: 'dashboard', label: 'Shorts', route: 'shorts'},
        {icon: 'tv', label: 'Long Form', route: 'long-form'},
      ]},
      {icon: 'playlist_play', label: 'Playlists', route: 'playlists'},
    ]
  },
    { icon: 'dashboard', label: 'Analytics', route: 'analytics' },
    { icon: 'comment', label: 'Comments', route: 'comments' }
  ]);

  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100')

}

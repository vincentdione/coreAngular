import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatSidenavModule,CommonModule,MatIconModule,MatListModule,RouterOutlet],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  @Input() drawerOpened!: boolean;



}

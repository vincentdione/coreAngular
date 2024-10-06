import { Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./content.component').then(m => m.ContentComponent),
    data: {
      title: `contents`
    },
    children: [
      {
        path: 'videos',
        loadComponent: () => import('./videos/videos.component').then(m => m.VideosComponent),
        data: {
          title: `videos`
        }
      },
    ]
  },

];

import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'microfe-1',
    loadChildren: () => import('microfe-1/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote1',
    loadChildren: () => import('remote1/routes').then((m) => m.routes),
  }
];

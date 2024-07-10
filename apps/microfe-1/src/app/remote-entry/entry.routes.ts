import { Route } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { RemoteEntryComponent } from './entry.component';
import { UsersListComponent } from '../users-list/users-list.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'reports', component: ReportsComponent },
      { path: 'users', component: UsersListComponent }
    ]
  }
];

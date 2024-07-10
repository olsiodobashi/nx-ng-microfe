import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../users-list/users-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { UserService } from '@monorepo/data-access-user';

@Component({
  standalone: true,
  imports: [CommonModule, UsersListComponent, RouterModule, RouterLink],
  selector: 'app-microfe-1-entry',
  templateUrl: `./entry.component.html`
})
export class RemoteEntryComponent {
  constructor(
    private userService: UserService
  ) {
  }

  public isLoggedIn$ = this.userService.isUserLoggedIn$;
}

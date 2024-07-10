import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@monorepo/data-access-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {
  }

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }

  logout() {
    this.userService.logout();
  }
}

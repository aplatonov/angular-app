import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  edit(user: User): void {
    this.users = this.users.filter(h => h !== user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}

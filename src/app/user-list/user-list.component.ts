import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userEdit: EventEmitter<User> = new EventEmitter();

  deleteUser(user: User): void {
    this.users = this.users.filter(h => h !== user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(user: User): void {
    console.log(user);
    this.userEdit.emit(user);
  }
}

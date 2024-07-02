import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }

  onSelectUser(id: string) {
    console.log('selected user with id ' + id);
    this.selectedUserID = id;
  }
}

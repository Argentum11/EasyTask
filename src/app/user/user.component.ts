import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // initialize a signal
  selectedUser = signal(DUMMY_USERS[randomUserIndex]);

  // computed also creates a signal
  //    the reason why we need computed here is because imagePath should change
  //    when the value of selectUser(which is a signal) change, by using computed
  //    Angular sets up the subscription and change the UI for you
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    const newUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // update a signal
    this.selectedUser.set(DUMMY_USERS[newUserIndex]);
  }
}

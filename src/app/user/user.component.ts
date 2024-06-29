import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* the input function produces a signal
        The benefit of using Signal inputs here is that we don't have to
        convince typescript that there will be a value for avatar and name 
        (the original method might cause problems when we convince typescript that
        there will be a value and forget to pass the value in the component html)
        ```import {computed, input } from '@angular/core';``` required to use Signal inputs

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });*/
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}
}

# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## generate new component

```bash
ng generate component COMPONENT_NAME
```

## Binding

### Property Binding

When we are binding an element property to a non-string data value, we use property binding.

```html
<img
    [src]="'assets/users/' + selectedUser.avatar"
    [alt]="selectedUser.name"
/>
```

## Updating state

### Zonejs

In the traditional approach, when a component's variable is directly modified, Angular utilizes Zone.js. Zone.js intercepts various user interactions (like button clicks) and other asynchronous operations. It then triggers a comprehensive change detection cycle across the entire application to identify any potential updates in component data. Finally, based on these changes, Angular updates the UI.

HTML

```HTML
<div>
  <button (click)="onSelectUser()">
    <img
      [src]="imagePath"
      [alt]="selectedUser.name"
    />
    <span>{{ selectedUser.name }}</span>
  </button>
</div>
```

Typescript

```typescript
export class UserComponent {
  selectedUser = DUMMY_USERS[randomUserIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const newUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[newUserIndex];
  }
}
```

### Signal

In ```Angular 16```, there's a new mechanism called a signal. It's a object that holds a value and can notify interested components when the value changes. When a signal changes, components that subscribe to the signal are automatically notified and can update their UI accordingly, which is more efficent than the traditional method.

HTML

```HTML
<div>
  <button (click)="onSelectUser()">
    <img
      [src]="imagePath()"
      [alt]="selectedUser().name"
    />
    <!--  read a signal like executing a function -->
    <span>{{ selectedUser().name }}</span>
  </button>
</div>
```

Typescript

```typescript
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
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

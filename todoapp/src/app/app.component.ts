import { Component } from '@angular/core';
// import { SubComponent } from './components/sub/sub.component';

@Component({
  selector: 'app-root',
  template: `<h1>my first app angular 2</h1>
  <app-sub></app-sub>
  <app-study-multi></app-study-multi>
  <app-binding></app-binding>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'todoapp';
}

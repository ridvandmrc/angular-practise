import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  title = 'angular-practice';

  setCounter(val: number) {
    this.counter = val;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: 'bind.component.html',
  styleUrls: ['bind.component.scss'],
})
export class BindComponent {
  constructor() {}
  cond = false;
  changeTheme() {
    this.cond = !this.cond;
  }
}

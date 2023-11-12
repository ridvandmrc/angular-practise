import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})
export class StylesComponent {
  headerColor = 'red';
  select = 'test';
  cond = false;

  change() {
    this.cond = !this.cond;
  }
}

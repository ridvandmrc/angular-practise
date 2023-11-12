import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent {
  private _name = '';
  private number = 0;

  @Output() counter = new EventEmitter<number>();

  @Input()
  get name(): string {
    return 'Name is : ' + this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  increase() {
    this.counter.emit(++this.number);
  }
}

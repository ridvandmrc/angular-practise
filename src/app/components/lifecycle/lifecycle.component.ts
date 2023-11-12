import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent
  implements
    OnInit,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    AfterContentChecked
{
  counter = 0;

  increase() {
    this.counter++;
  }

  ngOnInit(): void {
    console.log('ng on Init');
  }

  ngAfterContentInit(): void {
    console.log('ng after content init');
  }

  ngAfterContentChecked(): void {
    console.log('on checked: ', this.counter);
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnDestroy(): void {
    console.log('on Destroy');
  }
}

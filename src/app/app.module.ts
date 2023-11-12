import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { SingleSlotComponent } from './components/content-projection/single-slot/single-slot.component';
import { MultipleSlotComponent } from './components/content-projection/multiple-slot/multiple-slot.component';
import { NgContainerComponent } from './components/content-projection/ng-container/ng-container.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { StylesComponent } from './components/styles/styles.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    SingleSlotComponent,
    MultipleSlotComponent,
    NgContainerComponent,
    InteractionComponent,
    LifecycleComponent,
    StylesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [FirstComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

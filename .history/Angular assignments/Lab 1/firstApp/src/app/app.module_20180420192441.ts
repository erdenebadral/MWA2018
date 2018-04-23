import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MyListComponent } from './my-list/my-list.component';
import { TestDirective } from './test.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MyListComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

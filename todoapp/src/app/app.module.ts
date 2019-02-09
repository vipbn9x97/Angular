import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent } from './components/sub/sub.component';
import { StudyMultiComponent } from './components/study-multi/study-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    StudyMultiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

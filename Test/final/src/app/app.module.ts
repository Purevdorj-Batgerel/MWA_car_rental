import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { reducer } from './redux/tutorial.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ tutorial: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

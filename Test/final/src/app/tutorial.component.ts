import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Tutorial } from './redux/tutorial.model';
import { State } from './redux/tutorial.state';
import { map } from 'rxjs/operators';

import * as TutorialActions from './redux/tutorial.actions';

@Component({
  selector: 'app-tutorial',
  template: `
  <div class="right" *ngIf="tutorials">
    <h3>Tutorials</h3>
    <ul>
      <li (click)="delTutorial(i)" *ngFor="let tutorial of tutorials | async; let i = index">
        <a [href]="tutorial.url" target="_blank">{{ tutorial.name }}</a>
      </li>
    </ul>
  </div>

  <div class="left">

    <input type="text" placeholder="name" #name>
    <input type="text" placeholder="url" #url>

    <button (click)="addTutorial(name.value,url.value)">Add a Tutorial</button>
  </div>
  `,
  styles: ['body, html {margin: 0; padding: 0; font-family: "Arial";}', '.left, .right {float:left; width: calc(50% - 6em); padding: 3em;}', 'input[type="text"] { width: 100%; padding: 5px; margin-bottom: 10px;}']
})
export class TutorialComponent {
  // We're defining an observable named tutorials which we will later display in the template.
  tutorials: Observable<Tutorial[]>;
  // We're accessing the store from ngrx within the constructor, 
  // and then selecting tutorial which is defined as a the property from app.module.ts in StoreModule.forRoot({}). 
  // This calls the tutorial reducer and returns the tutorial state.
  constructor(private store: Store<State>) {
    this.tutorials = store.pipe(select('tutorial'));
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}
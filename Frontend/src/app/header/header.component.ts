import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from '../reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private store: Store<State>) {
    this.user$ = store.pipe(select('user'));
  }

  ngOnInit() {

  }
}

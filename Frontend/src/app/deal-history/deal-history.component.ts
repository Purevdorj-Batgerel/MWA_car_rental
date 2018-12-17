import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-deal-history',
  templateUrl: './deal-history.component.html',
  styleUrls: ['./deal-history.component.css']
})
export class DealHistoryComponent implements OnInit {
  carDealsList;
  constructor(private http: HttpService, private store: Store<State>) {
    this.store.pipe(select('user'), take(1)).subscribe(result => {
      this.http.get(`http://localhost:5000/API/dealList/${result.name}`).subscribe(data => {
        console.log(data);
        this.carDealsList = data;
      })
    })
  }
  ngOnInit() {
  }

}

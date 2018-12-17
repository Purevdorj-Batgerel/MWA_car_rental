import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { IDeal } from '../models/deal.model';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {

  carDeal:IDeal;

  constructor(private http: HttpService) {
    this.http.get('http://localhost:5000/API/CarDeal/')
  }

  ngOnInit() {
  }

}

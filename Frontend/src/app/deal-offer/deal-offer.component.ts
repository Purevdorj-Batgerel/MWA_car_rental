import { Component, OnInit } from '@angular/core';
import { DealtransferService } from './../Services/dealtransfer.service';

@Component({
  selector: 'app-deal-offer',
  templateUrl: './deal-offer.component.html',
  styleUrls: ['./deal-offer.component.css']
})
export class DealOfferComponent implements OnInit {

  public requestID: String = '';

  constructor(private dealstranfer: DealtransferService) {
    this.dealstranfer.emitter.subscribe(reqID => {
      this.requestID = reqID;
      console.log(this.requestID);
    }); 

    
  }

  ngOnInit() {
  }

}

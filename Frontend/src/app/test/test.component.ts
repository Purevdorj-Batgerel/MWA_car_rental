import { Component, OnInit, Input, Output , EventEmitter,ViewChild, ContentChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html', 
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges {

  @Input() name: String;
  @Output() ontest: EventEmitter<object>;
  @ViewChild('myname') myfullname: String ; 
  @ContentChild('contentchild1') contentchildObj ;

  public message: String ='Default';
  constructor() { this.ontest = new EventEmitter<object>();}

  dosomething(){
    this.ontest.emit({
      name : 'thai',
      age : 36
    });
  }

  SayMyname(name){
     console.log(name.value);
  }

getContent(){
 console.log(this.contentchildObj.nativeElement.textContent);
}

ngOnChanges(change){
  console.log("change");
}


}

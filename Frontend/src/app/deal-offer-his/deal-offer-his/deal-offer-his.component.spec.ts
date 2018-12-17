import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfferHisComponent } from './deal-offer-his.component';

describe('DealOfferHisComponent', () => {
  let component: DealOfferHisComponent;
  let fixture: ComponentFixture<DealOfferHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealOfferHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealOfferHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

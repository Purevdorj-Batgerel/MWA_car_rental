import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfferComponent } from './deal-offer.component';

describe('DealOfferComponent', () => {
  let component: DealOfferComponent;
  let fixture: ComponentFixture<DealOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

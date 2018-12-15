import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsearchComponent } from './dealsearch.component';

describe('DealsearchComponent', () => {
  let component: DealsearchComponent;
  let fixture: ComponentFixture<DealsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

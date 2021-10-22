import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8PurchaseComponent } from './step8-purchase.component';

describe('Step8PurchaseComponent', () => {
  let component: Step8PurchaseComponent;
  let fixture: ComponentFixture<Step8PurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step8PurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step8PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

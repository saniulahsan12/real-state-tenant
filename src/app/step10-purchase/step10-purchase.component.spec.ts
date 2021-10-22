import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step10PurchaseComponent } from './step10-purchase.component';

describe('Step10PurchaseComponent', () => {
  let component: Step10PurchaseComponent;
  let fixture: ComponentFixture<Step10PurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step10PurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step10PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

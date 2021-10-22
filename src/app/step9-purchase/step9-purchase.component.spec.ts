import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step9PurchaseComponent } from './step9-purchase.component';

describe('Step9PurchaseComponent', () => {
  let component: Step9PurchaseComponent;
  let fixture: ComponentFixture<Step9PurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step9PurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step9PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

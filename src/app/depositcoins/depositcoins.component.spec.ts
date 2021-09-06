import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositcoinsComponent } from './depositcoins.component';

describe('DepositcoinsComponent', () => {
  let component: DepositcoinsComponent;
  let fixture: ComponentFixture<DepositcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositcoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

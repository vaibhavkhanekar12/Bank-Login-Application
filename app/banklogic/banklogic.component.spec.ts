import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklogicComponent } from './banklogic.component';

describe('BanklogicComponent', () => {
  let component: BanklogicComponent;
  let fixture: ComponentFixture<BanklogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanklogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

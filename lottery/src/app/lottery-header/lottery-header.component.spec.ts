import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryHeaderComponent } from './lottery-header.component';

describe('LotteryHeaderComponent', () => {
  let component: LotteryHeaderComponent;
  let fixture: ComponentFixture<LotteryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTableComponent } from './lottery-table.component';

describe('LotteryTableComponent', () => {
  let component: LotteryTableComponent;
  let fixture: ComponentFixture<LotteryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

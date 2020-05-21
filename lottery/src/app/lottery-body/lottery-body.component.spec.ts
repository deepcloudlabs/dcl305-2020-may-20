import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryBodyComponent } from './lottery-body.component';

describe('LotteryBodyComponent', () => {
  let component: LotteryBodyComponent;
  let fixture: ComponentFixture<LotteryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

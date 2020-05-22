import { TestBed } from '@angular/core/testing';

import { StatisticService } from './statistic.service';

describe('StatisticService', () => {
  let service: StatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loses and total increases by one if player loses', () => {
    service.playerLoses();
    expect(service._statistics.loses).toEqual(1);
    expect(service._statistics.total).toEqual(1);
    service.playerWins(8,10);
    expect(service._statistics.loses).toEqual(1);
    expect(service._statistics.wins).toEqual(1);
    expect(service._statistics.total).toEqual(2);
    expect(service._statistics.averageMove).toEqual(8);
    expect(service._statistics.averageWinTime).toEqual(90);
    service.playerWins(4,60);
    expect(service._statistics.loses).toEqual(1);
    expect(service._statistics.wins).toEqual(2);
    expect(service._statistics.total).toEqual(3);
    expect(service._statistics.averageMove).toEqual(6);
    //expect(service._statistics.averageWinTime).toEqual(25);

  });
});

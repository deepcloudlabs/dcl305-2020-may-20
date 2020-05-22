import { TestBed } from '@angular/core/testing';

import { MastermindService } from './mastermind.service';

describe('MastermindService', () => {
  let service: MastermindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastermindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized', () => {
    service.initGame();
    expect(service._game.tries).toEqual(0);
    expect(service._game.moves.length).toEqual(0);
  });


});

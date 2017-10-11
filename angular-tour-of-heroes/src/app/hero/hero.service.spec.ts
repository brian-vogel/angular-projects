import { HEROES } from '../mock-heroes';
import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should inject', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Heroes', inject([HeroService], (service: HeroService) => {
    service.getHeroes().then((heroes: Hero[]) => {
      expect(heroes).toEqual(HEROES);
    });
  }));
});

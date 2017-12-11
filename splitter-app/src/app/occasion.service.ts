import { Injectable } from '@angular/core';
import { Occasion } from './occasion';
import { OCCASIONS } from './mock-data'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OccasionService {

  getOccasions(): Observable<Occasion[]> {
    return of(OCCASIONS);
  }

  getOccasion(id: number): Observable<Occasion> {
    return of(OCCASIONS.find(occasion => occasion.id === id));
  }

  constructor() { }

}

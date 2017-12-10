import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OCCASIONS } from './occasions-mock';
import { Occasion } from './occasion';

@Injectable()
export class OccasionService {

  constructor() { }

  getOccasions(): Observable<Occasion[]> {
    return of(OCCASIONS);
  }

  getOccasion(id: number): Observable<Occasion> {
    return of(OCCASIONS.find(occasion => occasion.id === id));
  }
}

import { Person }  from './person';
import { Item } from './item';

export class Occasion {
  id: number;
  name: string;
  description: string;
  participants:Person[];
  items:Item[];
  totalSpending: number;
  date: string;
}

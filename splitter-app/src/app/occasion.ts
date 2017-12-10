import { Person }  from './person';
import { Item } from './item';
import { Transaction } from './transaction';

export class Occasion {
  id: number;
  name: string;
  description: string;
  participants:Person[];
  items:Item[];
  transactions: Transaction[],
  totalSpending: number;
  date: string;
}

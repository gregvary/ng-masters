import { Occasion } from './occasion';

export const OCCASIONS: Occasion[] = [
  {
    id: 1,
    name: 'Chickendinner',
    description: 'The Hound eats every fucking chicken in this room.',
    participants: [{ name: 'Sandor', credit: 10 }, { name: 'Arya', credit: 10 }],
    totalSpending: 15.20,
    items: [ {name: 'Chicken', amount: 15.20, payer: { name: 'Sandor', credit: 10 },{name: 'Another Chicken', amount: 11.20, payer: { name: 'Arya', credit: 10 }  }],
    transactions: [{debtor: { name: 'Sandor', credit: 10 }, creditor: { name: 'Arya', credit: 10 }, amount: 20}]
    date: '03.05.1014'
  },
  {
    id: 2,
    name: 'Red Wedding',
    description: 'They Freys invite the Starks to a Wedding',
    participants: [{ name: 'Robb', credit: 10 }, { name: 'Catelyn', credit: 10 }, { name: 'Waldor', credit: 10 }, { name: 'Roose', credit: 10 }],
    totalSpending: 485.32,
    items: [],
    date: '21.08.1013'
  },
  {
    id: 3,
    name: 'Hiking Trip in the North',
    description: 'The boys go on a hiking adventure to catch a zombie',
    participants: [{ name: 'John', credit: 10 }, { name: 'Beric', credit: 10 }, { name: 'Gendry', credit: 10 }, { name: 'Tormund', credit: 10 }],
    totalSpending: 123.45,
    items: [],
    date: '04.12.1017'
  },
  {
    id: 4,
    name: 'Fireworks show',
    description: 'Cersei tests Qyburns Wildfire on some ships',
    participants: [{ name: 'Cersei', credit: 10 }, { name: 'Qyburn', credit: 10 }],
    totalSpending: 1731.00,
    items: [],
    date: '12.03.1014'
  },

];

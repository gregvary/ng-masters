import { Occasion } from './occasion';

export const OCCASIONS: Occasion[] = [

  {
    id: 1,
    name: 'Chickendinner',
    description: 'The Hound eats every fucking chicken in this room.',
    participants: [
      {
        name: 'Sandor',
        credit: 15
      },
      {
        name: 'Arya',
        credit: 5
      }
    ],
    totalSpending: 20.00,
    items: [
      {
        name: 'Chicken',
        amount: 15.00,
        payer: { name: 'Sandor', credit: 15 }
      },
      {
        name: 'A smaller Chicken',
        amount: 5.00,
        payer: { name: 'Arya', credit: 5 }
      }
    ],
    transactions: [],
    date: '03.05.1014'
  },
  {
    id: 2,
    name: 'Red Wedding',
    description: 'They Freys invite the Starks to a Wedding',
    participants: [
      {
        name: 'Robb',
        credit: 0
      },
      {
        name: 'Catelyn',
        credit: 0
      },
      {
        name: 'Walder',
        credit: 600
      },
      {
        name: 'Roose',
        credit: 66.66
      }
    ],
    totalSpending: 666.66,
    items: [
      {
        name: 'Crossbows',
        amount: 600.00,
        payer: { name: 'Walder', credit: 600 }
      },
      {
        name: 'Dagger',
        amount: 66.66,
        payer: { name: 'Roose', credit: 66.66 }
      }
    ],
    transactions: [],
    date: '21.08.1013'
  },
  {
    id: 3,
    name: 'Hiking Trip in the North',
    description: 'The boys go on a hiking adventure to catch a zombie',
    participants:
    [
      {
        name: 'Jon',
        credit: 800.00
      },
      {
        name: 'Beric',
        credit: 0
      },
      {
        name: 'Gendry',
        credit: 200.00
      },
      {
        name: 'Tormund',
        credit: 0
      }
    ],
    totalSpending: 1000.00,
    items: [
      {
        name: 'Warhammer',
        amount: 200.00,
        payer: { name: 'Gendry', credit: 200.00 }
      },
      {
        name: 'Dragonglass',
        amount: 800.00,
        payer: { name: 'Jon', credit: 800.00 }
      }
    ],
    transactions: [],
    date: '04.12.1017'
  }

];

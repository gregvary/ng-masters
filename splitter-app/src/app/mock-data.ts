import { Occasion } from './occasion';

export const OCCASIONS: Occasion[] = [
  {
    id: 1,
    name: 'Chickendinner',
    description: 'The Hound eats every fucking chicken in this room.',
    participants: ['Sandor', 'Arya'],
    totalSpending: 15.20,
    date: '03.05.1014'
  },
  {
    id: 2,
    name: 'Red Wedding',
    description: 'They Freys invite the Starks to a Wedding',
    participants: ['Robb', 'Catelyn', 'Walder', 'Roose'],
    totalSpending: 485.32,
    date: '21.08.1013'
  },
  {
    id: 3,
    name: 'Hiking Trip in the North',
    description: 'The boys go on a hiking adventure to catch a zombie',
    participants: ['Jon', 'Tormund', 'Gendry', 'Sandor', 'Beric'],
    totalSpending: 123.45,
    date: '04.12.1017'
  },
  {
    id: 4,
    name: 'Fireworks show',
    description: 'Cersei tests Qyburns Wildfire on some ships',
    participants: ['Cersei', 'Qyburn'],
    totalSpending: 1731.00,
    date: '12.03.1014'
  },

];

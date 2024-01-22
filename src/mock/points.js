import { getRandomNumber } from '../utils/utils.js';

const points = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomNumber(1500),
    'dateFrom': '2019-03-19T00:00',
    'dateTo': '2019-03-20T00:00',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314bca31',
      'b4c3e4e6-9053-42ce-b747-e281314baa35'
    ],
    'type': 'taxi'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2809c',
    'basePrice': getRandomNumber(1500),
    'dateFrom': '2024-03-19T10:30',
    'dateTo': '2019-03-20T11:00',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281313baa31'
    ],
    'type': 'ship'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2806c',
    'basePrice': getRandomNumber(1500),
    'dateFrom': '2019-03-19T12:25',
    'dateTo': '2019-03-20T13:35',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    'isFavorite': false,
    'offers': [],
    'type': 'drive'
  },
];

export { points };

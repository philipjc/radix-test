import { iGeneralState } from './interfaces/index.js';
import {
  faBacon,
  faCarrot,
  faCow,
  faDrumstickBite,
  faEgg,
  faFish,
  faHourglass,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

export const CATEGORIES_AVAILABLE = [
  { text: 'Breakfast', id: 1, icon: faEgg },
  { text: 'Starter', id: 2, icon: faHourglass },
  { text: 'Vegetarian', id: 3, icon: faCarrot },
  { text: 'Vegan', id: 4, icon: faLeaf },
  { text: 'Seafood', id: 5, icon: faFish },
  { text: 'Chicken', id: 6, icon: faDrumstickBite },
  { text: 'Pork', id: 7, icon: faBacon },
  { text: 'Beef', id: 8, icon: faCow },
];

export const initialState: iGeneralState = {
  darkMode: false,
  value: 0,
  fetching: {
    status: 'idle',
  },
  foodCategories: {
    fetching: false,
    categories: [],
  },
  userFoodCategories: {
    categories: CATEGORIES_AVAILABLE,
    current: { text: 'Breakfast', id: 1, icon: faEgg },
  },
  food: {
    fetching: false,
    meals: [],
  },
  recipe: {
    fetching: false,
    meals: [],
    tabView: 0,
  },
};

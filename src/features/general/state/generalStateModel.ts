import { iGeneralState } from './interfaces/index.js';

import {
  faBacon,
  faCarrot,
  faCow,
  faDrumstickBite,
  faEgg,
  faFish,
  faHourglass,
  faIceCream,
  faLeaf,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

// import lambIcon from '../../../assets/icons/noun-lamb-1881764.svg';
// import goatIcon from '../../../assets/icons/noun-goat-3582714.svg';
// import chewingIcon from '../../../assets/icons/noun-chewing-4049897.svg';
// import pastaIcon from '../../../assets/icons/noun-pasta-3096521.svg';

// TODO anything better?
// const goat = goatIcon as unknown as IconDefinition;
// const lamb = lambIcon as unknown as IconDefinition;
// const chewing = chewingIcon as unknown as IconDefinition;
// const pasta = pastaIcon as unknown as IconDefinition;

export interface iCategoryModel {
  text: string;
  id: number;
  icon: IconDefinition;
  isVisible: boolean;
}

export const CATEGORY_OPTIONS: Array<iCategoryModel> = [
  { text: 'Breakfast', id: 1, icon: faEgg, isVisible: true },
  { text: 'Starter', id: 2, icon: faHourglass, isVisible: true },
  { text: 'Vegetarian', id: 3, icon: faCarrot, isVisible: true },
  { text: 'Vegan', id: 4, icon: faLeaf, isVisible: true },
  { text: 'Seafood', id: 5, icon: faFish, isVisible: true },
  { text: 'Chicken', id: 6, icon: faDrumstickBite, isVisible: true },
  { text: 'Pork', id: 7, icon: faBacon, isVisible: true },
  { text: 'Beef', id: 8, icon: faCow, isVisible: true },
  { text: 'Dessert', id: 9, icon: faIceCream, isVisible: true },
  // { text: 'Lamb', id: 10, icon: lamb, isVisible: false },
  // { text: 'Miscellaneous', id: 11, icon: faQuestion, isVisible: false },
  // { text: 'Pasta', id: 12, icon: pasta, isVisible: false },
  // { text: 'Side', id: 13, icon: chewing, isVisible: false },
  // { text: 'Goat', id: 14, icon: goat, isVisible: false },
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
    categories: CATEGORY_OPTIONS,
    current: null,
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

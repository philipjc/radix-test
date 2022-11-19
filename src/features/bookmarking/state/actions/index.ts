import { bookmarkingSlice } from '../bookmarkingSlice';

const { addLikedRecipe } = bookmarkingSlice.actions;

const bookmarkingActions = {
  addLikedRecipe,
};

export default bookmarkingActions;

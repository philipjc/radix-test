import { bookmarkingSlice } from '../bookmarkingSlice';

const { addLikedRecipe, removeLikedRecipe } = bookmarkingSlice.actions;

const bookmarkingActions = {
  addLikedRecipe,
  removeLikedRecipe,
};

export default bookmarkingActions;

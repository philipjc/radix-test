import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectAddLikedRecipes, selectHasLikedRecipes } from '../state/accessors';
import bookmarkingActions from '../state/actions';
import { iMeal } from '../../general/api/mealsByCategory';

interface iUseBookmarking {
  hasLikedRecipes: boolean;
  bookmarks: Array<iMeal>;
  AddLiked: (_meal: iMeal) => {};
}

const useBookmarking = (): iUseBookmarking => {
  const dispatch = useAppDispatch();
  const hasLikes = useAppSelector(selectHasLikedRecipes);
  const likedRecipes = useAppSelector(selectAddLikedRecipes);
  const { addLikedRecipe } = bookmarkingActions;

  function addLike(l: iMeal) {
    return dispatch(addLikedRecipe(l));
  }

  return {
    hasLikedRecipes: hasLikes,
    bookmarks: likedRecipes,
    AddLiked: addLike,
  };
};

export default useBookmarking;

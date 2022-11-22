import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectAddLikedRecipes, selectHasLikedRecipes } from '../state/accessors';
import bookmarkingActions from '../state/actions';
import { iLikedMeal } from '../state/bookmarkingSliceModel';

interface iUseBookmarking {
  hasLikedRecipes: boolean;
  bookmarks: Array<iLikedMeal>;
  isRecipeLiked: (mealId: string) => {};
  AAddLiked: (_meal: iLikedMeal) => {};
  ARemoveLike: (_meal: iLikedMeal) => {};
}

const useBookmarking = (): iUseBookmarking => {
  const dispatch = useAppDispatch();
  const hasLikes = useAppSelector(selectHasLikedRecipes);
  const likedMeals = useAppSelector(selectAddLikedRecipes);
  const { addLikedRecipe, removeLikedRecipe } = bookmarkingActions;

  function addLike(l: iLikedMeal) {
    return dispatch(addLikedRecipe(l));
  }

  function removeLike(l: iLikedMeal) {
    return dispatch(removeLikedRecipe(l));
  }

  function isRecipeInLikeList(mealId: string) {
    const mealFromMealList = likedMeals.filter(meal => meal.id === mealId);
    return mealFromMealList[0] ? mealFromMealList[0].id === mealId : false;
  }

  return {
    hasLikedRecipes: hasLikes,
    bookmarks: likedMeals,
    isRecipeLiked: isRecipeInLikeList,
    AAddLiked: addLike,
    ARemoveLike: removeLike,
  };
};

export default useBookmarking;

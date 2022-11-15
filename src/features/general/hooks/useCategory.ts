import { selectUserCategoriesState } from '../state/accessors';
import { useAppSelector } from '../../../app/hooks';
import { changeCurrentCategory } from '../state/actions';

export function useCategory() {
  const { categories, current } = useAppSelector(selectUserCategoriesState);

  return {
    categories,
    current,
    AChangeCategory: changeCurrentCategory,
  };
}

import { selectUserCategoriesState } from '../state/accessors';
import { useAppSelector } from '../../../app/hooks';

export function useCategory() {
  const { categories, current } = useAppSelector(selectUserCategoriesState);

  return {
    categories,
    current,
  };
}

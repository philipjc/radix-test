import React, { ReactElement, useState, useCallback } from 'react';
import { IngredientsImage } from '../ingredients-image/IngredientsImage';
import { IngredientsAmount } from '../ingredients-amount/IngredientsAmount';
import { IngredientsList } from '../ingredient-list/IngredientList';

export function Ingredients(): ReactElement {
  const [ingredientsQty, updateIngQty] = useState(1);

  const increaseMealCountCallback = useCallback(() => {
    updateIngQty(ingredientsQty < 8 ? ingredientsQty + 1 : ingredientsQty);
  }, [ingredientsQty]);

  const decreaseMealCountCallback = useCallback(() => {
    updateIngQty(ingredientsQty > 1 ? ingredientsQty - 1 : ingredientsQty);
  }, [ingredientsQty]);

  return (
    <div>
      <IngredientsImage />
      <IngredientsAmount
        quantity={ingredientsQty}
        increase={increaseMealCountCallback}
        decrease={decreaseMealCountCallback}
      />
      <IngredientsList quantity={ingredientsQty} />
    </div>
  );
}

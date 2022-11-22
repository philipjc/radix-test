import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';
import { iMealRecipe } from '../../features/general/api/mealRecipe';
import { formatQuantity } from 'format-quantity';

interface IListProps {
  quantity: number;
}

const API_STRING_INGREDIENT = 'strIngredient';
const API_STRING_MEASURE = 'strMeasure';

const findIngredients = (meals: Array<iMealRecipe>, recipeKeys: Array<string>): Array<string> => {
  return (
    recipeKeys
      .filter((key: string) => key.includes(API_STRING_INGREDIENT))
      // @ts-ignore
      .map((ingredientName: string) => meals[0][ingredientName])
  );
};

const findMeasures = (meals: Array<iMealRecipe>, recipeKeys: Array<string>): Array<string> => {
  return (
    recipeKeys
      .filter((key: string) => key.includes(API_STRING_MEASURE))
      // @ts-ignore
      .map((ingredientName: string) => meals[0][ingredientName])
  );
};

const calculateMeasures = (measures: Array<string>, quantity: number): Array<string> => {
  return measures.map((measure: string): any => {
    const splitMeasureSpace = measure.split(' ');
    const splitMeasureMg = measure.split('m');
    const splitMeasureKg = measure.split('k');

    const splitOnSplitter =
      splitMeasureSpace.length > 1
        ? ' '
        : splitMeasureMg.length > 1
        ? 'm'
        : splitMeasureKg.length > 1
        ? 'k'
        : 'g';

    const mapMeasures = () => {
      const measureSplit = measure.split(splitOnSplitter);
      return measureSplit
        .map((measureNumberString: string) => {
          // npm: format-quantity

          const isQuarter = measureNumberString === String.fromCharCode(188);
          const isHalf = measureNumberString === String.fromCharCode(189);
          const isThreeQuarter = measureNumberString === String.fromCharCode(190);

          if (isQuarter) {
            const measureValue = 0.25;

            return formatQuantity(quantity * measureValue);
          }

          if (isHalf) {
            const measureValue = 0.5;

            return formatQuantity(quantity * measureValue);
          }

          if (isThreeQuarter) {
            const measureValue = 0.75;

            return formatQuantity(quantity * measureValue);
          }

          const coercionNumber: number = Number(measureNumberString);

          if (Number(measureNumberString) === 0) return measureNumberString;

          const measureIsNumber = !isNaN(coercionNumber);

          if (!measureIsNumber) {
            if (measureNumberString === '1/2') {
              const measureValue = 0.5;
              return formatQuantity(quantity * measureValue);
            }
          }

          if (measureIsNumber) {
            return String(coercionNumber * quantity);
          }

          return measureNumberString;
        })
        .join(splitOnSplitter);
    };

    return mapMeasures();
  });

  /*
    g
    kg
    oz
    mml
    /4 (1/2) oz
    tsp
    tbsp
    small
    Medium
    large
    teaspoon
    cup
    cups
    cm

    shredded
    sprigs of fresh
    Beaten
    Greated zest of
    Dash
    parts
    Dusting
    sprinkling
    pinch
    garnish
    for frying
  */
};

export function IngredientsList({ quantity }: IListProps): ReactElement {
  const { recipeState } = useMealRecipe();

  const { meals } = recipeState;
  const recipeKeys = Object.keys(meals[0] || {});

  const ingredients = findIngredients(meals, recipeKeys);
  let measures = findMeasures(meals, recipeKeys);

  if (quantity > 1) {
    measures = calculateMeasures(measures, quantity);
  }

  return (
    <div className="column content">
      <h2>Ingredients</h2>
      <ul className="ml-0 pl-4">
        {ingredients.map((ingredient: string, idx: number) => {
          return (
            ingredient && (
              <li className="is-size-6 mb-3" key={`ingredient-${idx}`}>
                <div className="is-flex is-justify-content-space-between">
                  <span className="is-flex-grow-1">{ingredient}</span>
                  <span className="has-text-right">{measures[idx]}</span>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

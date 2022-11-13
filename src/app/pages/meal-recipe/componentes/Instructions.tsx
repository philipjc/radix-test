import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../../../features/general/hooks/useMealRecipe';

export function Instructions(): ReactElement {
  const { recipeState } = useMealRecipe();
  const { meals } = recipeState;
  const { strInstructions } = meals[0] || {};

  return (
    <div className="column">
      <ul className="ml-0 pl-4">
        {strInstructions &&
          strInstructions.split('.').map((line: string, idx: number) => {
            return Number(line)
              ? null
              : line && (
                  <li className="ml-0 mb-2 pl-0 is-size-5" key={`Instruction-line-${idx}`}>
                    {line}
                  </li>
                );
          })}
      </ul>
    </div>
  );
}

import React, { ReactElement } from 'react';
import { MainHeroCopy } from './MainHeroCopy';

const heroPic = 'https://res.cloudinary.com/philipjc/image/upload/v1668810168/hero-food-chop.jpg';

export function MainHeroImage(): ReactElement {
  return (
    <figure
      className="image column is-7 p-0"
      style={{
        backgroundImage: `url(${heroPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MainHeroCopy />
    </figure>
  );
}

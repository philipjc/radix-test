import React, { ReactElement } from 'react';
// @ts-ignore
import { InView } from 'react-intersection-observer';
import { useAppDispatch } from '../../app/hooks';
import { updateHeroSection } from '../../features/page-observer/pageObserverSlice';

const heroPic = 'https://res.cloudinary.com/philipjc/image/upload/v1668810168/hero-food-chop.jpg';

export function MainHeroImage(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <>
      <InView onChange={(inView: boolean, entry: any) => dispatch(updateHeroSection(inView))} />
      <figure
        className="image column is-7 p-0"
        style={{
          backgroundImage: `url(${heroPic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></figure>
    </>
  );
}

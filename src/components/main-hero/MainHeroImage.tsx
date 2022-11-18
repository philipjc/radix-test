import React, { ReactElement } from 'react';
// @ts-ignore
import { InView } from 'react-intersection-observer';
import { useAppDispatch } from '../../app/hooks';
import { updateHeroSection } from '../../features/page-observer/pageObserverSlice';
import foodPic from '../../assets/images/hero-food-chop.jpg';

const heroPic = foodPic || 'https://baconmockup.com/620/200';

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

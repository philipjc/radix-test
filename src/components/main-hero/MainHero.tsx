import React, { ReactElement } from 'react';
import { BookmarkCard } from '../../features/bookmarking/components/Bookmarking/BookmarkCard';
import { InView } from 'react-intersection-observer';
import { useAppDispatch } from '../../app/hooks';
import { MainHeroImage } from './MainHeroImage';
import { updateHeroSection } from '../../features/page-observer/pageObserverSlice';

import SharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled } = SharedStyled;

export function MainHero(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <DarkerDMSectionStyled className="section column is-10 is-flex m-auto" style={{ height: 300 }}>
      <InView onChange={(inView: boolean, entry: any) => dispatch(updateHeroSection(inView))} />
      <MainHeroImage />
      <BookmarkCard />
    </DarkerDMSectionStyled>
  );
}

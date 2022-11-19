import React, { ReactElement } from 'react';
import { BookmarkCard } from '../../features/bookmarking/components/Bookmarking/BookmarkCard';
import { MainHeroCopy } from './MainHeroCopy';
import { MainHeroImage } from './MainHeroImage';
import SharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

export function MainHero(): ReactElement {
  return (
    <DarkerDMSectionStyled className="section pt-2 pb-3">
      <AppConstrainSize className="column is-10 m-auto" style={{ position: 'relative' }}>
        <div className="is-flex">
          <MainHeroCopy />
          <MainHeroImage />
          <BookmarkCard />
        </div>
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}

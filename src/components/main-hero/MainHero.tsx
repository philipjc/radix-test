import React, { ReactElement } from 'react';
import { BookmarkCard } from './BookmarkCard';
import { MainHeroCopy } from './MainHeroCopy';
import { MainHeroImage } from './MainHeroImage';
import SharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

export function MainHero(): ReactElement {
  return (
    <DarkerDMSectionStyled className="section pt-2 pb-3">
      <AppConstrainSize className="column is-10 m-auto">
        <MainHeroCopy />
        <div
          className="column is-flex hero-body pt-0 pb-0 pl-2 pr-0"
          style={{ position: 'relative' }}
        >
          <MainHeroImage />
          <BookmarkCard />
        </div>
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}

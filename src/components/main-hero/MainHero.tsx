import React, { ReactElement } from 'react';
import SharedStyled from '../../shared-styled/SharedStyled';
import { LazyImage } from '../lazy-image/LazyImage';
import { MainHeroNav } from './MainHeroNav';

const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

export function MainHero(): ReactElement {
  return (
    <DarkerDMSectionStyled>
      <AppConstrainSize className="column is-10 ml-auto mr-auto m-auto">
        <DarkerDMSectionStyled className="hero is-large main-hero column is-12 m-auto">
          <div className="columns is-mobile hero-body is-flex is-justify-content-space-between p-0 pl-6 pr-6 pt-6 pb-6">
            <div className="column">
              <div className="container is-flex is-flex-direction-column is-align-items-flex-start">
                <h2 className="title is-2">Foode..</h2>
                <h5 className="subtitle is-5">Food for all the foode's</h5>
              </div>
            </div>
            <div className="column">
              <figure className="image column p-0">
                <LazyImage />
              </figure>
            </div>
          </div>
          <div className="hero-foot">
            <MainHeroNav />
          </div>
        </DarkerDMSectionStyled>
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}

import React, { ReactElement } from 'react';
import { LazyImage } from '../lazy-image/LazyImage';
import SharedStyled from '../../shared-styled/SharedStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

export function MainHero(): ReactElement {
  return (
    <DarkerDMSectionStyled className="section pt-2 pb-3">
      <AppConstrainSize className="column is-10 ml-auto mr-auto m-auto">
        <DarkerDMSectionStyled className="hero is-large main-hero column is-12 m-auto">
          <div
            className="columns hero-body pt-0 pb-0 pl-2 pr-0"
            style={{ position: 'relative', height: '32vh' }}
          >
            <div className="p-5" style={{ position: 'absolute', zIndex: 1 }}>
              <div
                className="container is-flex is-flex-direction-column is-align-items-flex-start p-2"
                style={{
                  boxShadow: '0 2px 20px 30px rgba(60, 61, 61, 0.4)',
                  backgroundColor: 'rgba(60,61,61,0.4)',
                }}
              >
                <h2 className="title is-2 white-color">Foode..</h2>
                <h5 className="subtitle is-5 white-color">Food for all the foode's</h5>
              </div>
            </div>
            <figure className="image column is-8 p-0" style={{ height: '32vh' }}>
              <LazyImage />
            </figure>
            <div className="column is-4 pt-0 pr-2 ml-1">
              <div className="card is-flex" style={{ height: '20vh' }}>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '2em' }} />
                    </div>
                  </div>

                  <div className="content">
                    <div className="media-content">
                      <p className="title is-size-4 has-text-left">My Recipes</p>
                      <p className="has-text-left is-size-5">Do you have any bookmarked?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DarkerDMSectionStyled>
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}

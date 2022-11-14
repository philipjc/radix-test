import React, { ReactElement } from 'react';
import { LazyImage } from '../lazy-image/LazyImage';
import SharedStyled from '../../shared-styled/SharedStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

const baconPic = 'https://baconmockup.com/620/200';

export function MainHero(): ReactElement {
  return (
    <DarkerDMSectionStyled className="section pt-2 pb-3">
      <AppConstrainSize className="column is-10 m-auto">
        <div
          className="is-flex is-flex-direction-column is-align-items-flex-start p-2 mt-4 ml-5"
          style={{
            boxShadow: '0 2px 20px 30px rgba(60, 61, 61, 0.3)',
            backgroundColor: 'rgba(60,61,61,0.3)',
            position: 'absolute',
            zIndex: 1,
          }}
        >
          <h2 className="title is-2 white-color">Foode..</h2>
          <h5 className="subtitle is-5 white-color">Food for all the foode's</h5>
        </div>
        <div
          className="column is-flex hero-body pt-0 pb-0 pl-2 pr-0"
          style={{ position: 'relative' }}
        >
          <figure
            className="image column is-8 p-0"
            style={{
              backgroundImage: `url(${baconPic})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></figure>
          <div className="column is-4 pt-0 pr-2 ml-1 pb-0">
            <div className="card ml-auto is-flex" style={{ maxWidth: '312px' }}>
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
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}

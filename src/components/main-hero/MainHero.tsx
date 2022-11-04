import React from 'react';
import SharedStyled from '../../shared-styled/SharedStyled';
import MainHeroImage from '../../assets/images/hero-food-chop.jpg';

const { DarkerDMSectionStyled } = SharedStyled;

export function MainHero() {
  return (
    <DarkerDMSectionStyled className="hero is-large main-hero">
      <div className="hero-body is-flex is-justify-content-space-between pt-6 pb-6">
        <div className="container is-flex is-flex-direction-column is-align-items-flex-start">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
        <figure className="image column">
          <img src={MainHeroImage} alt="main hero image" />
        </figure>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">Modifiers</a>
              </li>
              <li>
                <a href="/">Grid</a>
              </li>
              <li>
                <a href="/">Elements</a>
              </li>
              <li>
                <a href="/">Components</a>
              </li>
              <li>
                <a href="/">Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </DarkerDMSectionStyled>
  );
}

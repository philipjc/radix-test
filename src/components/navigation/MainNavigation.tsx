import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SharedStyled from '../../shared-styled/SharedStyled';

const { DMAnchorBackground, DarkerDMSectionStyled, DMDivStyled } = SharedStyled;

export function MainNavigation(): ReactElement {
  return (
    <DarkerDMSectionStyled className="section pb-5">
      <div className="column is-10 ml-auto mr-auto">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="alt text"
              />
            </Link>

            <DMAnchorBackground
              href="/"
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </DMAnchorBackground>
          </div>

          <DMDivStyled id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="/" className="navbar-item">
                Home
              </a>

              <a href="/" className="navbar-item">
                Documentation
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a href="/" className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a href="/" className="navbar-item">
                    About
                  </a>
                  <a href="/" className="navbar-item">
                    Jobs
                  </a>
                  <a href="/" className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a href="/" className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a href="/" className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a href="/" className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DMDivStyled>
        </nav>
      </div>
    </DarkerDMSectionStyled>
  );
}

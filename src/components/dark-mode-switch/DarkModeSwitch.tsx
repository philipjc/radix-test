import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { darkMode } from '../../features/general/state/actions';
import { selectDarkMode } from '../../features/general/state/accessors';
import darkModeSwitchStyles from './dark-mode-switch.styled';
import SharedStyles from '../../shared-styled/SharedStyled';
import { BackButton } from '../back-button/BackButton';

const { DMSectionStyled } = SharedStyles;
const { StyledSwitch, StyledThumb } = darkModeSwitchStyles;

export function DarkModeSwitch(): ReactElement {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectDarkMode);

  return (
    <DMSectionStyled className="section pt-2 pb-2">
      <div className="column is-10 ml-auto mr-auto">
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <BackButton />
          <StyledSwitch id="s1" onCheckedChange={() => dispatch(darkMode())}>
            <StyledThumb>
              {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </StyledThumb>
          </StyledSwitch>
        </div>
      </div>
    </DMSectionStyled>
  );
}

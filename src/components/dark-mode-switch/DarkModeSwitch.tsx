import { ReactElement } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { darkMode } from '../../features/general/state/generalSlice';
import darkModeSwitchStyles from './dark-mode-switch.styled';
import SharedStyles from '../../shared-styled/SharedStyled';

const { DMSectionStyled } = SharedStyles;
const { Flex, Label, StyledSwitch, StyledThumb } = darkModeSwitchStyles;

export function DarkModeSwitch(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <DMSectionStyled className="section pt-2 pb-2">
      <div className="column is-10 ml-auto mr-auto">
        <form>
          <Flex>
            <Label htmlFor="s1">Dark mode</Label>
            <StyledSwitch id="s1" onCheckedChange={() => dispatch(darkMode())}>
              <StyledThumb />
            </StyledSwitch>
          </Flex>
        </form>
      </div>
    </DMSectionStyled>
  );
}

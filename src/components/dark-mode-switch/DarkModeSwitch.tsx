import { ReactElement } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { darkMode } from '../../features/general/generalSlice';
import darkModeSwitchStyles from './dark-mode-switch.styled';
import SharedStyles from '../../shared-styled/SharedStyled';

const { DarkModeSectionStyled } = SharedStyles;
const { Flex, Label, StyledSwitch, StyledThumb } = darkModeSwitchStyles;

export function DarkModeSwitch(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <DarkModeSectionStyled className="section pt-2 pb-2">
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
    </DarkModeSectionStyled>
  );
}

import { ReactElement } from 'react';
import darkModeSwitchStyles from './dark-mode-switch.styled';
import { useAppDispatch } from '../../app/hooks';
import { darkMode } from '../../features/general/generalSlice';

const { Flex, Label, StyledSwitch, StyledThumb, SwitchSectionStyled } = darkModeSwitchStyles;

export function DarkModeSwitch(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <SwitchSectionStyled className="section pt-2 pb-2">
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
    </SwitchSectionStyled>
  );
}

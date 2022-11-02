import { ReactElement } from 'react';
import darkModeSwitchStyles from './dark-mode-switch.styled';
import { useAppDispatch } from '../../app/hooks';
import { darkMode } from '../../features/general/generalSlice';

const { Flex, Label, StyledSwitch, StyledThumb } = darkModeSwitchStyles;

export function DarkModeSwitch(): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <section className="section">
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
    </section>
  );
}

import { ReactElement } from 'react';
import darkModeSwitchStitches from './dark-mode-switch.stitches';

const { Flex, Label, StyledSwitch, StyledThumb } = darkModeSwitchStitches;

export function DarkModeSwitch(): ReactElement {
  return (
    <section className="section">
      <div className="column is-10 ml-auto mr-auto">
        <form>
          <Flex>
            <Label htmlFor="s1">Dark mode</Label>
            <StyledSwitch
              defaultChecked
              id="s1"
            >
              <StyledThumb />
            </StyledSwitch>
          </Flex>
        </form>
      </div>
    </section>
  );
}

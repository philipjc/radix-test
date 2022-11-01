import styled from 'styled-components';
import { blackA } from '@radix-ui/colors';
import * as SwitchPrimitive from '@radix-ui/react-switch';

// WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', '&:focus': {

const StyledSwitch = styled(SwitchPrimitive.Root)`
  all: unset;
  width: 42px;
  height: 25px;
  border-radius: 9999px;
  position: relative;
  box-shadow: ${props => props.theme.dark.colors.blue4};

  background-color: ${props => props.theme.dark.colors.blue4};
  color: ${props => props.theme.dark.colors.blue11};
  border-color: ${props => props.theme.dark.colors.blue7};

  &[data-state='checked'] {
    background-color: black;
  }
`;

const StyledThumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: grey;
  border-radius: 9999px;
  box-shadow: 02px 2px ${props => props.theme.dark.colors.blue4};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;

const Flex = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled('label')`
  // color: 'white;,
  font-size: 15px;
  line-height: 1;
  user-select: none;
  padding-right: 15px;
`;

const darkModeSwitchStitches = {
  StyledSwitch,
  StyledThumb,
  Flex,
  Label,
};

export default darkModeSwitchStitches;

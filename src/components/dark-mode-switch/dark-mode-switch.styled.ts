import styled from 'styled-components';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root)`
  all: unset;
  width: 42px;
  height: 25px;
  border-radius: 9999px;
  position: relative;
  box-shadow: ${props => props.theme.colors.blue4};

  background-color: ${props => props.theme.colors.blue6};
  color: ${props => props.theme.colors.blue11};
  border-color: ${props => props.theme.colors.blue11};
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0);
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
  box-shadow: 02px 2px ${props => props.theme.colors.blue6};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.gray12};
  font-size: 15px;
  line-height: 1;
  user-select: none;
  padding-right: 15px;
`;

const darkModeSwitchStyles = {
  StyledSwitch,
  StyledThumb,
  Flex,
  Label,
};

export default darkModeSwitchStyles;

import styled from 'styled-components';
import sharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled } = sharedStyled;

export const CategoryAnimation: any = styled(DarkerDMSectionStyled)`
  position: fixed;
  top: 0;
  z-index: 1;
  padding-right: 0;
  background-color: transparent;

  animation-duration: 1.6s;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-direction: alternate;

  @keyframes fadeInOpacity {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`;

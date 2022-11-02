import styled from 'styled-components';

const DarkModeSectionStyled = styled.section`
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const DarkModeAnchorBackground = styled.a`
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const SharedStyles = {
  DarkModeAnchorBackground,
  DarkModeSectionStyled,
};

export default SharedStyles;

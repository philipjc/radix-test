import styled from 'styled-components';

const DMSectionStyled = styled.section`
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const DarkerDMSectionStyled = styled.section`
  border-bottom: 2px solid ${props => props.theme.colors.blue6};
  background-color: ${props => props.theme.colors.blue3};
  transition: background-color 0.8s;

  // Main Nav
  .navbar-brand {
    background-color: ${props => props.theme.colors.blue4};
  }

  // Main Hero
  .hero-body {
    background-color: ${props => props.theme.colors.blue5};
  }
`;

const DMDivStyled = styled.section`
  color: ${props => props.theme.colors.gray12};
  transition: background-color 0.8s;
  background-color: ${props => props.theme.colors.blue4};
`;

const DMAnchorBackground = styled.a`
  color: ${props => props.theme.colors.gray12};
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const SharedStyles = {
  DMAnchorBackground,
  DMSectionStyled,
  DMDivStyled,
  DarkerDMSectionStyled,
};

export default SharedStyles;

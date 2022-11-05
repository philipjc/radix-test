import styled from 'styled-components';

const DMSectionStyled = styled.section`
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const DarkerDMSectionStyled = styled.section`
  background-color: ${props => props.theme.colors.blue3};
  transition: background-color 0.8s;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    color: ${props => props.theme.colors.gray12};
  }

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

  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.gray12};
  }
`;

const DMAnchorBackground = styled.a`
  color: ${props => props.theme.colors.gray12};
  background-color: ${props => props.theme.colors.blue2};
  transition: background-color 0.8s;
`;

const AppConstrainSize = styled.div`
  background-color: ${props => props.theme.colors.blue3};
`;

const SharedStyles = {
  DMAnchorBackground,
  DMSectionStyled,
  DMDivStyled,
  DarkerDMSectionStyled,
  AppConstrainSize,
};

export default SharedStyles;

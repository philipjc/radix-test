import styled from 'styled-components';

const DMAppBackground = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.blue3};
  transition: background-color 0.8s;
`;

const AppStyles = {
  DMAppBackground,
};

export default AppStyles;

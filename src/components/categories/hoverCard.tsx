import styled from 'styled-components';

export const HoverStyle = styled.div`
  margin-bottom: 2em;
  flex: 1;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  .category-bin {
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: all ease-in-out 0.6s;
  }

  &:hover {
    opacity: 0.8 !important;
    color: #444;

    .category-bin {
      display: initial;
      opacity: 1;
    }
  }
`;

export const HoverAddCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 200;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 0.7 !important;
    font-size: 2.2em;
  }
`;

export const HoverSpan = styled.span`
  opacity: 0.8;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    font-weight: bolder;
  }
`;

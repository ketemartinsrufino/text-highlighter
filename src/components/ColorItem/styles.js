import styled from 'styled-components';

export const ColorItemStyled = styled.div`
  background-color: ${({color}) => color};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 5px;
  border: 1px #a97c7c solid;

  ${({ isSelected }) => isSelected && `
    border: 2px black solid
  `}

  :hover {
    cursor: pointer:
  }
`;
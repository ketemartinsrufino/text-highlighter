import styled from 'styled-components';

export const TextListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSpan = styled.span`
  background-color: ${({color}) => color};
  margin: 5px;
  padding: 5px;
  max-width: 90%;
`
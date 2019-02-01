import React from 'react';
import styled, {css} from 'styled-components';

const Column = styled.div`
  display: flex;
  ${props => props.justifyEnd && css`
    justify-content: flex-end;
  `}
  ${props => props.justifyCenter && css`
    justify-content: center;
  `}
`;



export default Column;
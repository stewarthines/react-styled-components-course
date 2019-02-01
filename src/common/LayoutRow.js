import React from 'react';
import styled, {css} from 'styled-components';


const Row = styled.div`
  display: grid;
  grid-template-rows: 1f;
  grid-gap:${props => props.theme.layoutGridGap};
  width: 100%;
  max-width: ${props => props.theme.layoutMaxWidth};
  margin: 0 auto;
  font-family: ${props => props.theme.layoutFontFamily};
  font-size: ${props => props.theme.layoutFontSize};
  font-weight: ${props => props.theme.layoutFontWeight};
  line-height: ${props => props.theme.layoutLineHeight};

  ${props => props.colTwo && css`
    @media screen and (min-width: 1024px){
      grid-template-columns: 1fr 1fr;
    }
  `}
  ${props => props.colThree && css`
    @media screen and (min-width: 1024px){
      grid-template-columns:  1fr 1fr 1fr;
    }
  `}
  ${props => props.alignCenter && css`
    align-items:center;
  `}
`;
export default Row;
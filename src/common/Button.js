import React from 'react';
import styled, {css} from 'styled-components';


const Button = styled.button`
  display: flex;
  height: 48px;
  padding:0 48px;
  color:${props => props.theme.darkBlue};
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  background: ${props => props.theme.lightBlue};
  border: 1px solid ${props => props.theme.darkBlue};
  border-radius: ${props => props.theme.borderRadiusGlobal};
  outline: none;

  &:hover{
    background: red;
  }

  ${props => props.primary && css`
    color: white;
    background:#2699FB;
  `}
  ${props => props.secondary && css`
    background:#7F7F7F;

  `}
`;

export default Button;
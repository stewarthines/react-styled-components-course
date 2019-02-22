import React from 'react';
import styled, {css} from 'styled-components';


const Button = styled.button`
  display: flex;
  justify-content: czenter;
  align-items: center;
  height: 36px;
  padding:0 36px;
  color:${props => props.theme.primaryDark};
  fill:${props => props.theme.primaryDark};
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  background: ${props => props.theme.primaryLight};
  border: 1px solid ${props => props.theme.primaryDark};
  border-radius: ${props => props.theme.borderRadiusGlobal};
  outline: none;
  transition: all 250ms ease-in-out;

  &:hover{
    background:${props => props.theme.primaryMid};
    transition: all 250ms ease-in-out;
  }

  ${props => props.primary && css`
    color: ${props => props.theme.white};;
    background:${props => props.theme.primaryDark};;
  `}
  ${props => props.secondary && css`
    color: ${props => props.theme.secondaryDark};
    fill: ${props => props.theme.secondaryDark};
    background:${props => props.theme.secondaryMid};
    border-color: ${props => props.theme.secondaryDark};
    &:hover{
      background: ${props => props.theme.secondaryLight};
    }
  `}
`;

export default Button;
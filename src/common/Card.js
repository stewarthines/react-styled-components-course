import React from 'react';
import styled, {css} from 'styled-components';
const Card = styled.div`
  
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 18px;  
  border: 1px solid ${props => props.theme.primaryDark};  
  border-radius: 8px;
  background: ${props => props.theme.white};
`;
export default Card;

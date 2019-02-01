import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.article`
  display: grid;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  max-width:${props => props.theme.layoutMaxWidth};
`;

export default Container;
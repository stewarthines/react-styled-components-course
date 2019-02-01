import React from 'react';
import styled, {css} from 'styled-components';


const Layout = styled.div`
  display: grid;
  width: 90%;
  max-width: ${props => props.theme.layoutMaxWidth};
  margin: 0 auto;
  font-family: ${props => props.theme.layoutFontFamily};
  font-size: ${props => props.theme.layoutFontSize};
  font-weight: ${props => props.theme.layoutFontWeight};
  line-height: ${props => props.theme.layoutLineHeight};
`;
export default Layout;
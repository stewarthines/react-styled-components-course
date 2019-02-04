import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 24px;
    background: ${props => props.theme.primaryLight};
  }
`

export default GlobalStyle;
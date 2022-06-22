import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .sc-dPaNzc{
    background-color:#000 !important;
  }
  #join-pool-button{
    background-color:#ffd600 !important;
    color:#000 !important;
  }
  #import-pool-link{
    color:#ffd600 !important;
    border-color:#ffd600 !important;
  }

`

export default GlobalStyle

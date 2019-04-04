import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import config from './config'

export const theme = config

injectGlobal`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${config.font};
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: -.02em;
  }
  ::selection {
    background-color: ${theme.colors.alt};
    color: ${theme.colors.white};
  }
  img {
    max-width: 100%;
  }
  .mono {
    font-family: ${config.mono};
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
  p > a,
  strong,
  b {
    font-weight: bold !important;
  }
  @supports (padding: calc(max(env(safe-area-inset-left)))) {
    #___gatsby > div > * {
      padding-left: calc(max(${theme.space[2]}px, env(safe-area-inset-left)));
      padding-right: calc(max(${theme.space[2]}px, env(safe-area-inset-right)));
    }
  }
`

const ThemeProvider = ({ children }) => (
  <Root theme={config}>
    <>{children}</>
  </Root>
)

export default ThemeProvider

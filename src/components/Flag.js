import styled, { css } from 'styled-components'
import theme from 'theme/config'
import { Link } from 'gatsby'

const Flag = styled(Link).attrs({
  to: '/',
  'aria-label': 'Logo for homepage'
})`
  display: inline-block;
  background-repeat: no-repeat;
  background-size: auto 100%;
  flex-shrink: 0;
  height: 64px;
  ${props =>
    props.lockup
      ? css`
          background-image: url(${require('../../static/lockup-alt.svg')});
          width: 183px;
        `
      : css`
          background-image: url(${require('../../static/flag-bright.svg')});
          border-radius: ${theme.pill};
          width: 64px;
          ${theme.mediaQueries.md} {
            width: 72px;
            height: 72px;
          }
        `}
`

export default Flag

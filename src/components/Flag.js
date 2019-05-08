import styled from 'styled-components'
import { Box } from '@hackclub/design-system'
import theme from 'theme/config'
import { Link } from 'gatsby'

const Flag = styled(Box.withComponent(Link)).attrs({
  to: '/',
  'aria-label': 'Logo for homepage'
})`
  display: inline-block;
  background-repeat: no-repeat;
  background-size: auto 100%;
  flex-shrink: 0;
  height: 64px;
  background-image: url(${require('../../static/flag-bright.svg')});
  border-radius: ${theme.pill};
  width: 64px;
  ${theme.mediaQueries.md} {
    width: 72px;
    height: 72px;
  }
`

export default Flag

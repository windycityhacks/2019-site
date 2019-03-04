import styled from 'styled-components'
import { Flex, theme } from '@hackclub/design-system'

const Card = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'center',
  p: [3, 4],
  bg: 'white'
})`
  border: 2px dashed ${theme.colors.smoke};
  position: relative;
  &:before,
  &:after {
    content: '+';
    position: absolute;
    font-weight: bold;
    color: ${theme.colors.alt};
    line-height: 1;
    font-size: ${theme.fontSizes[3]}px;
    background: ${theme.colors.white};
  }
  @media screen and (max-width: ${theme.breakpoints[1]}em) {
    &:before {
      left: -6px;
      top: -12px;
      padding-right: 2px;
    }
    &:after {
      right: -8px;
      bottom: -10px;
      padding-left: 5px;
    }
  }
  ${theme.mediaQueries.md} {
    &:nth-of-type(odd) {
      &:before {
        left: -6px;
        top: -12px;
        padding-right: 2px;
      }
      &:after {
        right: -8px;
        bottom: -10px;
        padding-left: 5px;
      }
    }
    &:nth-of-type(even) {
      &:before {
        right: -7px;
        padding-left: 3px;
        top: -12px;
      }
      &:after {
        left: -6px;
        padding-right: 6px;
        bottom: -10px;
      }
    }
  }
`

export default Card

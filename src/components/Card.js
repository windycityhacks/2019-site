import styled from 'styled-components'
import { Flex, theme } from '@hackclub/design-system'

const Card = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'center',
  p: [3, 4]
})`
  border-radius: ${theme.radius};
  &:nth-of-type(odd) {
    background-image: radial-gradient(
      ellipse farthest-corner at top left,
      ${theme.colors.primaryWash},
      ${theme.colors.snow}
    );
  }
  &:nth-of-type(even) {
    background-image: radial-gradient(
      ellipse farthest-corner at bottom right,
      ${theme.colors.primaryWash},
      ${theme.colors.snow}
    );
  }

  h3 {
    line-height: 1.125;
  }
`

export default Card

import styled from 'styled-components'
import { Flex, theme } from '@hackclub/design-system'

const Card = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'center',
  p: [3, 4],
  bg: 'primaryWash'
})`
  border-radius: ${theme.radii[2]};
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme.colors.primaryWashLight},
    ${theme.colors.primaryWash}
  );

  &:nth-of-type(even) {
    background-image: radial-gradient(
      ellipse farthest-corner at top right,
      ${theme.colors.primaryWashLight},
      ${theme.colors.primaryWash}
    );
  }

  h3 {
    line-height: 1.125;
  }
`

export default Card

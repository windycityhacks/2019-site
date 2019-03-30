import styled from 'styled-components'
import { Flex, theme } from '@hackclub/design-system'

const Card = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'center',
  p: [3, 4],
  bg: 'primaryWash'
})`
  border-radius: ${theme.radii[2]};

  h3 {
    line-height: 1.125;
  }
`

export default Card

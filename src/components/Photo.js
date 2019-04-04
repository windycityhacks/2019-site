import styled from 'styled-components'
import { Box } from '@hackclub/design-system'
import { theme } from 'theme'

const Photo = styled(Box.withComponent('img'))`
  overflow: hidden;
  object-fit: cover;
  border-radius: ${theme.radii[2]};
`

export default Photo

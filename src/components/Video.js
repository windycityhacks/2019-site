import styled from 'styled-components'
import { Box } from '@hackclub/design-system'
import { theme } from 'theme'

const Video = styled(Box.withComponent('video')).attrs({
  autoPlay: true,
  muted: true,
  loop: true
})`
  overflow: hidden;
  border-radius: ${theme.radii[1]};
  max-width: 100%;
`

export default Video

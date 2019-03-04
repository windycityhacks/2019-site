import styled from 'styled-components'
import { Heading, theme } from '@hackclub/design-system'

const Headline = styled(Heading.h2).attrs({
  color: theme.colors.alt,
  fontSize: [5, 6],
  mb: 0
})`
  font-weight: bold;
  line-height: 1.125;
`

export default Headline

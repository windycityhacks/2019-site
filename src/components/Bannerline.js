import React from 'react'
import styled from 'styled-components'
import { Text } from '@hackclub/design-system'
import { theme } from 'theme'

const Base = styled(Text).attrs({
  color: theme.colors.muted,
  mt: [4, 5],
  mb: 3,
  fontSize: 4,
  className: 'mono',
  children: '----------------'
})`
  position: relative;
  left: -4px;
  user-select: none;
  &:before,
  &:after {
    content: '+';
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`

const Bannerline = props => <Base {...props} />

export default Bannerline

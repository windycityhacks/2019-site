import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Flag from 'components/Flag'
import { Link } from 'gatsby'

const Base = styled(Box.withComponent('header')).attrs({
  py: 3,
  width: 1
})`
  z-index: 4;
  + * {
    flex: 1 1 auto;
  }
`

const Bar = styled(Flex.withComponent('nav')).attrs({
  align: 'center',
  justify: 'center',
  px: 3
})`
  color: ${props => theme.cx(props.color)};
`

const Item = styled(A.withComponent(Link)).attrs({
  fontSize: [2, 3],
  px: [2, 3],
  py: 2
})`
  color: inherit !important;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
`

const Nav = ({ color = 'white', ...props }) => (
  <Base role="banner" {...props}>
    <Bar role="navigation" color={theme.colors[color]}>
      <Flag mr={[2, 3]} />
      <Item to="/schedule" children="Schedule" />
      <Item to="/venue" children="Venue" />
      <Item
        to="/register"
        children="Register"
        style={{ textDecoration: 'line-through' }}
      />
    </Bar>
  </Base>
)

export default Nav

import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Container, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'
import Link from 'gatsby-link'

const Base = styled(Box.withComponent('header')).attrs({
  py: 3,
  width: 1
})`
  z-index: 4;
`

const Inner = styled(Container.withComponent(Flex)).attrs({
  maxWidth: 36,
  justify: 'space-between',
  align: 'center',
  mx: 'auto',
  role: 'navigation'
})``

const Bar = styled(Box.withComponent('nav'))`
  opacity: 0.875;
  transition: ${theme.transition} opacity;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const Logo = styled(A.withComponent(Link)).attrs({
  to: '/',
  color: 'white',
  fontSize: [3, 4],
  bold: true
})`
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
`

const Item = styled(A.withComponent(Link)).attrs({
  color: 'inherit',
  fontSize: [2, 3],
  my: 1,
  mx: 3
})`
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
`

const BtnItem = styled(Action).attrs({
  bg: 'alt',
  fontSize: [2, 3],
  scale: true,
  px: 3,
  py: 2,
  my: 1,
  ml: 3
})`
  box-shadow: ${theme.boxShadows[0]} !important;
  text-transform: uppercase;
`

const Nav = ({ color = 'primary', ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color}>
      <Logo>Windy City Hacks</Logo>
      <Bar role="navigation" ml={3} align="left">
        {/* <Item to="/location" children="Location" />
        <Item to="/schedule" children="Schedule" /> */}
        <BtnItem to="/register" children="Register" />
      </Bar>
    </Inner>
  </Base>
)

export default Nav

import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Container, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'
import Flag from 'components/Flag'
import Link from 'gatsby-link'

const Base = styled(Box.withComponent('header')).attrs({
  py: [3, 4],
  width: 1
})`
  z-index: 4;
`

const Inner = styled(Container.withComponent(Flex)).attrs({
  px: 3,
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

const Item = styled(A.withComponent(Link)).attrs({
  color: 'inherit',
  fontSize: [2, 3],
  my: 1,
  mx: 3
})`
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  cursor: pointer;
`

const BtnItem = styled(Action).attrs({
  bg: theme.colors.primary,
  fontSize: [2, 3],
  scale: true,
  px: 3,
  py: 2,
  my: 1,
  mx: 3
})`
  text-transform: uppercase;
`

const Nav = ({ color = 'primary', ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color} py={[1, 0]}>
      <Flag />
      {/* <Bar role="navigation" ml={3} align="left">
        <Item to="/location" children="Location" />
        <Item to="/schedule" children="Schedule" />
        <BtnItem to="/register" children="Register" />
      </Bar> */}
    </Inner>
  </Base>
)

export default Nav

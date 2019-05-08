import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Flag from 'components/Flag'
import Action from 'components/Action'
import { Link } from 'gatsby'

const Base = styled(Box.withComponent('header')).attrs({
  py: 3,
  width: 1
})`
  z-index: 4;
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
  py: 2
})`
  color: inherit !important;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
`

const BtnItem = styled(Action).attrs({
  inverted: true,
  fontSize: [2, 3],
  scale: true,
  px: 3,
  py: 2
})`
  box-shadow: ${theme.boxShadows[0]} !important;
  text-transform: uppercase;
`

const Nav = ({ color = 'white', ...props }) => (
  <Base role="banner" {...props}>
    <Bar role="navigation" color={color}>
      <Item to="/schedule" children="Schedule" />
      <Flag mx={[3, 4]} />
      {color === 'white' ? (
        <BtnItem bg={theme.colors.alt} to="/register" children="Register" />
      ) : (
        <Item to="/register" children="Register" />
      )}
    </Bar>
  </Base>
)

export default Nav

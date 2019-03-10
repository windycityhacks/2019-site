import React from 'react'
import styled from 'styled-components'
import { Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import '../../static/nitti-mostro/index.css'
import Layout from 'components/Layout'
import BG from 'components/BG'
import Nav from 'components/Nav'
import Action from 'components/Action'

const NittiMostroHeading = styled(Heading.h1).attrs({
  color: theme.colors.white,
  fontSize: [128, 256]
})`
  font-family: NittiMostroDiscoInline;
  position: relative;
  z-index: auto;
  color: #fff;  
  &, &:before {
    display: block;
    background-position: initial initial;
    background-repeat: initial initial;
  }
  &:before {
    content: '${props => props.children}';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    font-family: NittiMostroShadow;
    color: ${theme.colors.error};
  }
`

export default () => (
  <Layout>
    <Nav />
    <BG color="primaryDark" />
    <Container px={3} py={[5, 0]} align="center">
      <NittiMostroHeading>404!</NittiMostroHeading>
      <Text color={theme.colors.white} mt={-3} fontSize={[4, 5]}>
        Sorry, that page isn’t here.{' '}
        <span role="img" aria-label="Blue heart emoji">
          💙
        </span>
      </Text>
      <Action to="/" mt={4} inverted>
        Go Home
      </Action>
    </Container>
  </Layout>
)

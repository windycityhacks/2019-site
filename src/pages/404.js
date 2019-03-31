import React from 'react'
import { Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import BG from 'components/BG'
import Nav from 'components/Nav'
import Action from 'components/Action'

export default () => (
  <Layout>
    <Nav />
    <BG color="primaryDark" />
    <Container px={3} py={[5, 0]} align="center">
      <Heading.h1 fontSize={[128, 256]} color="alt">
        404!
      </Heading.h1>
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

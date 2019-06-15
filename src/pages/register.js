import React from 'react'
import { Container, Text, Link } from '@hackclub/design-system'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import IconButton from 'components/IconButton'
import Headline from 'components/Headline'

export default () => (
  <Layout bg="primaryLight">
    <Nav />
    <Container maxWidth={28} align="center" width={1} pt={[3, 4]} px={3}>
      <Headline color="white" mb={[3]}>
        Registration is now closed.
      </Headline>
      <Text color="primaryWash" fontSize={[3, 4]} maxWidth={28} mx="auto">
        Thank you to all who signed up—we’ve reached capacity!
      </Text>
      <Text color="primaryWash" fontSize={3} mt={3} mb={4}>
        If you want an email if/when we open late registration, send us an email
        below.
      </Text>
      <Link href="mailto:team@windyhacks.com?subject=Late%20registration">
        <IconButton glyph="email" bg="alt" fontSize={3} scale>
          Email us for late signup
        </IconButton>
      </Link>
    </Container>
    <Footer />
  </Layout>
)

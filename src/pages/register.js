import React from 'react'
import { Container, Text, Link } from '@hackclub/design-system'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Registration from 'components/Registration'
import IconButton from 'components/IconButton'
import Headline from 'components/Headline'

export default () => (
  <Layout bg="primaryLight">
    <Nav />
      <Container maxWidth={28} align="center" width={1} py={[3, 4]} px={3}>
        <Headline color="white" mb={[3]}>
          Registration is now closed.
        </Headline>
        <Text color="primaryWash" fontSize={[3, 4]} maxWidth={28} mx="auto">
         Thank you to all who signed up—we’ve reached capacity!
       </Text>
    </Container>
    <Footer />
  </Layout>
)

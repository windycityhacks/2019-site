import React from 'react'
import jsCookie from 'js-cookie'
import {
  Box,
  Container,
  Heading,
  Sheet,
  Text,
  Link
} from '@hackclub/design-system'
import { theme } from 'theme'
import { date } from 'data'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Registration from 'components/Registration'
import IconButton from 'components/IconButton'
import Headline from 'components/Headline'

const url = 'http://windyhacks.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (text, u = url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${u}`

const ShareButton = ({ children, ...props }) => (
  <Link href={props.url} target="_blank" rel="noopener noreferrer">
    <IconButton
      aria-label={`Share on ${props.service}`}
      f={2}
      glyph={props.service.toLowerCase()}
      {...props}
    >
      {children || props.service}
    </IconButton>
  </Link>
)

export default () => (
  <Layout bg="primaryLight">
    <Nav />
    <Container maxWidth={28} align="center" width={1} pt={[3, 4]} px={3}>
      <Headline color="white">Sign up for Windy City Hacks</Headline>
      <Text color="smoke" fontSize={[3, 4]} mt={2}>
        Your ticket is free, including meals & swag. Be there, {date}!
      </Text>
    </Container>
    <Box.main pb={[4, 5]} px={3}>
      <Sheet maxWidth={36} mt={4} align="left" color="black">
        <Registration />
      </Sheet>
      {jsCookie.get('signedUp') ||
        (false && (
          <Sheet
            p={[3, 4]}
            mt={[4, 5]}
            align="center"
            maxWidth={24}
            boxShadowSize="md"
          >
            <Heading.h2 f={3} caps mb={2}>
              Share it!
            </Heading.h2>
            <ShareButton
              service="Twitter"
              url={twitterURL(
                'I just registered for @windyhacks, Chicago’s premier hackathon (learn-to-code event). You should take a look: https://windyhacks.com',
                url
              )}
              bg="#1da1f2"
              mr={3}
            />
            <ShareButton
              service="Facebook"
              url={facebookURL(url)}
              bg="#3b5998"
            />
          </Sheet>
        ))}
    </Box.main>
    <Footer />
  </Layout>
)

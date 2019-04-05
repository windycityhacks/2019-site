import React from 'react'
import {
  Box,
  Container,
  Heading,
  Sheet,
  Text,
  Link
} from '@hackclub/design-system'
import { date } from 'data'
import Layout from 'components/Layout'
import SimpleNav from 'components/SimpleNav'
import Footer from 'components/Footer'
import Registration from 'components/Registration'
import IconButton from 'components/IconButton'
import Headline from 'components/Headline'

const url = 'https://windyhacks.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (u = url) =>
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
    <SimpleNav />
    <Container maxWidth={29} align="center" width={1} pt={[3, 4]} px={3}>
      <Headline color="white">Sign up for Windy City Hacks</Headline>
      <Text color="primaryWash" fontSize={[3, 4]} mt={2}>
        Your ticket is free, including meals & swag. See you on {date}!
      </Text>
    </Container>
    <Box.main pb={[4, 5]}>
      <Sheet maxWidth={36} mt={4} align="left" color="black">
        <Registration />
      </Sheet>
      <Sheet mt={[4, 5]} align="center" maxWidth={24}>
        <Heading.h2 color="black" fontSize={3} caps mb={2}>
          Share it!
        </Heading.h2>
        <ShareButton
          service="Twitter"
          url={twitterURL(
            'I just registered for @windyhacks, Chicago’s free 24-hour high school hackathon',
            url
          )}
          bg="#1da1f2"
          mr={3}
        />
        <ShareButton service="Facebook" url={facebookURL(url)} bg="#3b5998" />
      </Sheet>
    </Box.main>
    <Footer />
  </Layout>
)

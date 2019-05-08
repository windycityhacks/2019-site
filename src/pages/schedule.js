import React from 'react'
import styled from 'styled-components'
import { Box, Container, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Headline from 'components/Headline'
import data from 'data'

const List = styled(Text.withComponent('ol'))`
  list-style: none;
`

const Event = styled(Text.withComponent('li')).attrs({
  fontSize: [3, 4],
  pl: 0,
  mb: 2
})`
  line-height: 1.5;
  strong {
    display: block;
  }
`

const Schedule = styled(Container).attrs({
  px: 3,
  my: [4, 5],
  maxWidth: 64,
  color: theme.colors.black
})`
  ${theme.mediaQueries.md} {
    column-count: 2;
    column-gap: ${theme.space[3]}px;
    > div {
      break-inside: avoid;
    }
  }
`

const Name = styled(Text.span)`
  font-family: ${theme.serif};
`

export default () => (
  <Layout>
    <Box.header bg={theme.colors.alt} pb={[3, 4]}>
      <Nav color="white" />
      <Container maxWidth={30} align="center" width={1} pt={[3, 4]} px={3}>
        <Headline fontSize={[6, 7, 8]} color="white">
          Schedule
        </Headline>
      </Container>
    </Box.header>
    <Schedule>
      {data.schedule.map(day => (
        <Box mt={[4, 0]}>
          <Headline color={theme.colors.primary}>{day.date}</Headline>
          <List mt={3}>
            {day.events.map(event => (
              <Event>
                <strong children={event.time} />
                <span role="img" aria-label={event.name}>
                  {event.emoji}
                </span>{' '}
                <Name>{event.name}</Name>
              </Event>
            ))}
          </List>
        </Box>
      ))}
    </Schedule>
    <Footer />
  </Layout>
)

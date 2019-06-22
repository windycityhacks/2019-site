import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {
  BackgroundImage,
  Box,
  Container,
  Heading,
  Text,
  Link as A,
  Icon,
  BlockLink
} from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Map from 'components/Map'
import Footer from 'components/Footer'
import Card from 'components/Card'
import Headline from 'components/Headline'
import Photo from 'components/Photo'
import Module from 'components/Module'

const Grid = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  > div,
  > a,
  > img {
    width: 100%;
    border-radius: ${theme.radii[2]};
    max-width: 100%;
    min-height: 16rem;
    color: ${theme.colors.slate};
  }
  > a {
    background-color: ${theme.colors.white};
  }
  > div,
  > a {
    padding: ${theme.space[3]}px;
  }
  h3 {
    color: ${theme.colors.steel};
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[4]}px;
    > div,
    > a {
      padding: ${theme.space[4]}px;
    }
  }
`
const GridItem = styled(Card)`
  min-height: unset !important;
`

const LinkOut = styled(A).attrs({
  color: theme.colors.info,
  underline: true,
  chevronRight: true,
  bold: true,
  fontSize: 3,
  mt: 3,
  className: 'sans'
})`
  display: block;
`

const GridItemModule = props => (
  <GridItem>
    <Module lg {...props} />
  </GridItem>
)

const ParkingBase = styled(BlockLink).attrs({
  p: 2,
  pl: [3, 4]
})`
  display: flex;
  align-items: center;
  div {
    flex: 1 1 auto;
  }
`
const ParkingName = styled(Text).attrs({
  color: 'slate',
  fontSize: 2,
  bold: true
})`
  font-family: ${theme.font};
  line-height: 1.125;
`
const ParkingItem = ({ name, address, url }) => (
  <ParkingBase href={url} taget="_blank" rel="noopener noreferrer">
    <div>
      <ParkingName children={name} />
      <Text fontSize={1} color="muted" children={address} />
    </div>
    <Icon color={theme.colors.white} glyph="view-forward" size={24} />
  </ParkingBase>
)
const Svg = styled(Box.withComponent('svg'))``

const Header = styled(BackgroundImage.withComponent('header'))`
  background-color: ${theme.colors.primary};
  background-position: top center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
  position: relative;
  h2 {
    color: inherit;
  }
`

const VignetteBase = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 122, 135, 0),
    rgba(0, 122, 135, 0.875)
  );
  height: 100%;
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  ~ header,
  ~ div {
    z-index: 2;
  }
`

class Vignette extends PureComponent {
  state = {
    scroll: 0,
    clientHeight: 0,
    innerHeight: 0
  }

  onScroll = () => {
    const scroll = window.scrollY || document.body.scrollTop
    this.setState({ scroll })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
    this.setState({
      clientHeight: document.documentElement.clientHeight,
      innerHeight: window.innerHeight || 0
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const { scroll, clientHeight, innerHeight } = this.state
    const height = Math.max(clientHeight, innerHeight)
    return (
      <VignetteBase
        style={{
          willChange: 'opacity',
          opacity: Math.max(scroll / (height * 0.25), 0)
        }}
      />
    )
  }
}

export default () => (
  <Layout>
    <Header src="/venue/header.jpg">
      <Vignette />
      <Nav />
      <Container
        maxWidth={36}
        align="center"
        color="white"
        width={1}
        pt={[3, 4]}
        pb={[4, 5]}
        px={3}
      >
        <Headline fontSize={[6, 7, 8]}>Venue</Headline>
        <Headline mt={[2, 4]} fontSize={[4, 5]}>
          Welcome to the Loop in downtown Chicago.
        </Headline>
      </Container>
    </Header>
    <Grid width={1} px={3} id="details" py={[4, 5]}>
      <GridItem>
        <Headline fontSize={[4, 5]} color={theme.colors.primary}>
          Origami Risk
        </Headline>
        <Text my={3}>
          Origami Risk is a software company in downtown Chicago generously
          providing their headquarters for the event venue.
        </Text>
        <Text
          fontSize={[3, 4]}
          color={theme.colors.steel}
          style={{ lineHeight: '1.375' }}
        >
          222 N LaSalle St #2125
          <br />
          Chicago, IL 60601
        </Text>
        <LinkOut
          fontSize={2}
          color="primary"
          href="https://goo.gl/maps/1oC2ENsSgh7dGtnt7"
          target="_blank"
        >
          Google Maps
        </LinkOut>
      </GridItem>
      <Map />
      <Photo alt="Reception" src="/venue/reception.jpg" />
      <GridItemModule
        name="Public transit"
        iconTag={
          <Svg
            width={48}
            height={48}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ml={-2}
            mr={3}
            mb={[2, 3]}
          >
            <g fillRule="evenodd" clipRule="evenodd" fill={theme.colors.alt}>
              <path d="M16 22.005c-.529 0-1.039-.082-1.518-.235l-2.544 1.22-2.874 7.664a1 1 0 1 0 1.873.702l1.129-3.011c1.232.427 2.556.66 3.934.66 1.378 0 2.702-.233 3.935-.66l1.129 3.01a1 1 0 0 0 1.873-.701l-3.026-8.069-2.422-.806a5 5 0 0 1-1.489.226zm-3.232 4.466l1.055-2.812a6.992 6.992 0 0 0 2.177.346c.76 0 1.492-.121 2.178-.346l1.054 2.812a9.987 9.987 0 0 1-3.232.534 9.988 9.988 0 0 1-3.232-.534z" />
              <path d="M28 12C28 2 26 0 16 0S4 2 4 12s2 12 12 12 12-2 12-12zm-2.817-7c.336.83.571 1.968.7 3.574.078.963.117 2.094.117 3.426H6c0-1.332.04-2.463.117-3.426.129-1.606.364-2.745.7-3.574h18.366zM11 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm13 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 5.5c1.956 0 3.619-1.247 3.99-2.91.186-.828-2.393-1.09-3.989-1.09s-4.196.168-3.99 1.09c.373 1.663 2.035 2.91 3.99 2.91z" />
            </g>
          </Svg>
        }
        body={
          <>
            You can easily get to the venue via public transit.
            <LinkOut
              fontSize={2}
              color="primary"
              href="https://www.google.com/maps/dir//Origami+Risk,+222+N+LaSalle+St+%232125,+Chicago,+IL+60601/@41.8866192,-87.6678168,13z/"
              target="_blank"
            >
              Get public transit directions
            </LinkOut>
          </>
        }
      />
      <GridItem style={{ padding: 0, overflow: 'hidden' }}>
        <Heading.h3 p={[3, 4]} pb={[2, 3]} fontSize={[4, 5]} color="slate">
          Nearby parking
        </Heading.h3>
        <Box bg={theme.colors.primaryWash} py={2}>
          {data.parking.map(info => (
            <ParkingItem {...info} key={info.url} />
          ))}
        </Box>
      </GridItem>
      <Photo alt="Workspace" src="/venue/workspace.jpg" />
      <GridItemModule
        icon="payment-docs"
        name="Travel reimbursement"
        iconColor={theme.colors.success}
        body="Accessibility is core to our mission. We’re offering a few dozen attendees $30 travel reimbursements. Make sure to bring your receipts to the event."
      />
      <GridItemModule
        icon="relaxed"
        name="Sleeping arrangements"
        iconColor={theme.colors.cool}
        body="Sleeping during the event is optional, but adults recommended
          it. We’ll have a designated dark sleeping area at the venue: be sure
          to bring your sleeping bags!"
      />
      <GridItemModule
        icon="clock"
        name="Leaving early"
        iconColor={theme.colors.warm}
        body="Attendees may leave early with parent/guardian consent (or if 18+). You
          can work on your project outside of the event provided it’s
          submitted by a team member in-person by the deadline."
      />
      <Photo alt="Kitchen" src="/venue/kitchen.jpg" />
    </Grid>
    <Text px={3} fontSize={2} color="muted" align="center" mb={5}>
      Venue photos by Steve Hall & Hedrich Blessing
    </Text>
    <Footer />
  </Layout>
)

import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Hide,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import { Link } from 'gatsby'
import Action from 'components/Action'
import Apply from 'components/Apply'
import Bannerline from 'components/Bannerline'
import Calendar from 'components/Calendar'
import Card from 'components/Card'
import EmailForm from 'components/EmailForm'
import Footer from 'components/Footer'
import Headline from 'components/Headline'
import Layout from 'components/Layout'
import Leadership from 'components/Leadership'
import Modules from 'components/Modules'
import Module from 'components/Module'
import Nav from 'components/Nav'
import Photo from 'components/Photo'
import Sponsors from 'components/Sponsors'
import Video from 'components/Video'

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``

const HiddenPhoto = styled(Hide.withComponent(Photo))``

const Grid = styled(Container).attrs({ maxWidth: 72, mt: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: ${theme.space[4]}px;
  }
`
const Question = ({ name, body, ...props }) => (
  <Card {...props}>
    <Heading.h3 fontSize={4} caps mt={0} mb={[1, 2]} children={name} />
    <Text fontSize={3} color="black" my={0} children={body} />
  </Card>
)

const linkAttrs = {
  hoverline: true,
  chevronRight: true,
  fontSize: 3,
  mt: 3,
  bold: true
}
const LinkOut = styled(A).attrs(linkAttrs)`
  display: block;
`
LinkOut.span = styled(Text.span).attrs(linkAttrs)``
LinkOut.link = styled(A.withComponent(Link)).attrs(linkAttrs)``
A.link = styled(A.withComponent(Link))``

export default () => (
  <Layout>
    <Nav />
    <Box.header color={theme.colors.primaryDark} pt={[3, 4]} pb={[3, 5]}>
      <Container width={1} px={3}>
        <Heading.h1 fontSize={[6, 7, 8, 9]}>Hack Chicago</Heading.h1>
        <Heading.h2
          fontSize={[5, 6]}
          mt={2}
          mb={3}
          style={{ maxWidth: '48rem' }}
        >
          Welcome back to Chicago’s premier high school hackathon.
        </Heading.h2>
        <EmailForm />
        {/*
        <Flex align="center" my={4}>
          <Calendar month="June" day={22} />
          <Text.span align="left" fontSize={[3, 4]} ml={4}>
            <strong>Late registration</strong>
            <br />
            <A.link
              color="inherit"
              fontSize={[2, 3]}
              underline
              chevronRight
              to="/location"
            >
              Chicago, IL
            </A.link>
          </Text.span>
        </Flex>
        <Flex align="center" wrap>
          <Action
            to="/register"
            children="Reserve your spot"
            fontSize={[3, 4]}
            bg={theme.colors.primary}
            chevronRight
            scale
          />
        </Flex>
        */}
      </Container>
    </Box.header>
    <Box.section>
      <Container width={1} p={3} color={theme.colors.black}>
        <Container maxWidth={48} mx={0}>
          <Bannerline />
          <Headline color="alt">Welcome to the “hackathon.”</Headline>
          <Lead mt={3} maxWidth={48}>
            Hack Chicago is a 24-hour event where 350 programmers, artists,
            designers, & other high schoolers from across the Midwest will come
            to together to build apps & games. We’ll provide workshops,
            mentorship, free meals & drinks, & places to sleep. The next
            morning, judges will pick the best projects to demo and win prizes.
          </Lead>
        </Container>
        <Grid mt={[4, 5]}>
          <Card>
            <Heading.h3 fontSize={[4, 5]} my={0}>
              Building on years of building opportunity
            </Heading.h3>
            <Text fontSize={3} mt={2}>
              We began in 2017 as ChicagoHacks, then last year ran the Midwest’s
              largest HS hackathon ever with 250+ students. This year, we’re
              back!
            </Text>
            <LinkOut href="https://2018.hackchicago.io">
              See last year’s event
            </LinkOut>
          </Card>
          <Video aria-label="High school students coding at Hack Chicago 2018">
            <source src="/2018/hacking.mp4" type="video/mp4" />
          </Video>
          <Photo
            aria-label="Opening ceremony at Hack Chicago 2018"
            src="/2018/ceremony.jpg"
          />
          <Card>
            <Heading.h3 f={[4, 5]} my={0}>
              Hacking‽ Is that safe?
            </Heading.h3>
            <Text f={3} mt={2}>
              Hold up! No, we’re not “hacking” servers or databases. The word is
              being constructively re-defined as building things—apps, games,
              websites, etc. At Hack Chicago, it’s all safe, supervised, &
              entirely educational.
            </Text>
          </Card>
        </Grid>
      </Container>
    </Box.section>
    <Box.section
      bg={theme.colors.white}
      color={theme.colors.black}
      width={1}
      id="faq"
    >
      <Container pt={[4, 5]} px={3}>
        <Bannerline mt={[3, 4]} />
        <Headline fontSize={[6, 7]}>FAQ</Headline>
        <Grid>
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free. Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Who can participate?"
            body="Any current student grades 8–12. If you’re under/over that age, send us a chat (in the corner) & we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="At Hack Chicago, complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors."
          />
          <Question
            name="What if I can already code?"
            body="All skill levels are welcome. We welcome absolute beginners, experts, & everyone in between."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers and make teams of up to 4—find some new friends, bring yours, or work alone."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, app, game, hardware hack, you name it. Judges will rate projects on creativity, technical skill demonstrated, polish, & utility."
          />
          <Question
            name="What should I bring?"
            body="Student ID, computer, chargers, anything for your hack (hardware?), toiletries, & a sleeping bag (maybe)."
          />
          <Question
            name="Who runs this? Is it supervised?"
            body={
              <>
                We’re independently-organized by high schoolers, sponsored via
                an intl. non-profit called{' '}
                <A href="https://hackclub.com" color={theme.colors.alt}>
                  Hack Club
                </A>
                . The event is fully supervised by several dozen adults (with
                background checks).
              </>
            }
          />
        </Grid>
      </Container>
    </Box.section>
    {/*
    <Box.section id="details">
      <Container width={1} px={3} pt={[3, 4]} pb={[4, 5]}>
        <Bannerline mt={0} />
        <Headline color="alt">Get all the details.</Headline>
        <Grid mt={4}>
          <Card>
            <Module
              icon="event-code"
              name="Schedule"
              lg
              iconColor={theme.colors.primary}
              body="Saturday 12pm–Sunday 12pm, with a lot in between. Doors open 11am, June 22! Hacking starts at 12:30pm—sleep can wait :)"
            >
              <LinkOut.link
                to="/schedule"
                children="See the full schedule"
                color={theme.colors.alt}
              />
            </Module>
          </Card>
          <Card>
            <Module
              lg
              icon="friend"
              name="Perks for all"
              iconColor={theme.colors.primary}
              body={
                <>
                  We’ll have T-shirts, stickers, prizes, sponsor goodies, & so
                  much more. We welcome hardware, so we’re also providing
                  Particle Photons for projects.
                </>
              }
            />
          </Card>
        </Grid>
      </Container>
    </Box.section>
    <Apply />
    */}
    <Box.section>
      <Container width={1} px={3} py={4}>
        <Bannerline />
        <Headline color="alt">Sponsors</Headline>
        <Text
          fontSize={[3, 4]}
          color={theme.colors.steel}
          mt={3}
          mb={4}
          style={{ maxWidth: '36rem' }}
        >
          Want to sponsor Hack Chicago and help hundreds of students experience
          the magic of code?{' '}
          <A
            href="mailto:theo@hackchicago.io"
            color={theme.colors.primary}
            hoverline
            chevronRight
          >
            Let’s chat
          </A>
        </Text>
        <Headline
          color={theme.colors.slate}
          fontSize={[3, 4]}
          caps
          mt={[4, 5]}
          pb={[3, 4]}
        >
          Past sponsors
        </Headline>
        <Sponsors section="pastSponsors" />
        {/*
        <Headline
          color={theme.colors.slate}
          fontSize={[3, 4]}
          caps
          mt={[4, 5]}
          pb={[3, 4]}
        >
          Additional support from
        </Headline>
        <Sponsors section="additionalSupport" /> */}
      </Container>
    </Box.section>
    <Leadership />
    <Box.section bg={theme.colors.snow}>
      <Container width={1} px={3} py={[4, 5]}>
        <EmailForm />
      </Container>
    </Box.section>
    <Footer />
  </Layout>
)

import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Container, Heading, Text, theme } from '@hackclub/design-system'
import Card from 'components/Card'
import EmailForm from 'components/EmailForm'

const headerFrames = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

const Background = styled.div`
  animation: ${headerFrames} 16s linear infinite;
  background: url(${require('../../static/cityscape_wide.svg')});
  background-repeat: repeat-x;
  background-size: 200vw;
  background-position: left bottom;
  position: absolute;
  min-width: 200vw;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 0;
`

const Base = styled(Box.section)`
  overflow: hidden;
  position: relative;

  h1 {
    line-height: 0.875;
  }
  h2 {
    line-height: 1.125;
  }
  input {
    background: ${theme.colors.white};
  }

  ${Card} {
    display: inline-block;
    background: rgba(255, 255, 255, 0.875);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background: rgba(255, 255, 255, 0.5);
      -webkit-backdrop-filter: saturate(180%) blur(8px);
    }
    ${theme.mediaQueries.reduceTransparency} {
      background: ${theme.colors.muted} !important;
    }
  }

  + section {
    position: relative;
    top: -1px;
  }
`

export default class Header extends PureComponent {
  state = {
    scroll: 0
  }

  onScroll = () => {
    const scroll = window.scrollY || document.body.scrollTop
    this.setState({ scroll })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const { scroll } = this.state
    return (
      <Base color={theme.colors.primary} pt={[3, 4]} pb={[5, 6]}>
        <Background />
        <Container
          width={1}
          px={3}
          style={{
            willChange: 'transform',
            transform: `translateY(-${Math.max(scroll / 2)}px)`,
            opacity: Math.max(1 - scroll / 128, 0)
          }}
        >
          <Heading.h1 fontSize={[6, 8, 9]}>Hack Chicago</Heading.h1>
          <Heading.h2
            fontSize={[5, 6]}
            mt={3}
            mb={2}
            style={{ maxWidth: '48rem' }}
          >
            Welcome back to Chicago’s premier high school hackathon.
          </Heading.h2>
          <Heading.h3 fontSize={[4, 5]} color={theme.colors.alt}>
            June 22-23, 2019 <Text.span color="muted">— Location TBA</Text.span>
          </Heading.h3>
          <Card ml={[-3, -4]}>
            <EmailForm />
          </Card>
        </Container>
      </Base>
    )
  }
}

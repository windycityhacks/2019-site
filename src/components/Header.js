import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Container, Heading, Text, theme } from '@hackclub/design-system'
import Action from 'components/Action'

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
    line-height: 1;
    letter-spacing: -0.04em;
  }

  h2 {
    line-height: 1.125;
    letter-spacing: -0.04em;
  }

  ${Action} {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.125) !important;
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
      <Base color="primary" py={[5, 6]} align="center">
        <Background />
        <Container
          maxWidth={72}
          width={1}
          px={3}
          style={{
            willChange: 'transform',
            transform: `translateY(-${Math.max(scroll / 2)}px)`,
            opacity: Math.max(1 - scroll / 128, 0)
          }}
        >
          <Heading.h1 color="primaryDark" fontSize={[6, 8, 9]}>
            Windy City Hacks
          </Heading.h1>
          <Heading.h2
            color="primaryLight"
            fontSize={[5, 6]}
            mt={[3, 4]}
            mb={[2, 3]}
            mx="auto"
            style={{ maxWidth: '48rem' }}
          >
            Welcome back to Chicago’s premier high&nbsp;school hackathon.
          </Heading.h2>
          <Heading.h3 fontSize={[3, 4]} color="muted" mb={4}>
            June 22-23, 2019 <Text.span color="muted">— Venue TBA</Text.span>
          </Heading.h3>
          <Action to="/register" bg="alt" fontSize={[3, 4]} chevronRight scale>
            Sign up now
          </Action>
        </Container>
      </Base>
    )
  }
}

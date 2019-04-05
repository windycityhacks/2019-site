import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Link as A, Icon } from '@hackclub/design-system'
import { Link } from 'gatsby'

const Crumb = styled(A.withComponent(Link)).attrs({
  hoverline: true,
  fontSize: [3, 4],
  color: 'white'
})``

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

class SimpleNav extends Component {
  state = { path: [] }

  componentDidMount() {
    const path = window.location.pathname
      .split('/')
      .filter(chunk => chunk !== '')
    this.setState({ path })
  }

  render() {
    const { path } = this.state
    return (
      <Flex justify="center" align="center" pt={[3, 4]}>
        <Icon glyph="home" size={36} mx={2} color="primaryWash" />
        <Crumb to="/#lead" bold>
          Home
        </Crumb>
        {path[0] && (
          <>
            <Icon glyph="view-forward" size={24} mx={2} color="primaryWash" />
            <Crumb to={`/${path[0]}`}>{capitalize(path[0])}</Crumb>
          </>
        )}
      </Flex>
    )
  }
}

export default SimpleNav

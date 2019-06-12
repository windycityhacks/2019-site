import React from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex, Heading, Icon, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import PropTypes from 'prop-types'

const Base = styled(Flex).attrs({ flexDirection: 'column' })`
  ${props =>
    props.lg &&
    css`
      ${theme.mediaQueries.md} {
        svg {
          width: 64px;
          height: 64px;
        }
      }
    `};
`

const Module = ({
  icon,
  name,
  body,
  lg,
  iconColor = theme.colors.alt,
  iconTag,
  ...props
}) => (
  <Base lg={lg} {...props}>
    <Flex
      align={['center', 'flex-start']}
      flexDirection={['row', 'column']}
      mb={2}
    >
      {iconTag || (
        <Icon
          size={48}
          ml={lg ? -2 : -1}
          mr={3}
          mb={[0, 1]}
          glyph={icon}
          color={iconColor || 'inherit'}
          style={{ flexShrink: 0 }}
        />
      )}
      <Heading.h3
        mb={[0, 1]}
        fontSize={lg ? [4, 5] : 4}
        align="left"
        children={name}
      />
    </Flex>
    {body && <Text fontSize={3} children={body} mb={props.children && 2} />}
    {props.children}
  </Base>
)

Module.displayName = 'Module'

Module.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string,
  iconColor: PropTypes.string,
  iconTag: PropTypes.node,
  lg: PropTypes.bool
}

export default Module

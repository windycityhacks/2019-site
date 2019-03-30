import React from 'react'
import { Flex, Box, Heading, Link, Text } from '@hackclub/design-system'
import Icon from '@hackclub/icons'
import { theme } from 'theme'
import { urls } from 'data'

const Service = ({ href, service, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    mx={[2, 3]}
    color={theme.colors.primaryDark}
    aria-label={service}
    children={<Icon glyph={service} size={36} />}
    {...props}
  />
)

const Footer = ({ children }) => (
  <Box.footer
    py={[4, 5]}
    bg={theme.colors.primaryWash}
    color={theme.colors.steel}
    align="center"
  >
    {children}
    <Heading.h3 fontSize={3} align="center" caps mb={2}>
      Contact us
    </Heading.h3>
    <Flex
      color={theme.colors.primaryDark}
      justify="center"
      align="center"
      wrap
      mb={3}
    >
      <Service href={urls.instagram} service="instagram" />
      <Service href={urls.twitter} service="twitter" />
      <Service href={urls.facebook} service="facebook" />
      <Service href={urls.messenger} service="messenger-fill" />
      <Service href={urls.email} service="email" />
    </Flex>
    <Text mx="auto" style={{ maxWidth: '20rem' }} fontSize={1}>
      Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.
    </Text>
  </Box.footer>
)

export default Footer

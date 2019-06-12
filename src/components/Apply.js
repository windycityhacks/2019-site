import React from 'react'
import { Section, Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'

const Apply = props => (
  <Section
    bg="primary"
    style={{ position: 'relative', overflow: 'hidden' }}
    {...props}
  >
    <Container maxWidth={36} px={3} py={4} style={{ zIndex: 1 }}>
      <Heading.h2 fontSize={[5, 6]}>Register now.</Heading.h2>
      <Text fontSize={[3, 4]} my={3}>
        We can’t wait to see what you’ll make.
      </Text>
      <Action
        mt={3}
        to="/register"
        bg={theme.colors.alt}
        scale
        inverted
        chevronRight
      >
        Sign up now
      </Action>
    </Container>
  </Section>
)

export default Apply

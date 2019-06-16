import React from 'react'
import { Section, Container, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Headline from 'components/Headline'
import Action from 'components/Action'

const Apply = props => (
  <Section bg="primary" {...props}>
    <Container maxWidth={48} px={3} py={4}>
      <Headline color="white">Late registration is open.</Headline>
      <Text color="primaryWash" fontSize={[3, 4]} my={3}>
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
        Register late
      </Action>
    </Container>
  </Section>
)

export default Apply

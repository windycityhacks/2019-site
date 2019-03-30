import React from 'react'
import { Box, Container, Heading, Text } from '@hackclub/design-system'
import Leaders from 'components/Leaders'

const Leadership = () => (
  <Box.section id="leadership">
    <Container maxWidth={72} width={1} pb={[4, 5]} px={3}>
      <Heading.h2 color="alt" fontSize={[5, 6]} mb={2}>
        Leadership
      </Heading.h2>
      <Text
        color="black"
        fontSize={[3, 4]}
        mb={4}
        style={{ maxWidth: '48rem' }}
      >
        We’re a diverse group of high school students passionate about bringing
        new opportunities to Chicago.{' '}
        <span role="img" aria-label="City emoji">
          🏙
        </span>
        <span role="img" aria-label="Rainbow emoji">
          🌈
        </span>
      </Text>
      <Leaders />
    </Container>
  </Box.section>
)

export default Leadership

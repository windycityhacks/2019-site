import React from 'react'
import { Box, Container, Heading, Text } from '@hackclub/design-system'
import Leaders from 'components/Leaders'
import Bannerline from 'components/Bannerline'

const Leadership = () => (
  <Box.section pt={[2, 3]} pb={[4, 5]} id="leadership">
    <Container px={3}>
      <Bannerline />
      <Heading.h2 color="alt" fontSize={[5, 6]} mb={2}>
        Leadership
      </Heading.h2>
      <Text
        color="black"
        fontSize={[3, 4]}
        mb={4}
        style={{ maxWidth: '36rem' }}
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

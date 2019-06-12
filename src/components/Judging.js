import React from 'react'
import styled from 'styled-components'
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Text
} from '@hackclub/design-system'
import Judges from 'components/Judges'
import { theme } from 'theme'

const Category = styled(Badge).attrs({
  fontSize: 3,
  px: 10,
  mb: [2, 3],
  mr: [2, 3]
})`
  border-radius: ${theme.radii[2]};
  letter-spacing: 0;
  text-transform: none;
`

const Judging = () => (
  <Box.section id="judging">
    <Container maxWidth={72} width={1} pb={[5, 6]} px={3}>
      <Heading.h2 color="alt" fontSize={[5, 6]} mb={2}>
        Judging
      </Heading.h2>
      <Text color="black" fontSize={[3, 4]}>
        Industry professionals will judge projects in our categories:{' '}
        <span role="img" aria-label="Trophy emoji">
          🏆
        </span>
      </Text>
      <Flex wrap mt={2} mb={[3, 4]}>
        <Category bg="primary">Best overall</Category>
        <Category bg="cool">Best mobile</Category>
        <Category bg="success">Best beginners</Category>
        <Category bg="warm">Best hardware</Category>
        <Category bg="alt">Best design</Category>
        <Category bg="error">Best game</Category>
      </Flex>
      <Judges />
      <Text color="muted" fontSize={3} mt={4}>
        …more coming soon!
      </Text>
    </Container>
  </Box.section>
)

export default Judging

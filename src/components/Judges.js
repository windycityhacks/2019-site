import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text, Avatar, Link } from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'

const Base = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Photo = styled(Avatar)`
  width: 96px;
  height: 96px;
`
const JudgeName = styled(Link).attrs({
  target: '_blank',
  color: 'steel',
  fontSize: [3, 4],
  bold: true
})`
  display: inline-block;
  font-family: ${theme.font} !important;
  line-height: 1.125;
`
const first = a => a.split(' ')[0].toLowerCase()
const Judge = ({ link, name, pronouns, bio }) => (
  <Flex align="center">
    <Photo
      src={require(`../../static/judges/${first(name)}.jpg`)}
      alt={name}
      mr={3}
    />
    <Box align="left">
      <JudgeName href={link} children={name} mr={2} />
      <Text.span color={theme.colors.muted} fontSize={2} children={pronouns} />
      <Text color={theme.colors.slate} fontSize={[2, 3]} children={bio} />
    </Box>
  </Flex>
)

const Judges = props => (
  <Base {...props}>
    {data.judges.map(profile => (
      <Judge
        link={profile.link}
        name={profile.name}
        pronouns={profile.pronouns}
        bio={profile.bio}
        key={profile.name}
      />
    ))}
  </Base>
)

export default Judges

import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text, Icon, Button, Avatar } from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'

const Base = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Wrap = styled(Box)`
  position: relative;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  ${Avatar} {
    width: 100%;
    height: 100%;
  }
  ${theme.mediaQueries.md} {
    width: 96px;
    height: 96px;
  }
`
const EmailButton = styled(Button.withComponent('a')).attrs({
  bg: 'alt',
  color: 'white',
  px: 1,
  py: 1
})`
  line-height: 0;
  position: absolute;
  bottom: 0;
  right: -9px;
`
const LeaderName = styled(Text).attrs({
  color: 'steel',
  fontSize: 3,
  bold: true,
  mt: 2
})`
  font-family: ${theme.font} !important;
  line-height: 1.125;
`
const username = a => a.split(' ')[0].toLowerCase()
const Leader = ({ name, pronouns }) => (
  <Flex align="center">
    <Wrap mr={3}>
      <Avatar src={`/team/${username(name)}.jpg`} alt={name} />
      <EmailButton
        circle
        title={`Email ${name.split(' ')[0]}`}
        href={`mailto:${username(name)}@windyhacks.com`}
        children={<Icon glyph="email" size={24} />}
      />
    </Wrap>
    <Box align="left">
      <LeaderName children={name} />
      <Text color={theme.colors.muted} fontSize={2} children={pronouns} />
    </Box>
  </Flex>
)

const Leaders = props => (
  <Base {...props}>
    {data.leaders.map(profile => (
      <Leader
        name={profile.name}
        pronouns={profile.pronouns}
        key={profile.name}
      />
    ))}
  </Base>
)

export default Leaders

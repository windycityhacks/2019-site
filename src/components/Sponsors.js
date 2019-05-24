import React from 'react'
import styled from 'styled-components'
import { Container, theme } from '@hackclub/design-system'
import data from 'data'

const Base = styled(Container).attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${theme.mediaQueries.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
  a {
    line-height: 0;
    width: 100%;
  }
  img {
    object-fit: contain;
    object-position: left;
    max-height: 4rem;
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => (
  <Base {...props}>
    {data[section].map(sponsor => (
      <a href={`${sponsor.link}`} target="_blank" key={sponsor.image}>
        <img
          alt={sponsor.name}
          src={require(`../../static/sponsors/${sponsor.image}`)}
        />
      </a>
    ))}
  </Base>
)

export default Sponsors

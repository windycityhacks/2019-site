import React from 'react'
import styled from 'styled-components'
import { Container, theme } from '@hackclub/design-system'
import data from 'data'

const Base = styled(Container).attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 16 : 8)}rem, 1fr)
  );
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${props => (props.section === 'sponsors' ? 21 : 14)}rem, 1fr)
    );
  }
  a {
    line-height: 0;
    width: 100%;
  }
  img {
    height: 100%;
    max-width: 75%;
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

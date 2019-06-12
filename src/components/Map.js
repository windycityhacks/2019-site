import React, { Component } from 'react'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import styled from 'styled-components'
import { Box } from '@hackclub/design-system'
import { theme } from 'theme'

const TOKEN =
  'pk.eyJ1IjoiaGFja2NsdWIiLCJhIjoiY2pscGI1eGdhMGRyNzN3bnZvbGY5NDBvZSJ9.Zm4Zduj94TrgU8h890M7gA'

const Base = styled(Box)`
  width: 100%;
  padding: 0 !important;
  > div {
    min-height: 16rem;
  }
`

const Pin = styled.span`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 1rem;
  background-color: ${theme.colors.alt};
  background-image: url(${require('../../static/flag-bright.png')});
  background-size: 100%;
`

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
`

class Map extends Component {
  state = {
    viewport: {
      latitude: 41.886419,
      longitude: -87.632579,
      zoom: 13,
      bearing: 0,
      pitch: 0,
      width: '100%',
      height: 300
    }
  }

  render() {
    const { viewport } = this.state
    return (
      <Base p={0} {...this.props}>
        <MapGL
          mapStyle="mapbox://styles/mapbox/streets-v10"
          mapboxApiAccessToken={TOKEN}
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          style={{ minHeight: '256px' }}
        >
          <Nav>
            <NavigationControl />
          </Nav>
          <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
            <Pin />
          </Marker>
        </MapGL>
      </Base>
    )
  }
}

export default Map

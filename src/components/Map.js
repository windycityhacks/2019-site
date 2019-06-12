import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { Sheet } from '@hackclub/design-system'
import { theme } from 'theme'

const Base = styled(Sheet)`
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

const Map = ({ center, zoom, ...props }) => (
  <Base {...props}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDh_yh-nKzp_8so8APsLGxtAiCpx-VpwjU' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Pin lat={center.lat} lng={center.lng} text="Venue" />
    </GoogleMapReact>
  </Base>
)

Map.defaultProps = {
  center: {
    lat: 41.886419,
    lng: -87.632579
  },
  zoom: 17,
  p: 0
}

export default Map

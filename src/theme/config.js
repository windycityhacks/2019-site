import { theme } from '@hackclub/design-system'

export const grays = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff'
}

export const brand = {
  primary: '#08e',
  primaryWash: '#d1e1fb',
  primaryDark: '#005a9b',
  alt: '#f52',
  warning: '#f70',
  error: '#b23f42',
  success: '#1c7',
  info: '#08e',
  muted: grays.grey
}

// for DS input
brand.blue = [brand.primaryWash, brand.primaryWash, brand.primaryWash]

export const colors = {
  ...grays,
  ...brand
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = '"NittiGrotesk"'

theme.font = `${sans},${baseFamily}`

export default theme

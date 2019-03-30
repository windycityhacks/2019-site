import { theme } from '@hackclub/design-system'

export const colors = {
  // greyscale
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff',
  // brand
  primary: '#007a87',
  primaryWash: '#bfe6ea',
  primaryLight: '#009aab',
  primaryDark: '#004f58',
  alt: '#ff5a5f',
  altLight: '#ff7e82',
  altDark: '#e00007',
  success: '#3fb34f',
  error: '#b23f42',
  warm: '#ffb400',
  warmWash: '#ffdc89',
  cool: '#00bdde',
  coolWash: '#7cecff'
}
// for DS input
colors.blue = [colors.primaryDark, colors.primaryLight, colors.primaryLight]
colors.info = colors.primary

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = '"Gotham Rounded SSm A","Gotham Rounded SSm B"'

theme.font = `${sans},${baseFamily}`

theme.space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
theme.fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72, 96]

export default theme

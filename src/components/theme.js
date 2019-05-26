const colors = {
  primary: '#1DB954',
  secondary: '#ffffff',
  default: '#191414',
  background: '#2f2f2f',
  danger: '#bd081c',
  title: '#999999',
  text: '#fafafa'
};

const viewports = {
  smartphone: '360px',
  tablet: '720px',
  desktop: '1280px'
};

const fontSizes = {
  small: '14px',
  medium: '18px',
  big: '24px',
  title: '48px'
};

const theme = Object.freeze({
  colors,
  fontSizes,
  viewports
});

export default theme;
const colors = {
  primary: '#1DB954',
  secondary: '#ffffff',
  default: '#191414',
  danger: '#bd081c'
}

const viewports = {
  smartphone: '360px',
  tablet: '720px',
  desktop: '1280px'
}

const forms = {
  labelColor: colors.default,
  errorColor: colors.danger
};

const theme = Object.freeze({
  colors,
  forms,
  viewports
});

export default theme;
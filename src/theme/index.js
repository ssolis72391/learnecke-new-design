import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF',
    },
    primary: {
      contrastText: '#FFFFFF',
      main: '#00308F',
    },
    dark: {
      main: '#292E35',
      medium: '#454951',
    },
    light: {
      main: 'rgba(41, 46, 53, 0.6)',
      primary: 'rgba(41, 46, 53, 0.38)',
      secondary: 'rgba(41, 46, 53, 0.12)',
    },
    white: {
      main: '#FFFFFF',
      primary: '#F5F6F8',
    },
    grey: {
      main: '#F8F8F8',
    },
    green: {
      main: '#4AB47B',
      primary: '#6EC395',
      secondary: '#92D2AF',
    },
    text: {
      primary: '#485153',
      secondary: '#6b778c',
    },
    secondary: {
      main: '#5C677A',
      medium: '#97A0B0',
      light: '#C9CDD4',
    },
    alert: {
      main: '#984040',
    },
    warning: {
      main: '#CAB859',
    },
    success: {
      main: '#439A51',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    color: '#292E35',
    h1: {
      fontWeight: 200,
      fontSize: 48,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 300,
      fontSize: 36,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '-0.02em',
    },
    body: {
      fontWeight: 400,
      fontSize: 16,
      color: 'rgba(41, 46, 53, 0.87)',
    },
    bodyS: {
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(41, 46, 53, 0.87)',
    },
    bodyXS: {
      fontWeight: 500,
      fontSize: 12,
      color: 'rgba(41, 46, 53, 0.87)',
    },
    bodyXSItalic: {
      fontWeight: 700,
      fontSize: 12,
      fontStyle: 'italic',
      color: 'rgba(41, 46, 53, 0.87)',
    },
    button: {
      fontWeight: 500,
      fontSize: 14,
      color: 'rgba(41, 46, 53, 0.87)',
      backgroundColor: '#0030',
    },
    white: {
      fontFamily: 'Montserrat',
      color: '#FFFFFF',
      fontWeight: 200,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
        }
      `,
    },
  },
});

export default theme;

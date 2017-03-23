import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appbar: {
    '&.MuiAppBar-root': {
      backgroundColor: 'rgb(70 69 69 / 85%)',
    },
    '& .MuiToolbar-root': {
      paddingTop: 28,
      paddingLeft: 40,
    },
  },
  topbarTextField: {
    '&.MuiFormControl-root': {},
    width: '100%',
    maxWidth: 400,
    '& .MuiInput-root': {
      borderBottom: '1px solid grey',
    },
    '& .MuiInput-input': {
      '&:placeholder': {
        color: '#F8F8F8',
      },
      color: 'white',
    },
    '& .css-12cf4zg-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid grey',
    },
    '& .css-12cf4zg-MuiInputBase-root-MuiInput-root:before': {
      borderBottom: 'none',
    },
  },
  notificationIcon: {
    width: 20,
    margin: '0px 8px',
  },
  icon: {
    width: 20,
    margin: '0px 8px',
    filter: 'brightness(0) invert(1)',
  },
  logoImage: {
    marginRight: '1rem',
    width: 150,
    cursor: 'pointer',
  },
  fillWhite: {
    '& path': {
      fill: 'white !important',
    },
  },
  fillYellow: {
    '& path': {
      fill: '#D2AF39 !important',
    },
    '& .MuiTypography-root': {
      borderBottom: '1.5px solid #D2AF39',
    },
  },
});

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px 28px',
    minHeight: 'calc(100% - 40px)',
  },
  card: {
    backgroundColor: `${theme.palette.grey.main} !important`,
    cursor: 'pointer',
    position: 'relative',
  },
  endAdornment: {
    width: '1.2em',
    height: '1.2em',
    strokeWidth: '1px',
    fill: 'rgba(40, 40, 40, 0.7)',
  },
  courseDescription: {
    overflow: 'hidden',
    lineClamp: 3,
  },
  contextButton: {
    position: 'absolute !important',
    zIndex: 2,
    cursor: 'pointer',
    right: '0',
    top: '0.6em',
  },
  cogIcon: {
    width: '1.2em',
    height: '1.2em',
    fill: theme.palette.white.main,
  },
  contextMenu: {
    position: 'absolute',
    right: '0',
    '& .css-11ntv0c-MuiButtonBase-root-MuiMenuItem-root': {
      fontSize: '0.875rem',
    },
    '& .MuiPaper-root': {
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.20),0 5px 8px -2px rgba(0,0,0,0.15)',
    },
  },
  link: {
    // TODO: fix vertical spacing of link when it is the correct font it is a few pixels lower than regular text
    // fontFamily: 'Montserrat',
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '16px 28px',
    height: '100%',
  },
  card: {
    backgroundColor: 'grey.main !important',
    cursor: 'pointer',
    position: 'relative',
  },
  endAdornment: {
    width: '1.2em',
    height: '1.2em',
    strokeWidth: '1px',
    fill: 'rgba(40, 40, 40, 0.7)',
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
    fill: 'white.main',
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
  questionButton: {
    '&.MuiButton-root': {
      borderRadius: '18px 0px 0px 18px',
    },
  },
  lessonButton: {
    '&.MuiButton-root': {
      borderRadius: '0px 18px 18px 0px',
    },
  },
  iconButtonText: {
    paddingLeft: 8,
  },
  lessonCardContainer: {
    padding: 24,
  },
  lessonCardHeader: {
    padding: 32,
  },
  courseCardDetailsArea: {
    overflow: 'hidden',
    '&.MuiTypography-root': {
      marginBottom: 40,
    },
  },
  courseCardDetails: {
    overflow: 'hidden',
    // '&.MuiTextField-root': {
    margin: 'normal',
    // },
  },
  lessonCardBody: {
    padding: 20,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  sectionTitle: {
    '&.MuiTypography-root': {
      fontWeight: 900,
    },
  },
  subSection: {
    paddingLeft: 12,
  },
});

export default useStyles;

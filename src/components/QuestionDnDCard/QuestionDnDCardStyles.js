import { makeStyles } from '@mui/styles';

// this is a start for activity card I need to understand CSS better to finish it
const useStyles = makeStyles({
  activityTitle: {
    '&.MuiTypography-root': {
      fontSize: 40,
      fontFamily: 'Montserrat',
    },
  },
  activityCardDescription: {
    '&.MuiTypography-root': {
      marginBottom: 40,
    },
  },
  activityCardBody: {
    padding: 20,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
});

export default useStyles;

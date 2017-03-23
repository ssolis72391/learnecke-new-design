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
  lessonTitle: {
    '& .MuiInput-input.Mui-disabled': {
      '-webkit-text-fill-color': 'rgba(41, 46, 53, 0.87)',
      paddingBottom: '0.125rem',
    },
  },
  lessonDescription: {
    '& .MuiInput-input.Mui-disabled': {
      '-webkit-text-fill-color': 'rgba(41, 46, 53, 0.87)',
      paddingBottom: '0.625rem',
      fontSize: '14px',
    },
  },
  lessonEditedTime: {
    '& .MuiInput-input.Mui-disabled': {
      '-webkit-text-fill-color': 'rgba(57, 61, 68, 0.57)',
      paddingTop: '0.625rem',
      fontStyle: 'italic',
      fontWeight: '300',
      fontSize: '12px',
    },
  },
});

export default useStyles;

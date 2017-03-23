import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  questionButton: {
    '&.MuiButton-root': {
      borderRadius: '18px 0px 0px 18px',
    },
  },
  lessonButton: {
    '&.MuiButton-root': {
      height: 40,
      paddingTop: 12,
      paddingBottom: 12,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      borderRadius: 0,
      backgroundColor: theme.palette.white.primary,
      paddingRight: 24,
      paddingLeft: 24,
    },
  },
  lessonCardContainer: {
    padding: 24,
  },
  lessonCardHeader: {
    padding: 32,
  },
  lessonCardBody: {
    padding: 0,
    marginTop: 20,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: 'none',
  },
  sectionTitle: {
    '&.MuiTypography-root': {
      fontWeight: 'normal',
      marginBottom: 0,
    },
  },
  subSection: {
    paddingLeft: 12,
  },
  lessonDescriptionsummary: {
    '&.MuiTypography-root': {
      marginTop: 12,
      fontSize: 10,
    },
  },
  tasksButton: {
    '&.MuiButton-root': {
      borderRadius: '9999px 0px 0px 9999px',
      border: `1px solid ${theme.palette.primary.main}`,
      height: 40,
      borderRight: 'none',
      width: 64,
    },
  },
  layoutButton: {
    '&.MuiButton-root': {
      borderRadius: '0px 9999px 9999px 0px',
      border: `1px solid ${theme.palette.primary.main}`,
      height: 40,
      borderLeft: 'none',
      width: 64,
    },
  },
}));

export default useStyles;

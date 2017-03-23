import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  questionButton: {
    '&.MuiButton-root': {
      borderRadius: '18px 0px 0px 18px',
    },
  },
  questionLessonName: {
    '&.MuiButton-root': {
      borderRadius: '9999px',
      textTransform: 'initial',
      fontSize: 'small',
      fontWeight: '400',
      padding: '0.5rem 1rem',
      marginBottom: '1.75rem',
      marginTop: '1.26rem',
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
  lessonCardBody: {
    padding: 20,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  subSection: {
    paddingLeft: 12,
  },

  questionTableHead: {
    backgroundColor: 'secondary.main',
    '& th.MuiTableCell-root': {
      color: 'rgba(40, 40, 40, 0.85)',
      fontWeight: '700',
      fontSize: '1rem',
      padding: '0.75rem !Important',
    },
  },
  testResultsIcon: {
    // width: '10px',
  },
  firstRowItem: {
    paddingLeft: '2.25rem',
  },
  questionTable: {
    '& .firstRowItem': {
      paddingLeft: '2.25rem',
    },
    '& .popularityText.MuiTableCell-root ': {
      fontWeight: '700',
      color: 'secondary.main',
      fontSize: '1rem',
    },
  },
  editButton: {
    '&.MuiButton-root:disabled': {
      opacity: '0.5',
      color: 'white',
    },
  },
  questionIconButton: {
    '&.MuiButton-root': {
      borderRadius: 2,
    },
    '&.MuiButton-root:disabled': {
      opacity: '0.5',
    },
  },
  filterEndAdornment: {
    width: '1.46rem',
    height: '1.25rem',
    strokeWidth: '1px',
    '& path': {
      fill: 'rgba(40, 40, 40, 0.85) !important',
    },
  },
  filterFormControl: {
    '&.MuiFormControl-root': {
      minWidth: '24.5rem',
    },
  },
  filterTagsInput: {
    '& input.MuiInput-input': {
      paddingBottom: '0.75rem',
      fontSize: '1rem',
      '&:placeholder': {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  cardHeader: {
    '&.MuiCardHeader-root': {
      [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  questionName: {
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

  questionTable: {
    '& .firstRowItem': {
      paddingLeft: '2.25rem',
    },
    '& .popularityText.MuiTableCell-root ': {
      fontWeight: '700',
      color: theme.palette.primary.main,
      fontSize: '1rem',
    },
  },
  questionTableHead: {
    backgroundColor: theme.palette.secondary.main,
    '& th.MuiTableCell-root': {
      color: 'rgba(40, 40, 40, 0.85)',
      fontWeight: '700',
      fontSize: '1rem',
      padding: '0.75rem !Important',
    },
  },

  editButton: {
    '&.MuiButton-root:disabled': {
      backgroundColor: theme.palette.primary.main,
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
}));

export default useStyles;

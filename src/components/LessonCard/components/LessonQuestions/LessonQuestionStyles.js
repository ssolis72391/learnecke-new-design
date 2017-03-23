import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
      color: theme.palette.white.primary,
      fontWeight: '700',
      fontSize: '1rem',
      padding: '0.75rem !Important',
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
  loadingWrapper: {
    display: 'flex',
    margin: '16px 0px 4px 0px',
    justifyContent: 'center',
  },
}));

export default useStyles;

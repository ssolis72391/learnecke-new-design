import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  createQuizDialog: {
    '& .MuiPaper-root.MuiPaper-elevation': {
      backgroundColor: theme.palette.grey.main,
      padding: 40,
    },
  },
  dialogTitle: {
    '&.MuiTypography-root': {
      padding: 0,
    },
  },
  dialogContent: {
    '&.MuiDialogContent-root': {
      padding: 0,
    },
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  cancelButton: {
    '&.MuiButton-root': {
      width: 108,
      borderRadius: 0,
      height: 40,
      marginLeft: 20,
      marginRight: 20,
    },
    '&.MuiButton-root:disabled': {
      opacity: '0.5',
    },
  },

  saveButton: {
    '&.MuiButton-root': {
      width: 86,
      height: 40,
      borderRadius: 0,
      marginLeft: 20,
      marginRight: 20,
    },
    '&.MuiButton-root:disabled': {
      opacity: '0.5',
      color: 'white.main',
    },
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  questionLessonName: {
    '&.MuiButton-root': {
      borderRadius: '9999px',
      textTransform: 'initial',
      fontSize: 'small',
      fontWeight: '400',
      height: 32,
      minWidth: 150,
      padding: '0.5rem 0.5rem',
    },
  },
  chip: {
    '&.MuiButtonBase-root': {
      backgroundColor: theme.palette.secondary.light,
      border: 'none',
      fontSize: 14,
      color: theme.palette.dark.main,
      padding: '0.5rem 0.125rem',
      '& .MuiSvgIcon-root': {
        width: 16,
        height: 16,
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  questionAccordion: {
    border: 'none !important',
    borderRadius: '0 !important',
    margin: '0 !important',
    boxShadow: 'none !important',
    backgroundColor: 'transparent !important',
    '& .MuiAccordionSummary-root': {
      paddingLeft: 0,
    },
    paddingBottom: 16,
    '&::before': {
      display: 'none',
    },
  },
  chevronDown: {
    width: 16,
    height: 16,
  },
  deleteButton: {
    '&.MuiButton-root': {
      width: '185px',
      borderRadius: 0,
      height: 40,
      color: theme.palette.alert.main,
      borderColor: theme.palette.alert.main,
    },
  },
  nextButton: {
    '&.MuiButton-root': {
      width: '167px',
      borderRadius: 0,
      height: 40,
    },
  },
}));

export default useStyles;

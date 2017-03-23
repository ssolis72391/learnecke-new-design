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
      width: 185,
      borderRadius: 0,
      height: 40,
    },
  },
  nextButton: {
    '&.MuiButton-root': {
      width: 167,
      borderRadius: 0,
      height: 40,
    },
    '&.MuiButton-root:disabled': {
      opacity: '0.5',
    },
  },
  newQuizButton: {
    '&.MuiButton-root': {
      width: 218,
      borderRadius: 0,
      fontSize: 14,
      height: 40,
      '& .addCircleIcon': {
        width: 24,
        height: 24,
        '& path': {
          fill: 'white !important',
        },
      },
    },
  },
  filterTagsInput: {
    paddingLeft: 12,
    paddingRight: 12,
    '& input.MuiInput-input': {
      paddingBottom: '0.75rem',
      fontSize: '1rem',
    },
    '& input.MuiInput-input::placeholder': {
      color: 'rgba(0, 0, 0, 0.6) !important',
      opacity: 1,
    },
  },
}));

export default useStyles;

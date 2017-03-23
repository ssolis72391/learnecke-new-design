import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
  filterSearchInput: {
    paddingLeft: '0.5rem !important',
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '& input.MuiOutlinedInput-input': {
      paddingTop: 8.5,
      paddingBottom: 8.5,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0,
    },
  },
  filterSearchAdornment: {
    width: 24,
    height: 24,
  },
  filterCheckbox: {
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
    },
  },
});

export default useStyles;

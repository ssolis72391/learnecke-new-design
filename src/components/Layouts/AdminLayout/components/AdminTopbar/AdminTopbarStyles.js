import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    '&.MuiAppBar-root': {
      backgroundColor: theme.palette.grey.main,
    },
  },
  topbarTextField: {
    width: 'calc(100% - 80px)',
    '& .MuiInput-root': {
      borderBottom: '1px solid grey',
    },
    '& .css-12cf4zg-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid grey',
    },
    '& .css-12cf4zg-MuiInputBase-root-MuiInput-root:before': {
      borderBottom: 'none',
    },
  },
  icon: {
    width: 20,
  },
  iconButton: {
    '&.MuiButtonBase-root': {
      margin: '0px 8px',
    },
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '16px 28px',
    minHeight: 'calc(100% - 64px)',
  },
  link: {
    // TODO: fix vertical spacing of link when it is the correct font it is a few pixels lower than regular text
    // fontFamily: 'Montserrat',
  },
  emptyQuizzesIcon: {
    margin: '60px auto',
  },
});

export default useStyles;

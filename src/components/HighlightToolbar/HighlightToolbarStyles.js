import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  tooltipButton: {
    backgroud: 'none',
    border: 'none',
    color: theme.palette.white.main,
    cursor: 'pointer',
    visibility: (props) => (props.loading ? 'hidden' : 'visible'),
  },

  tooltipText: {
    width: 192,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white.main,
    textAlign: 'center',
    borderRadius: 6,
    display: 'inline-block',
    padding: '8px 0px',
    bottom: '125%',
    left: '50%',
    fontFamily: 'Montserrat',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: -5,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
    },
  },

  // loading: {
  //   pointerEvents: 'none',
  //   backgroud: 'none',
  //   border: 'none',
  //   color: theme.palette.white.main,
  //   cursor: 'arrow',
  // },
}));

export default useStyles;

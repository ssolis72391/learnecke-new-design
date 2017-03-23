import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  saveTagButton: {
    '&.MuiButton-root': {
      borderRadius: '18px 0px 0px 18px',
    },
  },
  iconButtonText: {
    paddingRight: 8,
  },
  tagButton: {
    '&.MuiButton-root': {
      borderRadius: 18,
      lineHeight: 1.4,
    },
  },
  tagGroup: {
    marginTop: 16,
  },
  iconButton: {
    pointerEvents: 'none',
  },
  disableIcon: {
    opacity: 0.4,
  },
});

export default useStyles;

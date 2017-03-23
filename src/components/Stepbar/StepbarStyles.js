import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    '&.MuiCard-root': {
      borderRadius: 1,
      display: 'flex',
      padding: 12,
    },
  },
  subStep: {
    display: 'flex',
    alignItems: 'center',
  },
  subStepImageIcon: {
    width: 40,
  },
  subActiveStepTextIcon: {
    width: 40,
    height: 40,
    fontWeight: 900,
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  subDisableStepTextIcon: {
    width: 40,
    height: 40,
    fontWeight: 900,
    color: 'rgba(0, 0, 0, 0.38)',
    border: '2px solid rgba(0, 0, 0, 0.38)',
    borderRadius: '50%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  subActiveStepBar: {
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    width: 151,
    margin: 10,
  },
  subDisableStepBar: {
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    borderRadius: 4,
    width: 151,
    margin: 10,
  },
  subActiveStepText: {
    marginLeft: -30,
    color: 'rgba(40, 40, 40, 0.85)',
  },
  subDisableStepText: {
    marginLeft: -30,
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));

export default useStyles;

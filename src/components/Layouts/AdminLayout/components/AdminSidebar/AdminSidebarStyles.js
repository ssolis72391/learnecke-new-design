import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    '& .MuiPaper-root': {
      border: 'none',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  nonActive: {
    color: theme.palette.white.primary,
  },
  active: {
    backgroundColor: theme.palette.grey.main,
  },
  headSidebar: {
    backgroundColor: theme.palette.grey.main,
  },
  logoImage: {
    marginRight: '1rem',
    width: 140,
  },
  logoCutImage: {
    width: 28,
  },
  headSidebarArrowButton: {
    '&.MuiIconButton-root': {
      padding: 0,
      backgroundColor: 'rgba(40, 40, 40, 0.85)',
      color: theme.palette.white.main,
      '& svg': {
        fontSize: '1.2rem',
      },
    },
    '&.css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover': {
      backgroundColor: 'rgba(40, 40, 40, 0.65)',
    },
  },
  itemIcon: {
    '&.MuiListItemIcon-root': {
      minWidth: 40,
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
}));

export default useStyles;

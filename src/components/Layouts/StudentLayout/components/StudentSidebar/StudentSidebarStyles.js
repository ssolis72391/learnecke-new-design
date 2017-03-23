import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    '& .MuiPaper-root': {
      border: 'none',
      backgroundColor: theme.palette.dark.main,
    },
  },
  active: {
    backgroundColor: theme.palette.dark.medium,
  },
  headSidebar: {
    backgroundColor: theme.palette.grey.main,
    marginBottom: 8,
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
      backgroundColor: theme.palette.dark.medium,
      color: theme.palette.white.main,
      '& svg': {
        fontSize: '1rem',
      },
    },
    '&.css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover': {
      backgroundColor: theme.palette.dark.medium,
    },
  },
  itemIcon: {
    '&.MuiListItemIcon-root': {
      minWidth: 40,
    },
  },
  icon: {
    width: 18,
    height: 18,
    filter: 'brightness(0) invert(1)',
  },
}));

export default useStyles;

import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import CheckOffIcon from 'assets/Icons/streamline-check-off-white.svg';
import CheckOnIcon from 'assets/Icons/streamline-check-on--white.svg';
import LockIcon from 'assets/Icons/streamline-lock--white.svg';
import LogoCutIcon from 'assets/Icons/streamline-logo-cut.png';
import LogoIcon from 'assets/Icons/streamline-logo.png';
import { useLocation, withRouter } from 'react-router-dom';
import useStyles from './StudentSidebarStyles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)})`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const mockLessonList = [
  { id: 1, name: 'Lesson 1', isCompleted: true, active: false },
  { id: 2, name: 'Lesson 2', isCompleted: false, active: true },
  { id: 3, name: 'Lesson 3', isCompleted: false, active: false },
  { id: 4, name: 'Lesson 4', isCompleted: false, active: false },
  { id: 5, name: 'Lesson 5', isCompleted: false, active: false },
  { id: 6, name: 'Lesson 6', isCompleted: false, active: false },
  { id: 7, name: 'Lesson 7', isCompleted: false, active: false },
  { id: 8, name: 'Lesson 8', isCompleted: false, active: false },
];

const StudentSidebar = function (props) {
  const { open, handleDrawerClose, handleDrawerOpen, history } = props;

  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;

  const handleClickNav = (link) => {
    // history.push(`/student/${link}`);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Drawer variant='permanent' open={open} className={classes.sidebar}>
      <DrawerHeader className={classes.headSidebar}>
        {open ? (
          <>
            <img src={LogoIcon} alt='logo' className={classes.logoImage} />
            <IconButton className={classes.headSidebarArrowButton} onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={() => handleClickNav('homepage')}>
              <img src={LogoCutIcon} alt='logocut' className={classes.logoCutImage} />
            </IconButton>
            <IconButton className={classes.headSidebarArrowButton} onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </DrawerHeader>

      {mockLessonList.map(({ id, name, active, completed }) => (
        <List key={id} className={active && classes.active}>
          <ListItem button onClick={() => handleClickNav('courses')}>
            <ListItemIcon className={classes.itemIcon}>
              <img
                src={completed ? CheckOnIcon : active ? CheckOffIcon : LockIcon}
                alt='manage-courses'
                className={classes.icon}
              />
            </ListItemIcon>
            {open && <ListItemText sx={{ color: 'white' }} primary={name} />}
          </ListItem>
        </List>
      ))}

      <Divider />
      {/* <List>
        <ListItem button key={'logout'} onClick={handleLogout}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={LogoutIcon} alt='logout' className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List> */}
    </Drawer>
  );
};

export default withRouter(StudentSidebar);

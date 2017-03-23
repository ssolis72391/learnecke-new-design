import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Divider, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LogoWhiteIcon from 'assets/Icons/streamline-logo--white.png';
import { ReactComponent as HomeIcon } from 'assets/Icons/streamline-house-chimney-1--interface-essential--48x48.svg';
import { ReactComponent as ClassesIcon } from 'assets/Icons/streamline-calendar-school--interface-essential--48x48.svg';
import { ReactComponent as ArticlesIcon } from 'assets/Icons/streamline-bookmarks-document-alternate--interface-essential--48x48.svg';
import { ReactComponent as PerformanceIcon } from 'assets/Icons/streamline-check-circle-1--interface-essential--48x48.svg';

import SearchIcon from 'assets/Icons/streamline-search-alternate--interface-essential--48x48.svg';
import BellNotificationIcon from 'assets/Icons/streamline-alert-bell-notification-2--interface-essential--48x48.svg';
import ReadIcon from 'assets/Icons/streamline-read-light-idea.svg';
import SingleNeuralIcon from 'assets/Icons/streamline-single-neutral-circle--users--48x48.svg';

import useStyles from './StudentTopbarStyles';

import AdminTray from '../StudentTray/StudentTray';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, showNav }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer - 1,
  width: showNav ? `calc(100% - 67px)` : '100%',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    showNav && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const topNavList = [
  { name: 'Dashboard', icon: HomeIcon, href: 'dashboard' },
  { name: 'Classes', icon: ClassesIcon, href: 'classes' },
  { name: 'Articles', icon: ArticlesIcon, href: 'articles' },
  { name: 'Performance', icon: PerformanceIcon, href: 'performance' },
];

const StudentTopbar = function (props) {
  const { open, showNav, history } = props;
  const { pathname } = useLocation();
  const classes = useStyles();
  const [trayOpenButtonClicked, setTrayOpenButtonClicked] = React.useState(null);
  const [trayTitle, setTrayTitle] = React.useState('Title');
  const [trayChildren, setTrayChildren] = React.useState([]);
  const handleTrayOpenClick = (event) => {
    setTrayTitle(event.currentTarget.id);
    setTrayChildren([]);
    setTrayOpenButtonClicked(event.currentTarget);
  };
  const handleTrayClose = (event) => {
    setTrayOpenButtonClicked(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUserButtonMenu = Boolean(anchorEl);
  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  const handleUserMenuAction = (event) => {
    setAnchorEl(null);
    const [buttonId, index] = event.target.id.split('--');
    switch (buttonId) {
      case 'Profile':
        alert('Open user profile.');
        return;
      case 'Admin View':
        alert('Set Role to Admin, and open Admin Dashboard.');
        return;
      case 'Instructor':
        alert('Set Role to Instructor, and open Instructor Dashboard.');
        return;
      case 'StudentView':
        alert('Set Role to Student, and open Student DashBoard.');
        return;
      case 'Logout':
        handleLogout();
        return;
      default:
        alert(`Hey Developer you need to creat a case for your new button ${buttonId} index ${index}`);
    }
  };

  return (
    <AppBar position='fixed' showNav={showNav} open={open} className={classes.appbar}>
      <Toolbar>
        <Stack direction='row' justifyContent='space-between' width='100%' alignItems='center'>
          <Stack direction='row' alignItems='center'>
            <img src={LogoWhiteIcon} alt='logo' className={classes.logoImage} />

            <Stack direction='row' alignItems='center' pl={5.5} pr={7} spacing={5}>
              {topNavList.map(({ name, icon: Icon, href }) => {
                const isActive = pathname.includes(href);
                return (
                  <Stack
                    key={name}
                    sx={{ cursor: 'pointer' }}
                    direction='row'
                    className={isActive ? classes.fillYellow : classes.fillWhite}
                    spacing={1}
                    component='div'
                    onClick={() => history.push(`/student/${href}`)}
                  >
                    <Icon height='1.5rem' width='1.5rem' />
                    <Typography color={isActive ? '#D2AF39' : 'white'} variant='h4'>
                      {name}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <TextField
              variant='standard'
              placeholder='Search'
              className={classes.topbarTextField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={SearchIcon} className={classes.icon} alt='search' />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton id='Notifications' onClick={handleTrayOpenClick}>
              <img src={BellNotificationIcon} className={classes.notificationIcon} alt='bell' />
            </IconButton>
            <IconButton id='Information' onClick={handleTrayOpenClick}>
              <img src={ReadIcon} className={classes.icon} alt='read' />
            </IconButton>
            <IconButton
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={openUserButtonMenu ? 'true' : undefined}
              onClick={handleUserIconClick}
            >
              <img src={SingleNeuralIcon} className={classes.icon} alt='single' />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={openUserButtonMenu}
              onClose={() => setAnchorEl(null)}
              onBackdropClick={() => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem id='Profile' onClick={handleUserMenuAction}>
                Profile
              </MenuItem>
              <Divider variant='middle' />
              <MenuItem id='Admin View' onClick={handleUserMenuAction}>
                Admin View
              </MenuItem>
              <MenuItem id='Instructor View' onClick={handleUserMenuAction}>
                Instructor View
              </MenuItem>
              <MenuItem id='Student View' onClick={handleUserMenuAction}>
                Student View
              </MenuItem>
              <Divider variant='middle' />
              <MenuItem id='Logout' onClick={handleUserMenuAction}>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
      <AdminTray open={trayOpenButtonClicked} onClose={handleTrayClose} title={trayTitle}>
        {trayChildren}
      </AdminTray>
    </AppBar>
  );
};

export default withRouter(StudentTopbar);

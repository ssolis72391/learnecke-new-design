import React from 'react';
import { withRouter } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from 'assets/Icons/streamline-search-alternate--interface-essential--48x48.svg';
import BellNotificationIcon from 'assets/Icons/streamline-alert-bell-notification-2--interface-essential--48x48.svg';
import PrintIcon from 'assets/Icons/streamline-print-interface.svg';
import LampIcon from 'assets/Icons/streamline-lamp-interface.svg';
import SingleNeuralIcon from 'assets/Icons/streamline-single-neutral-circle--users--48x48.svg';

import useStyles from './AdminTopbarStyles';

import AdminTray from '../AdminTray/AdminTray';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer - 1,
  width: `calc(100% - 57px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminTopbar = function (props) {
  const { open, history } = props;
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
    <AppBar position='fixed' open={open} className={classes.appbar}>
      <Toolbar>
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
        <IconButton id='Notifications' className={classes.iconButton}>
          <img src={PrintIcon} className={classes.icon} alt='bell' />
        </IconButton>
        <IconButton id='Notifications' onClick={handleTrayOpenClick} className={classes.iconButton}>
          <img src={BellNotificationIcon} className={classes.icon} alt='bell' />
        </IconButton>
        <IconButton id='Information' onClick={handleTrayOpenClick} className={classes.iconButton}>
          <img src={LampIcon} className={classes.icon} alt='read' />
        </IconButton>
        <IconButton
          id='basic-button'
          aria-controls='basic-menu'
          aria-haspopup='true'
          aria-expanded={openUserButtonMenu ? 'true' : undefined}
          onClick={handleUserIconClick}
          className={classes.iconButton}
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
      </Toolbar>
      <AdminTray
        open={trayOpenButtonClicked}
        childrenProps={trayChildren}
        onClose={handleTrayClose}
        title={trayTitle}
      />
    </AppBar>
  );
};

export default withRouter(AdminTopbar);

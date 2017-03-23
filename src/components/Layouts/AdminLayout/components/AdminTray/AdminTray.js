import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { styled } from '@mui/material/styles';

import CloseIcon from 'assets/Icons/streamline-delete-2--interface-essential--48x48.svg';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
}));

const AdminTray = function ({ open, onClose, title, childrenProps }) {
  const anchor = 'right';

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    onClose();
  };

  const trayItems = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {childrenProps.map((child, index) => (
          <ListItem button key={child.id}>
            {child}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer
          sx={{ width: 250, backgroundColor: 'F8F8F8' }}
          anchor={anchor}
          open={open}
          hideBackdrop
          onClose={toggleDrawer()}
        >
          <DrawerHeader>
            {title}
            <IconButton onClick={toggleDrawer()}>
              <img src={CloseIcon} alt='Close Tray' height='16' width='16' />
            </IconButton>
          </DrawerHeader>
          {trayItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default AdminTray;

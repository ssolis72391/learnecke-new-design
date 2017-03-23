import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AdminSidebar, AdminTopbar } from './components';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StudentLayout = function (props) {
  const { showNav, children } = props;

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'rgba(40, 40, 40, 0.85)',
      }}
    >
      <AdminTopbar showNav={showNav} open={open} />
      {showNav && (
        <AdminSidebar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      )}
      <Box component='main' sx={{ flexGrow: 1, px: 5, py: 2.5 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default StudentLayout;

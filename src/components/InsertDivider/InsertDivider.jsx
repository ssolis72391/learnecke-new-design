import React, { useState } from 'react';
import { Box, Divider, IconButton } from '@mui/material';

import PlusIcon from 'assets/Icons/streamline-add-circle--interface-essential--48x48.svg';

import useStyles from './InsertDividerStyles';

// Insert Divider is use to as a separator between ui objects.  It occupies 10px between items to ensure list items do not move when the divider transitions between being visible or not visible onMouseOver or onMouseLeave.
// TODO: Review margins/height spacing to prevent surrounding list items from moving when they are being dragged
// TODO: Consider moving css functionality to a separate file.
const InsertDivider = function ({ displayProp, onClick }) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  return (
    <Box
      className={classes.root}
      height={visible ? '25px' : '10px'}
      display={displayProp}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && (
        <Box display marginTop='-15px' marginBottom='-15px'>
          <Divider>
            <IconButton onClick={onClick}>
              {/* <PlusIcon /> */}
              <img src={PlusIcon} alt='Insert New Section' height='24' width='24' color='primary' />
            </IconButton>
          </Divider>
        </Box>
      )}
    </Box>
  );
};
export default InsertDivider;

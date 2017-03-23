import React, { useState } from 'react';
import { FormControl, Input, Popover } from '@mui/material';
import { ReactComponent as ArrowDownIcon } from 'assets/Icons/streamline-arrow-button-down-2--arrows-diagrams--48x48.svg';
import useStyles from './FilterPopoverStyles';

const FilterPopover = function ({ placeholder, children }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <FormControl className={classes.filterFormControl} onClick={handleClick} variant='standard'>
        <Input
          type='text'
          placeholder={placeholder}
          readOnly
          className={classes.filterTagsInput}
          endAdornment={<ArrowDownIcon className={classes.filterEndAdornment} />}
          variant='standard'
        />
      </FormControl>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default FilterPopover;

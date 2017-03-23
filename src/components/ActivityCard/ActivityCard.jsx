import React, { useState } from 'react';
import { Box, Grid, TextField, Menu, MenuItem, IconButton, Typography } from '@mui/material';

import ArrowUp from 'assets/Icons/streamline-arrow-button-up-2--arrows-diagrams--48x48.svg';
import ArrowDown from 'assets/Icons/streamline-arrow-button-down-2--arrows-diagrams--48x48.svg';
import ChevronUp from 'assets/Icons/streamline-arrow-up-1--arrows-diagrams--48x48.svg';
import ChevronDown from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';
import CardMenu from 'assets/Icons/streamline-navigation-menu-vertical--interface-essential--48x48.svg';
import { CardDividerHorz, CardDividerVert } from 'components';

import useStyles from './ActivityCardStyles';

const ActivityCard = function ({
  dataProp,
  cardTypes = [],
  onMoveTop,
  onMoveUp,
  onMoveDown,
  onMoveBottom,
  handleChange,
  openMe,
  index,
  isDragging,
}) {
  const classes = useStyles();

  const [data, updateData] = useState(dataProp);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    const [buttonId, index] = event.target.id.split('--');
    switch (buttonId) {
      case 'Open':
        openMe();
        return;
      case 'Edit':
        handleChange({
          index,
          name: 'editing',
          value: !dataProp.editing,
        });
        return;
      case 'Delete':
        alert(`Are you sure you want to delete card index ${index}?\nThis action cannot be undone!`);
        return;
      case 'Move To Top':
        onMoveTop(index);
        return;
      case 'Move To Bottom':
        onMoveBottom(index);
        return;
      default:
        alert('Hey Developer you need to creat a case for your new button');
    }
  };

  console.log(isDragging);

  return (
    <Box
      component='div'
      onDrag={() => {
        console.log('hello');
      }}
      ClasseName='activity-card'
      onDoubleClick={openMe}
    >
      <Grid
        bgcolor='white.primary'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          pl: 0.75,
          pr: 2.5,
          my: 0.5,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25);',
        }}
      >
        <Grid item padding='1' sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item padding='1' mr={2} sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton disabled={onMoveUp === undefined} onClick={() => onMoveUp()}>
              <img src={ArrowUp} alt='Move Up One Step' height='16' width='16' />
            </IconButton>
            <IconButton disabled={onMoveDown === undefined} onClick={() => onMoveDown()}>
              <img src={ArrowDown} alt='Move Down One Step' height='16' width='16' />
            </IconButton>
          </Grid>
          <CardDividerVert />
        </Grid>
        <Grid p={1} pl={2.5} pr={3} item xs='11' sx={{ display: 'flex', flexDirection: 'column' }}>
          {data.editing ? (
            <>
              <Typography>
                <TextField
                  select={!isDragging}
                  label='Choose Section Type'
                  type='text'
                  value={data.itemType || ''}
                  fullWidth
                  variant='filled'
                  disabled={isDragging}
                  onChange={(e) => {
                    updateData({ ...data, itemType: e.target.value });
                    // setUpdatedItemType(true)
                  }}
                  // onBlur works for select input but not for typed input
                  onBlur={() =>
                    handleChange({
                      index,
                      name: 'itemType',
                      value: data.itemType,
                    })
                  }
                >
                  {cardTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Typography>
              <Typography>
                <TextField
                  multiline
                  label='description'
                  type='text'
                  value={data.description || ''}
                  fullWidth
                  variant='filled'
                  onChange={(e) => {
                    updateData({ ...data, description: e.target.value });
                    // setUpdatedDescription(true)
                  }}
                  // onBlur works for select input but not for typed input
                  onBlur={() =>
                    handleChange({
                      index,
                      name: 'description',
                      value: data.description,
                    })
                  }
                />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='h5'>
                <TextField
                  value={`${data.itemType} - ${data.title}`}
                  fullWidth
                  disabled
                  variant='standard'
                  InputProps={{
                    disableUnderline: true,
                    className: classes.lessonTitle,
                    sx: { fontWeight: '700' },
                  }}
                />
              </Typography>
              <Typography>
                <TextField
                  value={data.description}
                  fullWidth
                  disabled
                  variant='standard'
                  InputProps={{
                    className: classes.lessonDescription,
                    disableUnderline: true,
                  }}
                />
              </Typography>
              <CardDividerHorz />
              <Typography>
                <TextField
                  value={`Last edited ${data.editedDate}`}
                  fullWidth
                  disabled
                  variant='standard'
                  InputProps={{
                    className: classes.lessonEditedTime,
                    disableUnderline: true,
                  }}
                />
              </Typography>
            </>
          )}
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            verticalAlign: 'middle',
          }}
        >
          <CardDividerVert />
          {data.editing ? (
            // simplified onclick to push value to parent might need to change if we impliment form control
            // <IconButton onClick={()=>toggelEditing(!edit)}>
            <IconButton
              sx={{ ml: 1.5, mr: 0.5 }}
              onClick={() =>
                handleChange({
                  index,
                  name: 'editing',
                  value: !dataProp.editing,
                })
              }
            >
              <img src={ChevronUp} alt='Close' height='22.5' width='22.5' />
            </IconButton>
          ) : (
            // <IconButton onClick={()=>toggelEditing(!edit)}>
            <IconButton
              sx={{ ml: 1.5, mr: 0.5 }}
              onClick={() =>
                handleChange({
                  index,
                  name: 'editing',
                  value: !dataProp.editing,
                })
              }
            >
              <img src={ChevronDown} alt='Open' height='22.5' width='22.5' />
            </IconButton>
          )}

          <IconButton
            id='basic-button'
            aria-controls='basic-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img src={CardMenu} alt='Context Menu' height='24' width='24' />
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem id={`Open--${index}`} onClick={handleClose}>
              Open
            </MenuItem>
            <MenuItem id={`Edit--${index}`} onClick={handleClose}>
              Edit
            </MenuItem>
            <MenuItem id={`Delete--${index}`} onClick={handleClose}>
              Delete
            </MenuItem>
            <MenuItem id={`Move To Top--${index}`} disabled={onMoveUp === undefined} onClick={handleClose}>
              Move To Top
            </MenuItem>
            <MenuItem id={`Move To Bottom--${index}`} disabled={onMoveDown === undefined} onClick={handleClose}>
              Move To Bottom
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivityCard;

// old vars and handle functions

// const [updatedDescription, setUpdatedDescription] = useState(false)
// const [updatedItemType, setUpdatedItemType] = useState(false)
// const [updatedEditing, setUpdatedEditing] = useState(false)

// useEffect(() => {
//     if (data && (data.itemType !== dataProp.itemType || data.description !== dataProp.description)) {
//         onChange({...data, editedDate: 'Today'})
//     }
// },[data.description])

// useEffect(() => {
//     if (updatedDescription) {
//         handleChange({index: index, name: 'description', value: data.description})
//         setUpdatedDescription(false)
//     }
// },[data.description])

// useEffect(() => {
//     if (updatedItemType) {
//         handleChange({index: index, name: 'itemType', value: data.itemType})
//         setUpdatedItemType(false)
//     }
// },[data.itemType])

// useEffect(() => {
//     if (updatedEditing) {
//         handleChange({index: index, name: 'editing', value: edit})
//     }
//     setUpdatedEditing(true)
// },[edit])

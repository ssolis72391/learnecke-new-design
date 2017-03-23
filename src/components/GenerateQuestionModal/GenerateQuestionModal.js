import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as AddIcon } from 'assets/Icons/streamline-add-circle--interface-essential--48x48.svg';
import { ReactComponent as RefreshIcon } from 'assets/Icons/streamline-button-refresh-arrow--interface-essential--48x48.svg';
import TagRow from 'components/TagRow';

// Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Divider from '@mui/material/Divider';

// Select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { Typography, CircularProgress } from '@mui/material';
import useStyles from './GenerateQuestionModalStyles';

const GenerateQuestionModal = function (props) {
  const classes = useStyles();
  const {
    show,
    title,
    handleShowModal,
    questionData,
    handleRegenerateQuestion,
    handleRegenerateAndSaveQuestion,
    handleSaveAndClose,
    handleTagDelete,
    handleAddNewTag,
    regenerating,
    saveAndregenerating,
    saveAndClose,
  } = props;

  const [value, setValue] = useState('');
  const [level, setLevel] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleChangeDifficulty = (event) => {
    setLevel(event.target.value);
  };

  const handleChangeTags = (event) => {
    setNewTag(event.target.value);
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(questionData.answer);
  }, [questionData]);

  return (
    <Dialog open={show} maxWidth='md'>
      <DialogTitle>
        <Typography variant='h2'>Generated Question</Typography>
        <IconButton
          aria-label='close'
          onClick={() => handleShowModal(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 24,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{questionData.question}</DialogContentText>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='question'
            name='controlled-radio-buttons-group'
            value={value === '' ? '' : value.toLowerCase()}
            onChange={handleChangeRadio}
          >
            {questionData.choices.map((choice, index) => (
              <FormControlLabel
                key={index}
                disabled={regenerating || saveAndregenerating}
                value={choice.toLowerCase()}
                control={<Radio />}
                label={choice}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Divider
          sx={{
            height: 12,
          }}
        />
        <FormControl variant='standard' sx={{ m: 1, minWidth: 320 }} disabled={regenerating || saveAndregenerating}>
          <InputLabel id='demo-simple-select-standard-label'>Difficulty Level</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={level}
            onChange={handleChangeDifficulty}
            label='Difficulty Level'
          >
            <MenuItem value='easy'>Easy</MenuItem>
            <MenuItem value='medium'>Medium</MenuItem>
            <MenuItem value='hard'>Hard</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant='h5'
          sx={{
            marginTop: 1,
          }}
        >
          Tags
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }} disabled={regenerating || saveAndregenerating}>
            <InputLabel id='demo-simple-select-standard-label'>Select Tags</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              value={newTag}
              onChange={handleChangeTags}
              label='Select Tags'
            >
              <MenuItem value='sunrise'>sunrise</MenuItem>
              <MenuItem value='165th Airlift Wing'>165th Airlift Wing</MenuItem>
              <MenuItem value='Georgia National Guard'>Georgia National Guard</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin='dense'
            id='name'
            label='Add New Tag'
            type='tag'
            variant='standard'
            value={newTag}
            onChange={(event) => setNewTag(event.target.value)}
            disabled={regenerating || saveAndregenerating}
            sx={{ m: 1, minWidth: 320 }}
          />
          <div>
            <Button
              variant='outlined'
              disabled={regenerating || saveAndregenerating || !newTag}
              onClick={() => handleAddNewTag(newTag)}
            >
              Save Tag
            </Button>
          </div>
        </div>
        <div className={classes.tagGroup}>
          <TagRow title={title} tagList={questionData.tags} handleTagDelete={handleTagDelete} />
        </div>
      </DialogContent>

      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 24px',
        }}
      >
        <Button
          onClick={handleRegenerateQuestion}
          variant='outlined'
          endIcon={
            regenerating ? (
              <CircularProgress size='24px' />
            ) : (
              <RefreshIcon
                alt='regenerate'
                width='24'
                height='24'
                className={(saveAndregenerating || saveAndClose) && classes.disableIcon}
              />
            )
          }
          disabled={saveAndregenerating || saveAndClose}
          className={regenerating && classes.iconButton}
        >
          <span className={classes.iconButtonText}>GENERATE ANOTHER</span>
        </Button>
        <Button
          onClick={handleRegenerateAndSaveQuestion}
          variant='outlined'
          endIcon={
            saveAndregenerating ? (
              <CircularProgress size='24px' />
            ) : (
              <AddIcon
                alt='add'
                height='24'
                width='24'
                className={(regenerating || saveAndClose) && classes.disableIcon}
              />
            )
          }
          disabled={regenerating || saveAndClose}
          className={saveAndregenerating && classes.iconButton}
        >
          <span className={classes.iconButtonText}>SAVE AND ADD ANOTHER</span>
        </Button>
        <Button
          onClick={handleSaveAndClose}
          variant='contained'
          endIcon={saveAndClose && <CircularProgress size='24px' color='white' />}
          disabled={regenerating || saveAndregenerating}
          className={(regenerating || saveAndregenerating) && classes.iconButton}
        >
          SAVE AND CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenerateQuestionModal;

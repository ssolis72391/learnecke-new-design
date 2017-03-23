import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Box,
  DialogActions,
  Button,
} from '@mui/material';
import { ReactComponent as CloseIcon } from 'assets/Icons/streamline-delete-2--interface-essential--48x48.svg';
import useStyles from './CreateNewQuizModalStyles';

const marks = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
];

const valuetext = (value) => `${value}`;

const CreateNewQuizModal = function (props) {
  const classes = useStyles();
  const { show, handleShowModal, handleSaveQuiz } = props;
  const [quizType, setQuizType] = useState('');
  const [quizName, setQuizName] = useState('');
  const [questionNumber, setQuestionNumber] = useState('5');

  const handleChangeQuizType = (event) => {
    setQuizType(event.target.value);
  };

  const handleChangeQuizName = (event) => {
    setQuizName(event.target.value);
  };

  const handleChangeSlider = (event) => {
    setQuestionNumber(event.target.value);
  };

  useEffect(() => {
    if (show) {
      setQuizType('');
      setQuizName('');
      setQuestionNumber('5');
    }
  }, [show]);

  return (
    <Dialog className={classes.createQuizDialog} open={show} onClose={() => handleShowModal(false)} maxWidth='lg'>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant='h2'>Create New Quiz</Typography>
        <IconButton
          aria-label='close'
          onClick={() => handleShowModal(false)}
          sx={{
            position: 'absolute',
            right: 24,
            top: 40,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent} sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          margin='dense'
          id='name'
          label='Quiz Name'
          type='tag'
          variant='standard'
          onChange={handleChangeQuizName}
          sx={{ mt: 2, mb: 2, minWidth: 480 }}
        />
        <FormControl variant='standard' sx={{ mt: 1, mb: 2, minWidth: 240 }}>
          <InputLabel id='demo-simple-select-standard-label'>Quiz Type</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={quizType}
            onChange={handleChangeQuizType}
            label='Quiz Type'
          >
            <MenuItem value='Lesson Check'>Lesson Check</MenuItem>
            <MenuItem value='Progress Check'>Progress Check</MenuItem>
            <MenuItem value='Baseline Check'>Baseline Check</MenuItem>
          </Select>
        </FormControl>
        <Typography
          variant='h5'
          sx={{
            mt: 1,
            mb: -2,
          }}
        >
          Choose number of questions
        </Typography>
        <Box
          sx={{
            pl: 1.5,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <Slider
            aria-label='Custom marks'
            defaultValue={5}
            getAriaValueText={valuetext}
            step={5}
            valueLabelDisplay='auto'
            marks={marks}
            min={5}
            max={50}
            sx={{ width: '70%' }}
            onChange={handleChangeSlider}
          />
          <TextField
            margin='dense'
            id='name'
            disabled
            defaultValue='#'
            value={questionNumber}
            type='tag'
            variant='filled'
            sx={{ mt: 2, mb: 2, width: '20%' }}
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 24px 0 24px',
        }}
      >
        <Button className={classes.cancelButton} onClick={() => handleShowModal(false)} variant='outlined'>
          Cancel
        </Button>
        <Button
          onClick={() => handleSaveQuiz(quizName, quizType, questionNumber)}
          variant='contained'
          className={classes.saveButton}
          disabled={quizName === '' || quizType === ''}
        >
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNewQuizModal;

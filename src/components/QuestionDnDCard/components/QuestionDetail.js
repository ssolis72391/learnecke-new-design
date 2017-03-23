import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { ReactComponent as ChevronDownComponent } from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';
import { ReactComponent as AddCircleIcon } from 'assets/Icons/streamline-add-circle--interface-essential--48x48.svg';
import TagRow from 'components/TagRow';
import { CreateNewQuizModal } from 'components';

import useStyles from './QuestionDetailStyles';

const QuestionDetail = function () {
  const classes = useStyles();

  const [choices, setChoices] = useState(['Madison', 'Columbus', 'Tallahassee', 'Pierre']);
  const [quizList, setQuizList] = useState(['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5']);
  const [tagList, setTagList] = useState(['course 1', 'evaluation 1', 'question 1']);
  const [newTag, setNewTag] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [collapseState, setCollapseState] = useState({
    answers: false,
    addToQuiz: false,
    manageTags: false,
  });

  const handleSaveQuiz = (quizName, quizType, questionNumber) => {
    setQuizList([...quizList, quizName]);
    setShowModal(false);
  };

  const handleCollapseState = (collapseSection, value) => {
    setCollapseState({
      ...collapseState,
      [collapseSection]: value,
    });
  };

  const handleTagDelete = (tagToDelete) => {
    setTagList((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleAddNewTag = () => {
    setTagList([...tagList, newTag]);
    setNewTag('');
  };

  return (
    <Stack border='1px solid rgba(0, 0, 0, 0.12)' pt={2} pb={2.5} px={6}>
      <Accordion
        expanded={collapseState.answers}
        onChange={() => handleCollapseState('answers', !collapseState.answers)}
        className={classes.questionAccordion}
      >
        <AccordionSummary
          expandIcon={<ChevronDownComponent className={classes.chevronDown} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h4'>Answers</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <FormControl component='fieldset'>
            <RadioGroup aria-label='gender' defaultValue='female' name='radio-buttons-group'>
              {choices.map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={collapseState.addToQuiz}
        onChange={() => handleCollapseState('addToQuiz', !collapseState.addToQuiz)}
        className={classes.questionAccordion}
      >
        <AccordionSummary
          expandIcon={<ChevronDownComponent className={classes.chevronDown} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h4'>Add To Quiz</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Stack pt={2}>
            <FormGroup>
              {quizList.map((quiz) => (
                <FormControlLabel key={quiz} control={<Checkbox />} label={quiz} />
              ))}
            </FormGroup>
            <Button
              className={classes.newQuizButton}
              variant='contained'
              onClick={() => setShowModal(true)}
              endIcon={<AddCircleIcon className='addCircleIcon' />}
            >
              ADD TO NEW QUIZ
            </Button>
            <CreateNewQuizModal show={showModal} handleShowModal={setShowModal} handleSaveQuiz={handleSaveQuiz} />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={collapseState.manageTags}
        onChange={() => handleCollapseState('manageTags', !collapseState.manageTags)}
        className={classes.questionAccordion}
      >
        <AccordionSummary
          expandIcon={<ChevronDownComponent className={classes.chevronDown} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h4'>Manage Tags</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Stack spacing={0}>
            <TagRow title='lessonTitle' tagList={tagList} handleTagDelete={handleTagDelete} />
            <Stack direction='row' width='100%' spacing={2}>
              <Input
                type='text'
                placeholder='Add New Tag'
                fullWidth
                value={newTag}
                onChange={(event) => setNewTag(event.target.value)}
                className={classes.filterTagsInput}
                variant='standard'
              />
              <Button disabled={!newTag} onClick={handleAddNewTag} className={classes.nextButton} variant='outlined'>
                SAVE TAG
              </Button>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ mt: 3 }} />
      <Stack pt={3} direction='row' width='100%' justifyContent='center' spacing={2.5}>
        <Button className={classes.deleteButton} color='error' variant='outlined'>
          DELETE QUESTION
        </Button>
        <Button className={classes.nextButton} onClick={() => {}} variant='outlined'>
          NEXT QUESTION
        </Button>
      </Stack>
    </Stack>
  );
};

export default QuestionDetail;

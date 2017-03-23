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
  TableCell,
  tableCellClasses,
  Typography,
} from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { ReactComponent as ChevronDownComponent } from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';
import { ReactComponent as AddCircleIcon } from 'assets/Icons/streamline-add-circle--interface-essential--48x48.svg';
import TestResultsIcon from 'assets/Icons/streamline-school-test-results--school-learning--48x48.svg';
import ExpandableRow from 'components/ExpandableRow';
import TagRow from 'components/TagRow';
import { CreateNewQuizModal } from 'components';
import useStyles from './EachLessonQuestionStyles';

const initialQuizList = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5'];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: 'rgba(40, 40, 40, 0.85)',
    padding: '0.75rem',
  },
  [`&.${tableCellClasses.body}`]: {
    color: 'rgba(40, 40, 40, 0.85)',
    fontSize: 16,
    padding: '0.75rem',
  },
}));

const EachLessonQuestion = function ({
  eachQuestion,
  expandedRowId,
  handleChange,
  movetoNextQuestion,
  isLastQuestion,
  questionDetailsExpansions,
  handleQuestionDetailsChange,
  handleDeleteQuestion,
}) {
  const { id, question, choices, graded, tags, answer } = eachQuestion;
  const { answers, addToQuiz, manageTags } = questionDetailsExpansions;
  const classes = useStyles();

  const [tagList, setTagList] = useState(tags);
  const [quizList, setQuizList] = useState(initialQuizList);
  const [newTag, setNewTag] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleTagDelete = (tagToDelete) => () => {
    setTagList((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  const handleSaveQuiz = (quizName, quizType, questionNumber) => {
    setQuizList([...quizList, quizName]);
    setShowModal(false);
  };

  return (
    <ExpandableRow
      expandedRowId={expandedRowId}
      handleChange={handleChange}
      rowId={id}
      rowItems={
        <>
          <StyledTableCell>
            <Stack alignItems='center' direction='row'>
              <Box width='1rem'>
                {graded && <img src={TestResultsIcon} alt='Test results' height='16' width='16' />}
              </Box>
              &nbsp; &nbsp;
              {question}
            </Stack>
          </StyledTableCell>
          <StyledTableCell>{choices?.length}</StyledTableCell>
          <StyledTableCell>{1}</StyledTableCell>
        </>
      }
      expandedComponent={
        <Stack border='1px solid rgba(0, 0, 0, 0.12)' pt={2} pb={2.5} px={6}>
          <Accordion
            expanded={answers}
            onChange={handleQuestionDetailsChange('answers')}
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
                <RadioGroup
                  aria-label='gender'
                  defaultValue='female'
                  name='radio-buttons-group'
                  value={answer === '' ? '' : answer.toLowerCase()}
                >
                  {choices.map((option) => (
                    <FormControlLabel key={option} value={option.toLowerCase()} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={addToQuiz}
            onChange={handleQuestionDetailsChange('addToQuiz')}
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
            expanded={manageTags}
            onChange={handleQuestionDetailsChange('manageTags')}
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
                <TagRow tagList={tagList} handleTagDelete={handleTagDelete} />
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
                  <Button disabled={!newTag} className={classes.nextButton} variant='outlined'>
                    SAVE TAG
                  </Button>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ mt: 3 }} />
          <Stack pt={3} direction='row' width='100%' justifyContent='center' spacing={2.5}>
            <Button
              className={classes.deleteButton}
              color='alert'
              variant='outlined'
              onClick={() => handleDeleteQuestion(id)}
            >
              DELETE QUESTION
            </Button>
            {!isLastQuestion && (
              <Button className={classes.nextButton} onClick={movetoNextQuestion} variant='outlined'>
                NEXT QUESTION
              </Button>
            )}
          </Stack>
        </Stack>
      }
    />
  );
};

export default EachLessonQuestion;

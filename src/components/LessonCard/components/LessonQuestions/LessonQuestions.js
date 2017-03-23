import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CardContent,
  Dialog,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
} from '@mui/material';
import { styled } from '@mui/styles';
import TestResultsIcon from 'assets/Icons/streamline-school-test-results--school-learning--48x48.svg';
import adminService from 'services/admin.service';
import EachLessonQuestion from './components/EachLessonQuestion';
import QuestionFilters from './components/QuestionFilters';
import useStyles from './LessonQuestionStyles';

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

const initialDetailsExpansionState = {
  answers: false,
  addToQuiz: false,
  manageTags: false,
};

const LessonQuestions = function ({ dataProp }) {
  const classes = useStyles();

  const [expandedRowId, setExpandedRowId] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteQuestionId, setDeleteQuestionId] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [questionDetailsExpansions, setQuestionDetailsExpansions] = useState(initialDetailsExpansionState);

  const handleQuestionDetailsChange = (panel) => (event, isExpanded) => {
    setQuestionDetailsExpansions((prev) => ({
      ...prev,
      [panel]: isExpanded || false,
    }));
  };

  const handleCloseModal = () => {
    setOpenDialog(false);
  };

  const handleClickDeleteQuestion = (questionId) => {
    setDeleteQuestionId(questionId);
    setOpenDialog(true);
  };

  const handleChange = (rowId) => {
    setExpandedRowId(rowId === expandedRowId ? false : rowId);
  };

  const deleteQuestion = () => {
    setOpenDialog(false);
    adminService.deleteQuestion(deleteQuestionId).then((response) => {
      setQuestionsData((questionData) => questionData.filter((question) => question.id !== response.id));
    });
  };

  useEffect(() => {
    adminService.getQuestions().then((response) => {
      setQuestionsData(response);
      setMounted(true);
    });
  }, []);

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleCloseModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Box sx={{ padding: '40px', textAlign: 'center', color: 'alert.main' }}>
          <Typography variant='h3'>Are you sure you want to delete this question?</Typography>
          <Stack pt={3} direction='row' width='100%' justifyContent='center' spacing={2.5}>
            <Button className={classes.nextButton} onClick={handleCloseModal} variant='outlined'>
              CANCEL
            </Button>
            <Button className={classes.deleteButton} color='alert' onClick={deleteQuestion} variant='outlined'>
              DELETE
            </Button>
          </Stack>
        </Box>
      </Dialog>
      <CardContent>
        <QuestionFilters dataProp={dataProp} />
        <TableContainer sx={{ padding: '1px' }}>
          <Table className={classes.questionTable} aria-label='customized table'>
            <TableHead className={classes.questionTableHead}>
              <TableRow>
                <StyledTableCell>
                  <Stack alignItems='center' direction='row'>
                    <img
                      src={TestResultsIcon}
                      className={classes.testResultsIcon}
                      alt='Test results'
                      height='16'
                      width='16'
                    />
                    &nbsp;&nbsp; Question
                  </Stack>
                </StyledTableCell>
                <StyledTableCell># of Quizzes</StyledTableCell>
                <StyledTableCell>Difficulty Level</StyledTableCell>
                <StyledTableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {mounted &&
                questionsData.map((question, index) => (
                  <EachLessonQuestion
                    expandedRowId={expandedRowId}
                    handleChange={handleChange}
                    eachQuestion={question}
                    key={question.id}
                    isLastQuestion={index + 1 === questionsData.length}
                    index={index}
                    movetoNextQuestion={() => handleChange(questionsData[index + 1].id)}
                    questionDetailsExpansions={questionDetailsExpansions}
                    handleQuestionDetailsChange={handleQuestionDetailsChange}
                    handleDeleteQuestion={handleClickDeleteQuestion}
                  />
                ))}
            </TableBody>
          </Table>
          {!mounted && (
            <Box className={classes.loadingWrapper}>
              <CircularProgress size='24px' />
            </Box>
          )}
        </TableContainer>
      </CardContent>
    </>
  );
};

export default LessonQuestions;

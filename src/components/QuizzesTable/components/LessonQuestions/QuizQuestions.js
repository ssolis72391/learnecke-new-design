import {
  Button,
  CardContent,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/styles';
import InfoCircleIcon from 'assets/Icons/streamline-information-circle--interface-essential--48x48.svg';
import TestResultsIcon from 'assets/Icons/streamline-school-test-results--school-learning--48x48.svg';
import React from 'react';
import EachQuestion from './components/EachQuestion';
import QuestionFilters from './components/QuestionFilters';
import useStyles from './QuizQuestionStyles';

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

const StyledTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      fontSize: 14,
      fontWeight: 500,
      padding: '0.5rem 0.75rem',
    },
  })
);

const Questions = function ({ dataProp }) {
  const classes = useStyles();

  return (
    <CardContent>
      <QuestionFilters />

      {/* --- body code goes here --- */}
      <Button className={classes.questionName} variant='contained'>
        {dataProp.title}
      </Button>

      <TableContainer>
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
              {/* <StyledTableCell>
                <Stack alignItems="center" direction='row'>
                  Popularity&nbsp;&nbsp;
                  <StyledTooltip
                    arrow
                    placement='top'
                    title='LIKELIHOOD OF A STUDENT SEEING IT'
                  >
                    <img
                      src={InfoCircleIcon}
                      alt='info'
                      height='16'
                      width='16'
                    />
                  </StyledTooltip>
                </Stack>
              </StyledTableCell> */}
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {dataProp.questions.map((question) => (
              <EachQuestion eachQuestion={question} key={question.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );
};

export default Questions;

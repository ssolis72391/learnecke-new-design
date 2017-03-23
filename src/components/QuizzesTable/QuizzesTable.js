import React from 'react';
import { withRouter } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as PencilIcon } from 'assets/Icons/streamline-icon-pencil-contained.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white.primary,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const QuizzesTable = function (props) {
  const { quizzesData, history } = props;
  const handleClickEditQuiz = (id) => {
    history.push(`/admin/quizzes/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Quiz Name</StyledTableCell>
            <StyledTableCell align='left'>Quiz Type</StyledTableCell>
            <StyledTableCell align='left'>Number of Questions</StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {quizzesData.map((quiz, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component='th' scope='row'>
                {quiz.name}
              </StyledTableCell>
              <StyledTableCell align='left'>{quiz.type}</StyledTableCell>
              <StyledTableCell align='left'>{quiz.numbers}</StyledTableCell>
              <StyledTableCell align='left'>
                <IconButton aria-label='expand row' size='small' onClick={() => handleClickEditQuiz(quiz.id)}>
                  <PencilIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withRouter(QuizzesTable);

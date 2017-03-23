import React from 'react';
import { Collapse, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/styles';
import ChevronUpIcon from 'assets/Icons/streamline-arrow-up-1--arrows-diagrams--48x48.svg';
import ChevronDownIcon from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide border
  '& td, & th': {
    border: 0,
  },
}));

const EachLessonQuestion = function ({ rowItems, expandedComponent, expandedRowId, rowId, handleChange }) {
  const isOpen = expandedRowId === rowId;

  return (
    <>
      <StyledTableRow
        sx={{
          border: isOpen ? '1px solid rgba(0, 0, 0, 0.12)' : 0,
        }}
        className='parentRow'
        onClick={() => handleChange(rowId)}
        // onClick={() => setIsOpen(!isOpen)}
      >
        {rowItems}
        <StyledTableCell align='right'>
          <img src={isOpen ? ChevronUpIcon : ChevronDownIcon} alt='Expand' height='16' width='16' />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow />

      <StyledTableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            {expandedComponent}
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
};

export default EachLessonQuestion;

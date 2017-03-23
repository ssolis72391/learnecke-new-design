import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  TableCell,
  tableCellClasses,
  Typography,
} from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { ReactComponent as ChevronDownComponent } from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';
import TestResultsIcon from 'assets/Icons/streamline-school-test-results--school-learning--48x48.svg';
import ExpandableRow from 'components/ExpandableRow';
import useStyles from './EachQuestionStyles';

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

const EachQuestion = function ({ eachQuestion }) {
  const { question, choices, graded } = eachQuestion;
  const classes = useStyles();

  return (
    <ExpandableRow
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
          {/* <StyledTableCell className="popularityText">
          {popularity * 100}%
        </StyledTableCell> */}
        </>
      }
      expandedComponent={
        <Stack border='1px solid rgba(0, 0, 0, 0.12)' pt={2} pb={2.5} px={6}>
          <Accordion className={classes.questionAccordion}>
            <AccordionSummary
              expandIcon={<ChevronDownComponent className={classes.chevronDown} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h4'>Answers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion className={classes.questionAccordion}>
            <AccordionSummary
              expandIcon={
                <ChevronDownComponent className={classes.chevronDown} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='h4'>
                Add To Quiz
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}

          <Accordion className={classes.questionAccordion}>
            <AccordionSummary
              expandIcon={<ChevronDownComponent className={classes.chevronDown} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h4'>{/* Manage */} Tags</Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails> */}
          </Accordion>
          <Divider sx={{ mt: 3 }} />
          <Stack pt={3} direction='row' width='100%' justifyContent='center' spacing={2.5}>
            <Button className={classes.deleteButton} color='error' variant='outlined'>
              DELETE QUESTION
            </Button>
            <Button className={classes.nextButton} variant='outlined'>
              NEXT QUESTION
            </Button>
          </Stack>
        </Stack>
      }
    />
  );
};

export default EachQuestion;

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Grid, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import ArrowUp from 'assets/Icons/streamline-arrow-button-up-2--arrows-diagrams--48x48.svg';
import ArrowDown from 'assets/Icons/streamline-arrow-button-down-2--arrows-diagrams--48x48.svg';
import ChevronUp from 'assets/Icons/streamline-arrow-up-1--arrows-diagrams--48x48.svg';
import ChevronDown from 'assets/Icons/streamline-arrow-down-1--arrows-diagrams--48x48.svg';
import CardMenu from 'assets/Icons/streamline-navigation-menu-vertical--interface-essential--48x48.svg';

import { CardDividerVert, CardDividerHorz } from 'components';

import { QuestionDetail } from './components';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.grey.main,
  flexDirection: 'row-reverse',
  padding: 0,
  '& .MuiAccordionSummary-content': {
    margin: `${theme.spacing(2)} ${theme.spacing(1)}`,
    cursor: 'grab',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const QuestionDnDCard = function () {
  const [expanded, setExpanded] = useState(false);

  const onMoveUp = () => {};

  const onMoveDown = () => {};

  const handleClickExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion expanded={expanded}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Grid item padding='1' sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              item
              padding='1'
              sx={{ display: 'flex', flexDirection: 'column', marginRight: '16px', justifyContent: 'center' }}
            >
              <IconButton disabled={onMoveUp === undefined} onClick={() => onMoveUp()}>
                <img src={ArrowUp} alt='Move Up One Step' height='16' width='16' />
              </IconButton>
              <IconButton disabled={onMoveDown === undefined} onClick={() => onMoveDown()}>
                <img src={ArrowDown} alt='Move Down One Step' height='16' width='16' />
              </IconButton>
            </Grid>
            <CardDividerVert />
          </Grid>
          <Grid item xs='11' sx={{ display: 'flex', flexDirection: 'column', padding: '0px 20px' }}>
            <Typography variant='h5'>Item Type Title</Typography>
            <CardDividerHorz sx={{ mt: 1, mb: 1 }} />
            <Typography variant='bodyXS'>Last edited 10/20/2021</Typography>
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
            <IconButton sx={{ height: 'fit-content', margin: 'auto', marginLeft: '8px' }} onClick={handleClickExpand}>
              {expanded ? (
                <img src={ChevronUp} alt='Open' height='24' width='24' />
              ) : (
                <img src={ChevronDown} alt='Open' height='24' width='24' />
              )}
            </IconButton>
            <IconButton
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              sx={{ height: 'fit-content', margin: 'auto' }}
            >
              <img src={CardMenu} alt='Context Menu' height='24' width='24' />
            </IconButton>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <QuestionDetail />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionDnDCard;

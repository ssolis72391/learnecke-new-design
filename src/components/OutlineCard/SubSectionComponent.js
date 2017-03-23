import React from 'react';
import { Grid, Stack } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import BackIcon from 'assets/Icons/BackIcon';
import TabIcon from 'assets/Icons/TabIcon';

const SubSectionComponent = function ({ subSection, level }) {
  const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <Stack spacing={props.spacing} width='100%' ml={1.5} direction='row' alignItems='center'>
      <TabIcon sx={{ fontSize: 1.5 }} />
      <MuiAccordionSummary expandIcon={<BackIcon sx={{ fontSize: '1rem' }} />} {...props} />
    </Stack>
  ))(({ theme }) => ({
    height: 44,
    padding: 0,
    minHeight: 44,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(0),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
  }));

  const { sectionNum, title, text, subSections } = subSection;

  return (
    <Grid>
      <Accordion>
        <AccordionSummary spacing={level} aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>
            {sectionNum}. {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {text && (
            <Stack
              spacing={level + 3}
              width='100%'
              direction='row'
              borderTop='1px solid rgba(0, 0, 0, 0.12)'
              p={1.5}
              alignItems='center'
            >
              <Stack alignItems='center' justifyContent='center' sx={{ width: '1rem', height: '1rem' }}>
                <TabIcon />
              </Stack>
              <Typography>{text}</Typography>
            </Stack>
          )}
          {subSections.map((subSection) => (
            <SubSectionComponent key={subSection.id} subSection={subSection} level={level + 3} />
          ))}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default SubSectionComponent;

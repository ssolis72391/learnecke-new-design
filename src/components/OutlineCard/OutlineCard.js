import { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Button, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import BackIcon from 'assets/Icons/streamline-arrow-circle-left--arrows-diagrams--48x48.svg';

import LayoutWhiteIcon from 'assets/Icons/streamline-layout-module--white.svg';
import LayoutBlueIcon from 'assets/Icons/streamline-layout-module--blue.svg';

import TaskViewBlueIcon from 'assets/Icons/streamline-task-list-to-do--blue.svg';
import TaskViewWhiteIcon from 'assets/Icons/streamline-task-list-to-do--white.svg';

import Divider from '@mui/material/Divider';
import useStyles from './OutlineCardStyle';
import SubSectionComponent from './SubSectionComponent';
import LessonCardList from './components/LessonCardList';

const exampleLesson = require('utils/TestData/exampleLessonContent.json');

const OutlineCard = function ({ dataProp = exampleLesson }) {
  const classes = useStyles();
  const [parentObject, setParentObject] = useState([]);
  const [, setData] = useState(dataProp);
  const [showLayout, setShowLayout] = useState(false);

  const handleReturnToParent = () => {
    const parentsList = Array.from(parentObject);
    const parent = parentsList.pop();
    setData(parent);
    setParentObject(parentsList);
  };

  return (
    <Card className={classes.lessonCardContainer}>
      <CardHeader
        title={
          <Grid container spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <IconButton onClick={handleReturnToParent}>
                  <img src={BackIcon} alt='Return' height='24' width='24' />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant='h1'>New Lesson</Typography>
              </Grid>
            </Box>
          </Grid>
        }
        action={
          <Box>
            <Grid container spacing={2}>
              <Grid item>
                <Button onClick={() => setShowLayout(true)} variant='contained' className={classes.lessonButton}>
                  <span>Preview</span>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setShowLayout(false)}
                  variant='unstyled'
                  className={classes.tasksButton}
                  sx={{
                    bgcolor: showLayout ? 'white.main' : 'primary.main',
                    '&:hover': {
                      bgcolor: showLayout ? 'white.main' : 'primary.main',
                    },
                  }}
                >
                  <img
                    src={showLayout ? TaskViewBlueIcon : TaskViewWhiteIcon}
                    alt='view off icon'
                    width='16'
                    height='16'
                  />
                </Button>
                <Button
                  onClick={() => setShowLayout(true)}
                  variant='unstyled'
                  sx={{
                    bgcolor: showLayout ? 'primary.main' : 'white.main',
                    '&:hover': {
                      bgcolor: showLayout ? 'primary.main' : 'white.main',
                    },
                  }}
                  className={classes.layoutButton}
                >
                  <img src={showLayout ? LayoutWhiteIcon : LayoutBlueIcon} alt='view icon' width='16' height='16' />
                </Button>
              </Grid>
            </Grid>
          </Box>
        }
      />
      <CardContent>
        {/* --- body code goes here --- */}
        <Typography sx={{ marginBottom: 1 }}>Lesson Name</Typography>
        <Typography variant='h5' sx={{ marginBottom: 1.5 }}>
          Lesson #1
        </Typography>
        <Divider component='hr' />
        <Typography sx={{ marginTop: 1.5 }} variant='bodyXS'>
          Lesson Summary
        </Typography>
        <Typography>
          This is a summary of the lesson. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque
          ipsum nec.
        </Typography>
        <Divider component='hr' />
        {showLayout ? (
          <LessonCardList />
        ) : (
          <div className={classes.lessonCardBody}>
            {dataProp.subSections.map((subSection) => (
              <SubSectionComponent key={subSection.id} subSection={subSection} level={1} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OutlineCard;

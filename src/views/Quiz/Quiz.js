import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, CardContent, Grid, Box, IconButton, Typography, Button } from '@mui/material';

import { Draggable, Droppable, QuestionDnDCard } from 'components';
import { GlobalContext } from 'stores/globalStore';

import BackIcon from 'assets/Icons/streamline-arrow-circle-left--arrows-diagrams--48x48.svg';

import useStyles from './QuizStyles';

const dummyData = require('utils/TestData/exampleQuestionList.json');

const Quiz = function (props) {
  const classes = useStyles();
  const { history, match } = props;
  const { quizId } = match.params;
  const { store, dispatch } = useContext(GlobalContext);
  const { quizzes } = store;
  const [quizData, setQuizData] = useState({
    id: '',
    name: '',
    numbers: 0,
    type: '',
  });

  const questionsArray = dummyData.questions;

  // TODO: prevent Dividers from showing while Items are being dragged

  useEffect(() => {
    setQuizData(quizzes.filter((quiz) => quiz.id === quizId)[0]);
  }, [quizzes]);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <Card className={classes.quizCardContainer}>
      <CardHeader
        title={
          <Grid container spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <IconButton onClick={handleBackClick}>
                  <img src={BackIcon} alt='Return' height='24' width='24' />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant='h1'>{quizData.name}</Typography>
              </Grid>
            </Box>
          </Grid>
        }
        action={
          <Box sx={{ marginTop: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className={classes.editButton} variant='contained'>
                  ADD QUESTIONS
                </Button>
              </Grid>
            </Grid>
          </Box>
        }
      />
      <CardContent>
        <Box marginTop='15px' component={Droppable(() => {})}>
          {questionsArray.map((item, index) => (
            <Box
              component={Draggable(item.id, index, /* handleDrag = */ () => {})}
              key={item.id}
              sx={{
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                mb: 2.5,
              }}
            >
              {(isDragging) => <QuestionDnDCard isDragging={isDragging} />}
            </Box>
          ))}
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems='center' justifyContent='center'>
            <Grid item>
              <Button className={classes.editButton} variant='outlined'>
                CANCEL
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.editButton} variant='contained'>
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default withRouter(Quiz);

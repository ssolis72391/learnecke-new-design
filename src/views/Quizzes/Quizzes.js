import React, { useState, useContext, useEffect } from 'react';
import {
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  Typography,
  Button,
  CardContent,
  MenuItem,
  Select,
  Link,
} from '@mui/material';
import { GlobalContext } from 'stores/globalStore';
import { CreateNewQuizModal, QuizzesTable } from 'components';
import { ReactComponent as EmptyQuizzesIcon } from 'assets/Icons/streamline-empty-quizzes.svg';
import useStyles from './QuizzesStyles';

const EmptyState = function ({ onClick }) {
  const classes = useStyles();
  return (
    <Grid align='center' justifyContent='center' direction='column' container sx={{ height: '100%' }}>
      <Typography variant='h3' align='center' className={classes.emptyStateText}>
        There’s nothing here yet.{' '}
        <Link
          className={classes.link}
          underline='hover'
          sx={{ fontSize: 24 }}
          component='button'
          onClick={onClick}
          variant='text'
        >
          Add a new quiz now.
        </Link>
      </Typography>
      <EmptyQuizzesIcon className={classes.emptyQuizzesIcon} />
    </Grid>
  );
};

const Quizzes = function () {
  const classes = useStyles();
  const [filterCourse, setFilterCourse] = useState('');
  const [filterLesson, setFilterLesson] = useState('');
  const [filterQuiz, setFilterQuiz] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [quizzesData, setQuizzesData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const { store, dispatch } = useContext(GlobalContext);
  const { quizzes } = store;

  const handleShowModal = (isShow) => {
    setShowModal(isShow);
  };

  const handleNewQuiz = (event) => {
    handleShowModal(true);
  };

  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };

  const handleChangeFilterLesson = (event) => {
    setFilterLesson(event.target.value);
  };

  const handleChangeFilterQuiz = (event) => {
    setFilterQuiz(event.target.value);
  };

  const handleChangeFilterTag = (event) => {
    setFilterTag(event.target.value);
  };

  const generateId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSaveQuiz = (quizName, quizType, questionNumber) => {
    dispatch({
      type: 'updateQuizzes',
      quiz: {
        id: generateId(24),
        name: quizName,
        type: quizType,
        numbers: questionNumber,
      },
    });
    handleShowModal(false);
  };

  useEffect(() => {
    console.log(store, '--------- store data --------');
  }, [store]);

  return (
    <>
      <CreateNewQuizModal show={showModal} handleShowModal={handleShowModal} handleSaveQuiz={handleSaveQuiz} />
      <Card className={classes.root}>
        <CardHeader
          title={
            <>
              <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                  <Typography variant='h1'>Quizzes</Typography>
                </Grid>
                <Grid item>
                  <Grid item>
                    <Button
                      sx={{ fontSize: '0.875rem' }}
                      onClick={() => handleNewQuiz()}
                      size='medium'
                      variant='contained'
                    >
                      ADD NEW QUIZ
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent='space-between' marginTop='20px'>
                <Grid item>
                  <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id='demo-simple-select-standard-label'>Filter Course</InputLabel>
                    <Select
                      labelId='demo-simple-select-standard-label'
                      id='demo-simple-select-standard'
                      value={filterCourse}
                      onChange={handleChangeFilterCourse}
                      label='Filter Course'
                    >
                      <MenuItem value='sunrise'>Sunrise</MenuItem>
                      <MenuItem value='165th Airlift Wing'>165th Airlift Wing</MenuItem>
                      <MenuItem value='Georgia National Guard'>Georgia National Guard</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id='demo-simple-select-standard-label'>Filter Lesson</InputLabel>
                    <Select
                      labelId='demo-simple-select-standard-label'
                      id='demo-simple-select-standard'
                      value={filterLesson}
                      onChange={handleChangeFilterLesson}
                      label='Filter Lesson'
                    >
                      <MenuItem value='sunrise'>Sunrise</MenuItem>
                      <MenuItem value='165th Airlift Wing'>165th Airlift Wing</MenuItem>
                      <MenuItem value='Georgia National Guard'>Georgia National Guard</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id='demo-simple-select-standard-label'>Filter Quiz Type</InputLabel>
                    <Select
                      labelId='demo-simple-select-standard-label'
                      id='demo-simple-select-standard'
                      value={filterQuiz}
                      onChange={handleChangeFilterQuiz}
                      label='Filter Quiz Type'
                    >
                      <MenuItem value='sunrise'>sunrise</MenuItem>
                      <MenuItem value='165th Airlift Wing'>165th Airlift Wing</MenuItem>
                      <MenuItem value='Georgia National Guard'>Georgia National Guard</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id='demo-simple-select-standard-label'>Filter More Tags</InputLabel>
                    <Select
                      labelId='demo-simple-select-standard-label'
                      id='demo-simple-select-standard'
                      value={filterTag}
                      onChange={handleChangeFilterTag}
                      label='Select Tags'
                    >
                      <MenuItem value='sunrise'>sunrise</MenuItem>
                      <MenuItem value='165th Airlift Wing'>165th Airlift Wing</MenuItem>
                      <MenuItem value='Georgia National Guard'>Georgia National Guard</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          }
        />
        {quizzes.length ? (
          <CardContent>
            <QuizzesTable quizzesData={quizzes} />
          </CardContent>
        ) : (
          <CardContent sx={{ height: 'calc(100vh - 316px)' }}>
            <EmptyState onClick={() => handleNewQuiz()} />
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default Quizzes;

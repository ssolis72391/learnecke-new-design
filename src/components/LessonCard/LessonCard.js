import React, { useState, useRef } from 'react';
import { Box, Card, CardHeader, Button, Grid, CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';

import { HighlightToolbar, GenerateQuestionModal } from 'components';

import BackIcon from 'assets/Icons/streamline-arrow-circle-left--arrows-diagrams--48x48.svg';
import ViewOffIcon from 'assets/Icons/streamline-view-off--interface-essential--48x48.svg';
import ViewIcon from 'assets/Icons/streamline-view-1--interface-essential--48x48.svg';
import QuestionIcon from 'assets/Icons/streamline-question-circle--interface-essential--48x48.svg';

import adminService from 'services/admin.service';
import useStyles from './LessonCardStyles';

import LessonContent from './components/LessonContent';
import LessonQuestions from './components/LessonQuestions';

import 'react-toastify/dist/ReactToastify.css';

const exampleLesson = require('utils/TestData/exampleCourse.json');

const LessonCard = function ({ dataProp = exampleLesson }) {
  const classes = useStyles();
  const [parentObject, setParentObject] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [questionData, setQuestionData] = useState({
    answer: '',
    choices: [],
    points: null,
    question: '',
    reference: null,
    tags: [],
    type: null,
  });
  const [, setData] = useState(dataProp);
  const [highlight, setHighlight] = useState('');
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [saveAndregenerating, setSaveAndRegenerating] = useState(false);
  const [saveAndClose, setSaveAndClose] = useState(false);
  const popOverTextParagraphRef = useRef(null);

  const handleReturnToParent = () => {
    const parentsList = Array.from(parentObject);
    const parent = parentsList.pop();
    setData(parent);
    setParentObject(parentsList);
  };

  const handleClickTooltip = (highlightText) => {
    setHighlight(highlightText);
    setLoading(true);
    adminService
      .generateQuestions(highlightText)
      .then((res) => {
        setQuestionData(res[0]);
        setLoading(false);
        setShowModal(true);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const handleRegenerateQuestion = () => {
    setRegenerating(true);
    adminService
      .generateQuestions(highlight)
      .then((res) => {
        setQuestionData(res[0]);
        setRegenerating(false);
      })
      .catch((e) => {
        setRegenerating(false);
      });
  };

  const handleShowModal = (isShow) => {
    setShowModal(isShow);
  };

  const handleRegenerateAndSaveQuestion = () => {
    setSaveAndRegenerating(true);
    const saveData = {
      ...questionData,
      tags: [dataProp.title, ...questionData.tags],
    };
    adminService.saveQuestions(saveData, '53').then((res) => {
      adminService
        .generateQuestions(highlight)
        .then((res) => {
          setQuestionData(res[0]);
          setSaveAndRegenerating(false);
          toast.success('Question Saved Successfully', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((e) => {});
    });
  };

  const handleSaveAndClose = () => {
    setSaveAndClose(true);
    const saveData = {
      ...questionData,
      tags: [dataProp.title, ...questionData.tags],
    };
    adminService.saveQuestions(saveData, '53').then((res) => {
      setSaveAndClose(false);
      setShowModal(false);
      toast.success('Question Saved Successfully', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  const handleTagDelete = (tagToDelete) => {
    setQuestionData((questionData) => ({
      ...questionData,
      tags: questionData.tags.filter((tag) => tag !== tagToDelete),
    }));
  };

  const handleAddNewTag = (newTag) => {
    setQuestionData((questionData) => ({
      ...questionData,
      tags: [...questionData.tags, newTag],
    }));
  };

  return (
    <>
      <GenerateQuestionModal
        show={showModal}
        handleShowModal={handleShowModal}
        handleRegenerateQuestion={handleRegenerateQuestion}
        handleRegenerateAndSaveQuestion={handleRegenerateAndSaveQuestion}
        handleSaveAndClose={handleSaveAndClose}
        handleTagDelete={handleTagDelete}
        handleAddNewTag={handleAddNewTag}
        questionData={questionData}
        regenerating={regenerating}
        saveAndregenerating={saveAndregenerating}
        saveAndClose={saveAndClose}
        title={dataProp.title}
      />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HighlightToolbar ref={popOverTextParagraphRef} handleClickTooltip={handleClickTooltip} loading={loading} />
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            margin: 'auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            zIndex: 1,
          }}
        >
          <CircularProgress size='6rem' />
        </Box>
      )}
      <Card className={classes.lessonCardContainer}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Grid container spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item>
                  <IconButton onClick={handleReturnToParent}>
                    <img src={BackIcon} alt='Return' height='24' width='24' />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant='h1'>{dataProp.title}</Typography>
                </Grid>
              </Box>
            </Grid>
          }
          action={
            <Box sx={{ marginTop: 1 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    onClick={() => setShowQuestions(true)}
                    variant={showQuestions ? 'contained' : 'outlined'}
                    className={classes.questionButton}
                  >
                    <img src={showQuestions ? ViewIcon : ViewOffIcon} alt='view off icon' width='16' height='16' />
                    <span className={classes.iconButtonText}>QUESTIONS</span>
                  </Button>
                  <Button
                    onClick={() => setShowQuestions(false)}
                    variant={showQuestions ? 'outlined' : 'contained'}
                    className={classes.lessonButton}
                  >
                    <img src={showQuestions ? ViewOffIcon : ViewIcon} alt='view icon' width='16' height='16' />
                    <span className={classes.iconButtonText}>LESSON</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.questionIconButton} disabled={showQuestions} variant='outlined'>
                    <img src={QuestionIcon} alt='question icon' width='24' height='24' />
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.editButton} disabled={showQuestions} variant='contained'>
                    EDIT LESSON
                  </Button>
                </Grid>
              </Grid>
            </Box>
          }
        />
        {showQuestions ? (
          <LessonQuestions dataProp={dataProp} />
        ) : (
          <LessonContent dataProp={dataProp} ref={popOverTextParagraphRef} />
        )}
      </Card>
    </>
  );
};

export default LessonCard;

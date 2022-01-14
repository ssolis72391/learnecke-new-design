import React from 'react';
import { Stepbar, LessonCard } from 'components';
import useStyles from './LessonsStyles';

const Lessons = function () {
  const classes = useStyles();
  return (
    <>
      {/* <div className={classes.stepbar}>
        <Stepbar />
      </div> */}
      <LessonCard />
    </>
  );
};

export default Lessons;

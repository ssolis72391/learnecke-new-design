import React from 'react';
import { Stepbar, NewCourse } from 'components';
import useStyles from './CreateCourseStyles';

const CreateCourse = function () {
  const classes = useStyles();
  return (
    <>
      <div className={classes.stepbar}>
        <Stepbar />
      </div>
      <NewCourse />
    </>
  );
};

export default CreateCourse;

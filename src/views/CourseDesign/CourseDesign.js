import React from 'react';
import { Stepbar, DesignCard } from 'components';
import useStyles from './CourseDesignStyles';

const CourseDesign = function (props) {
  const classes = useStyles();
  console.log({ props });
  return (
    <>
      <div className={classes.stepbar}>
        <Stepbar />
      </div>
      <DesignCard index={parseInt(props.location.search.split('=')[1])} />
    </>
  );
};

export default CourseDesign;

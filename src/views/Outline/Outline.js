import React from 'react';
import { Stepbar, OutlineCard } from 'components';
import useStyles from './OutlineStyles';

const Outline = function () {
  const classes = useStyles();
  return (
    <>
      <div className={classes.stepbar}>
        <Stepbar />
      </div>
      <OutlineCard />
    </>
  );
};

export default Outline;

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import { ReactComponent as CheckIcon } from 'assets/Icons/streamline-check-circle-1--interface-essential--48x48.svg';

import { GlobalContext } from 'stores/globalStore';
import useStyles from './StepbarStyles';

const STEP_LIST = [
  { textStyle: { marginLeft: -30 }, label: 'Create Course', iconStyle: { marginLeft: 34 } },
  { textStyle: { marginLeft: -44 }, label: 'Manage Outline' },
  { textStyle: { marginLeft: -46 }, label: 'Generate Questions' },
  { textStyle: { marginLeft: -34 }, label: 'Create Lessons' },
  { textStyle: { marginLeft: -42 }, label: 'Populate Content' },
  { textStyle: { marginLeft: -34 }, label: 'Create Quiz(zes)' },
  { textStyle: { marginLeft: -24 }, label: 'Final Review' },
  { textStyle: { marginLeft: -52 }, label: 'Request Approval' },
];

const Stepbar = function () {
  const classes = useStyles();
  const history = useHistory();
  /// ////////// start test code for global context

  const { store } = useContext(GlobalContext);
  const { completedSteps, activeStep } = store;
  return (
    <Card sx={{ minWidth: 275 }} className={classes.container}>
      {STEP_LIST.map(({ iconStyle, textStyle, label }, index) => (
        <div key={index} style={iconStyle}>
          <div className={classes.subStep}>
            {completedSteps[index] ? (
              <>
                <CheckIcon alt='stepIcon' className={classes.subStepImageIcon} />
                <div className={classes.subActiveStepBar} />
              </>
            ) : (
              <>
                <div className={activeStep === index ? classes.subActiveStepTextIcon : classes.subDisableStepTextIcon}>
                  {index + 1}
                </div>
                {index + 1 < STEP_LIST.length && <div className={classes.subDisableStepBar} />}
              </>
            )}
          </div>
          <span style={textStyle} className={classes.subActiveStepText}>
            {label}
          </span>
        </div>
      ))}
    </Card>
  );
};

export default Stepbar;

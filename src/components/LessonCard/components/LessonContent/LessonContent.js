import React, { forwardRef } from 'react';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import useStyles from '../../LessonCardStyles';

const SubSectionComponent = function ({ sectionNumber, title, text, subSectionArray }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h6' gutterBottom>
        {sectionNumber}. {title}
      </Typography>
      <Typography gutterBottom>{text}</Typography>
      {subSectionArray?.map((subSection) => (
        <div key={subSection.id} className={classes.subSection}>
          <SubSectionComponent
            sectionNumber={subSection.sectionNum}
            title={subSection.sectionNum.split('.').length > 1 ? '' : subSection.title}
            text={subSection.text}
            subSectionArray={subSection.subSections}
          />
        </div>
      ))}
    </div>
  );
};

const LessonContent = forwardRef(({ dataProp }, ref) => {
  const classes = useStyles();
  return (
    <CardContent>
      {/* --- body code goes here --- */}
      <Typography sx={{ marginBottom: 5 }}>{dataProp.description}</Typography>
      <div ref={ref} className={classes.lessonCardBody}>
        {dataProp.subSections.map((subsection) => (
          <SubSectionComponent
            key={subsection.id}
            sectionNumber={subsection.sectionNum}
            title={subsection.title}
            text={subsection.text}
            subSectionArray={subsection.subSections}
          />
        ))}
      </div>
    </CardContent>
  );
});

export default LessonContent;

import React from 'react';
import { Button, Chip, Grid, Stack } from '@mui/material';
import useStyles from './TagRowStyles';

const TagRow = function ({ title, tagList, handleTagDelete }) {
  const classes = useStyles();

  return (
    <Stack direction='row' mt='1.26rem' mb='1.75rem' spacing={1}>
      <Grid rowGap={1} columnGap={1} width='100%' container spacing={1}>
        {title && (
          <Grid item>
            <Button className={classes.questionLessonName} variant='contained'>
              {title}
            </Button>
          </Grid>
        )}
        {tagList?.map((tag) => (
          <Grid item>
            <Chip className={classes.chip} label={tag} variant='outlined' onDelete={() => handleTagDelete(tag)} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TagRow;

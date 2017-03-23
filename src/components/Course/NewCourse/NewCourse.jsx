import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Fade,
  Box,
  TextField,
} from '@mui/material';

import { Structures } from 'structures/structures';

import useStyles from './NewCourseStyles';

const NEW_COURSE_DATA = { name: '', summary: '', level: '' };

const COURSE_LEVELS = ['Novice', 'Journeyman', 'Master'];

const NewCourse = function ({ dataProp }) {
  const classes = useStyles();
  // const [parentObject, setParentObject] = useState([])
  const [data, updateData] = useState(dataProp || NEW_COURSE_DATA);
  const [level, setLevel] = useState(data.level || '');
  const [edit, toggelEditing] = useState(data.editing !== undefined ? data.editing : true);
  const [title, setTitle] = useState(data.title || '');
  const [summary, setSummary] = useState(data.summary || '');
  const courseLevels = Structures[data.itemType || 'Course'].subItemTypes;

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Typography variant='h1'>New Course</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justifyContent='space-between' alignItems='flex-end'>
                <Grid item />
                <Grid item>
                  <Button
                    sx={{ fontSize: '0.875rem' }}
                    onClick={() => alert('UPLOAD CONTENT FILE')}
                    size='medium'
                    variant='contained'
                  >
                    Upload Content File
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      />

      <CardContent>
        {/* --- body code goes here --- */}
        <Box className={classes.courseCardDetailsArea}>
          <TextField
            className={classes.courseCardDetails}
            disabled={!edit}
            label='Course Name'
            type='text'
            value={title}
            fullWidth
            variant='standard'
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            className={classes.courseCardDetails}
            multiline
            disabled={!edit}
            label='Course Summary'
            type='text'
            value={summary}
            fullWidth
            variant='standard'
            onChange={(e) => setSummary(e.target.value)}
          />
          <TextField
            className={classes.courseCardDetails}
            select
            label='Course Level'
            type='text'
            value={level}
            fullWidth
            variant='standard'
            onChange={(e) => {
              updateData({ ...data, level: e.target.value });
              // setUpdatedItemType(true)
            }}
            // onBlur works for select input but not for typed input
            // onBlur={() => handleChange({index: index, name: 'itemType', value: data.itemType})}
          >
            {COURSE_LEVELS.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <div className={classes.lessonCardBody}>
          <Box component='div' className={classes.root} />
        </div>
      </CardContent>
    </Card>
  );
};

export default NewCourse;

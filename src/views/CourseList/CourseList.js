import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
  Link,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';

import { ReactComponent as FilterIcon } from 'assets/Icons/streamline-filter-1--interface-essential--48x48.svg';
import { ReactComponent as CogIcon } from 'assets/Icons/streamline-cog--interface-essential--48x48.svg';

import { clampText } from 'utils/utils';

import { GlobalContext } from 'stores/globalStore';
import { NewCourseModal } from './components';
import useStyles from './CourseListStyles';

/// //////// start test code for global context
/// //////// end test code for global context

const dummyData = require('../../utils/TestData/exampleCoursesList.json');

const NEW_COURSE_INIT = { itemType: 'Course', status: 'Draft' };

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
          Add a new course now.
        </Link>
      </Typography>
    </Grid>
  );
};

const CourseList = function () {
  const history = useHistory();
  /// ////////// start test code for global context

  const { store, dispatch } = useContext(GlobalContext);
  const { courses } = store;
  // Get global courses data state when page is loading
  useEffect(() => {
    console.log(courses, '----------- courses data global state --------');
  }, []);
  /// ////////// end test code for global context

  const classes = useStyles();
  const [viewModal, toggelViewModal] = useState(false);
  const [courseList, setCourseList] = useState(courses || []);
  const [searchParam, setSearchParam] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = (e) => {
    setAnchorEl(null);
    // alert(e.currentTarget.innerText);
  };

  const filterCourses = (param) => {
    if (param) {
      const filteredCourses = courses.filter((course) => course.title.includes(param));
      setCourseList(filteredCourses);
    } else {
      setCourseList(courses);
    }
  };

  const handleNewCourse = (buttonId, result) => {
    if (buttonId !== 'Upload' && buttonId !== 'Scratch') {
      toggelViewModal(false);
      return;
    }
    console.log({ result });
    let tempCourse = NEW_COURSE_INIT;
    if (buttonId === 'Upload' && result) {
      const { courseContent } = result;
      const { sections } = courseContent;
      alert(`added result it has ${sections.lenght} subsections`);
      tempCourse = { ...tempCourse, title: result.filename, subSections: sections };
    }
    if (courseList && courseList.lenght && courseList.length > 0) {
      setCourseList([...courseList, tempCourse]);
    } else {
      setCourseList([tempCourse]);
    }

    dispatch({ type: 'addCourse', course: tempCourse });
    toggelViewModal(false);
  };

  useEffect(() => {
    filterCourses(searchParam);
  }, [searchParam]);

  useEffect(() => {
    // alert(`${viewModal}`)
  }, [viewModal]);

  const handleCourseCardDblClick = (index) => {
    dispatch({ type: 'setActiveCourse', activeCourse: courseList[index] });
    history.push({
      pathname: '/admin/course-design',
      search: `?index=${index}`,
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Typography variant='h1'>Courses</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justifyContent='space-between' alignItems='flex-end'>
                <Grid item>
                  <FormControl variant='standard'>
                    <InputLabel sx={{ fontSize: '0.875rem' }} htmlFor='course-search-field'>
                      Filter Courses By Status
                    </InputLabel>
                    <Input
                      id='course-search-field'
                      type='text'
                      value={searchParam}
                      onChange={(e) => setSearchParam(e.target.value)}
                      endAdornment={<FilterIcon className={classes.endAdornment} />}
                      variant='standard'
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button
                    sx={{ fontSize: '0.875rem' }}
                    onClick={() => toggelViewModal(!viewModal)}
                    size='medium'
                    variant='contained'
                    color='primary'
                  >
                    Add New Course
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      />

      <CardContent sx={{ height: 'calc(100vh - 240px)' }}>
        {!courseList || courseList.length === 0 ? (
          // <EmptyState onClick={() => handleNewCourse()} />
          <EmptyState onClick={() => toggelViewModal(!viewModal)} />
        ) : (
          <Grid container spacing={3}>
            {courseList.map((course, index) => (
              <Grid sx={{ position: 'relative' }} key={`course-${index}`} item sm={12} md={4} lg={3}>
                <Card
                  component='div'
                  onDoubleClick={() => {
                    handleCourseCardDblClick(index);
                  }}
                  className={classes.card}
                >
                  <Button
                    className={classes.contextButton}
                    id={`cog_${index}`}
                    aria-controls={`contextMenu-${index}`}
                    aria-haspopup='true'
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <CogIcon className={classes.cogIcon} />
                  </Button>
                  <Menu
                    id={`contextMenu-${index}`}
                    MenuListProps={{
                      'aria-labelledby': `cog_${index}`,
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 130,
                    }}
                    className={classes.contextMenu}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                    <MenuItem onClick={handleClose}>Submit for Approval</MenuItem>
                  </Menu>
                  <CardMedia
                    component='img'
                    alt={course.title}
                    image='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  />
                  <CardContent>
                    <Typography pt={1} variant='h3'>
                      {course.title}
                      <Typography variant='h5' fontStyle='italic' color='green'>
                        {course.status}
                      </Typography>
                    </Typography>
                    <Typography className={classes.courseDescription} marginTop='16px' variant='body'>
                      {clampText(course.description, 15)}
                    </Typography>

                    <Typography variant='h6' marginTop='16px' textAlign='right'>
                      {course.level}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
      <NewCourseModal show={viewModal} handleShowModal={handleNewCourse} />
    </Card>
  );
};

export default CourseList;

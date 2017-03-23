import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoIcon from 'assets/Icons/streamline-logo.png';
import LogoCutIcon from 'assets/Icons/streamline-logo-cut.png';
import HomeIcon from 'assets/Icons/streamline-house-chimney-1--interface-essential--48x48.svg';
import StudentsIcon from 'assets/Icons/streamline-multiple-neutral-1--users--48x48.svg';
import StudentsWhiteIcon from 'assets/Icons/streamline-multiple-neutral-1--users--white--48x48.svg';
import TrainingMangementIcon from 'assets/Icons/streamline-single-neutral-actions-check-1--users--48x48.svg';
import LeadershipIcon from 'assets/Icons/streamline-army-badge-1--crime-war-protection--48x48.svg';
import EnrollmentIcon from 'assets/Icons/streamline-single-neutral-actions-add--users--48x48.svg';
import EnrollmentWhiteIcon from 'assets/Icons/streamline-single-neutral-actions-add--users--white--48x48.svg';
import CourseIcon from 'assets/Icons/streamline-calendar-school--interface-essential--48x48.svg';
import CourseWhiteIcon from 'assets/Icons/streamline-calendar-school--interface-essential--white--48x48.svg';
import ArticleIcon from 'assets/Icons/streamline-bookmarks-document-alternate--interface-essential--48x48.svg';
import QuizzesIcon from 'assets/Icons/streamline-task-list-text-1--work-office-companies--48x48.svg';
import QuizzesWhiteIcon from 'assets/Icons/streamline-task-list-text-1--work-office-companies--white--48x48.svg';
import AccountIcon from 'assets/Icons/streamline-single-neutral-actions-setting--users--48x48.svg';
import LogoutWhiteIcon from 'assets/Icons/streamline-logout-2--interface-essential--white--48x48.svg';

import useStyles from './AdminSidebarStyles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const AdminSidebar = function (props) {
  const { open, handleDrawerClose, handleDrawerOpen, history } = props;

  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;

  const handleClickNav = (link) => {
    history.push(`/admin/${link}`);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Drawer variant='permanent' open={open} className={classes.sidebar}>
      <DrawerHeader className={classes.headSidebar}>
        {open ? (
          <>
            <img src={LogoIcon} alt='logo' className={classes.logoImage} />
            <IconButton className={classes.headSidebarArrowButton} onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={() => handleClickNav('homepage')}>
              <img src={LogoCutIcon} alt='logocut' className={classes.logoCutImage} />
            </IconButton>
            <IconButton className={classes.headSidebarArrowButton} onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </DrawerHeader>
      {/* <List className={pathname.includes('homepage') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key={'home'}
          onClick={() => handleClickNav('homepage')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img src={HomeIcon} alt='home' className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <Divider /> */}
      {/* <Drawer variant='permanent'> */}
      {/* <DrawerHeader> */}
      <List className={pathname.includes('analytics') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key='analytics'
          // onClick={() => handleClickNav('analyitics')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('analytics') ? StudentsIcon : StudentsWhiteIcon}
              alt='analytics'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Analytics' />
        </ListItem>
      </List>
      {/* </DrawerHeader> */}
      <List className={pathname.includes('student-peformance') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key='student peformance'
          // onClick={() => handleClickNav('student-peformance')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('student-peformance') ? StudentsIcon : StudentsWhiteIcon}
              alt='student peformance'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Student Performance' />
        </ListItem>
      </List>
      <List className={pathname.includes('course-peformance') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key='course peformance'
          // onClick={() => handleClickNav('course-peformance')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('course-peformance') ? StudentsIcon : StudentsWhiteIcon}
              alt='course peformance'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Course Performance' />
        </ListItem>
      </List>
      {/* </Drawer> */}
      <Divider />
      <List className={pathname.includes('manage-students') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key='manage-students'
          // onClick={() => handleClickNav('manage-students')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('manage-students') ? StudentsIcon : StudentsWhiteIcon}
              alt='manage-students'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Manage Students' />
        </ListItem>
      </List>
      <List className={pathname.includes('enrollment') ? classes.active : classes.nonActive}>
        <ListItem button key='enrollment'>
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('enrollment') ? EnrollmentIcon : EnrollmentWhiteIcon}
              alt='enrollment'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Enrollments' />
        </ListItem>
      </List>
      <List className={pathname.includes('grades') ? classes.active : classes.nonActive}>
        <ListItem button key='Grades'>
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('grades') ? EnrollmentIcon : EnrollmentWhiteIcon}
              alt='Grades'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Grades' />
        </ListItem>
      </List>
      <Divider />
      <List className={pathname.includes('courses') ? classes.active : classes.nonActive}>
        <ListItem button key='courses' onClick={() => handleClickNav('courses')}>
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('courses') ? CourseIcon : CourseWhiteIcon}
              alt='manage-courses'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Manage Courses' />
        </ListItem>
      </List>
      <List className={pathname.includes('content') ? classes.active : classes.nonActive}>
        <ListItem
          button
          key='content'
          // onClick={() => handleClickNav('content')}
        >
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('content') ? CourseIcon : CourseWhiteIcon}
              alt='content'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Content' />
        </ListItem>
      </List>
      <List className={pathname.includes('lessons') ? classes.active : classes.nonActive}>
        <ListItem button key='lessons' onClick={() => handleClickNav('lessons')}>
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('lessons') ? CourseIcon : CourseWhiteIcon}
              alt='lessons'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Lessons' />
        </ListItem>
      </List>
      <List className={pathname.includes('quizzes') ? classes.active : classes.nonActive}>
        <ListItem button key='quizzes' onClick={() => handleClickNav('quizzes')}>
          <ListItemIcon className={classes.itemIcon}>
            <img
              src={pathname.includes('quizzes') ? QuizzesIcon : QuizzesWhiteIcon}
              alt='quizzes'
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText primary='Quizzes (AI)' />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.nonActive}>
        <ListItem button key='logout' onClick={handleLogout}>
          <ListItemIcon className={classes.itemIcon}>
            <img src={LogoutWhiteIcon} alt='logout' className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withRouter(AdminSidebar);

import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UploadButtons from 'utils/uploadTest';
import StudentLayout from 'components/Layouts/StudentLayout';
import { RouteWithLayout, AdminLayout } from './components';
import {
  Login as LoginView,
  Home as HomeView,
  CourseList as CourseListView,
  CourseDesign as CourseDesignView,
  Lessons as LessonsView,
  Outline as OutlineView,
  CreateCourse as CreateCourseView,
  Quizzes as QuizzesView,
  Quiz as QuizView,
  StudentDashboard as StudentDashboardView,
} from './views';

const StudentDashboard = function () {
  return <div />;
};

const Routes = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/admin/homepage' />
        <RouteWithLayout component={HomeView} exact layout={AdminLayout} path='/admin/homepage' />
        <RouteWithLayout component={HomeView} exact layout={AdminLayout} path='/admin/students' />
        <RouteWithLayout component={CourseDesignView} layout={AdminLayout} path='/admin/course-design' />
        <RouteWithLayout component={CourseListView} layout={AdminLayout} path='/admin/courses' />
        <RouteWithLayout component={LessonsView} layout={AdminLayout} path='/admin/lessons' />
        <RouteWithLayout component={OutlineView} layout={AdminLayout} path='/admin/outline' />
        <RouteWithLayout component={CreateCourseView} layout={AdminLayout} path='/admin/new-course' />
        <RouteWithLayout component={UploadButtons} layout={AdminLayout} path='/admin/upload-test' />
        <RouteWithLayout component={QuizzesView} exact layout={AdminLayout} path='/admin/quizzes' />
        <RouteWithLayout component={QuizView} exact layout={AdminLayout} path='/admin/quizzes/:quizId' />
        <RouteWithLayout
          showNav={false}
          component={StudentDashboardView}
          layout={StudentLayout}
          path='/student/dashboard'
        />
        <Route path='/login' exact>
          <LoginView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

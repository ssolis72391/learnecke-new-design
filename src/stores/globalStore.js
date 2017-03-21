import { createContext } from 'react';

const dummyData = require('utils/TestData/exampleCoursesList.json');

export const initialState = {
  courses: dummyData.courses,
  completedSteps: [false, false, false, false, false, false, false, false],
  activeStep: 0,
  quizzes: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;

    case 'updateCourses':
      return {
        ...state,
        courses: action.courses,
      };

    case 'addCourse':
      // (action.type)
      return {
        ...state,
        courses: [...state.courses, action.course],
      };
    case 'updateQuizzes':
      return {
        ...state,
        quizzes: [...state.quizzes, action.quiz],
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

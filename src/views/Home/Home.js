import React, { useEffect, useContext } from 'react';
/// //////// start test code for global context
import { GlobalContext } from 'stores/globalStore';
/// //////// end test code for global context

const Home = function () {
  /// //////// start test code for global context

  const { store, dispatch } = useContext(GlobalContext);
  // Update global courses data state when page is loading
  useEffect(() => {
    dispatch({
      type: 'updateCourses',
      coursesData: [
        {
          id: 1,
          courseName: 'course 1',
        },
        {
          id: 2,
          courseName: 'course 2',
        },
        {
          id: 3,
          courseName: 'course 3',
        },
      ],
    });
  }, []);
  /// //////// end test code for global context
  return <>this is homepage</>;
};

export default Home;

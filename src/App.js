import './App.css';
import { useReducer } from 'react';
import { createBrowserHistory } from 'history';
import { initialState, GlobalContext, reducer } from 'stores/globalStore';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from 'styles/GlobalStyles';
import { Router } from 'react-router-dom';
import theme from './theme';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

const App = function () {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;

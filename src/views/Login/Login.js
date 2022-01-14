import React, { useState } from 'react';
import { Box, Typography, Button, Link, CircularProgress } from '@mui/material';
import { useInput } from '@mui/core';
import { styled } from '@mui/system';
import { ReactComponent as LogoIcon } from 'assets/Icons/streamline-logo.svg';
import LoginBackgroundGreenIcon from 'assets/Icons/streamline-login-background-green.png';
import authService from 'services/auth.service';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useStyles from './LoginStyles';

import 'react-toastify/dist/ReactToastify.css';

const StyledInputElement = styled('input')`
  width: 100%;
  max-width: 500px;
  margin-top: 60px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 2em;
  background: ${(props) => props.theme.palette.background.default};
  border: 1px solid ${(props) => props.theme.palette.background.default};
  border-radius: 2px;
  padding: 6px 10px;
  transition: width 300ms ease;

  &:hover {
    background: ${(props) => props.theme.palette.background.white};
    border-color: ${(props) => props.theme.palette.background.white};
  }

  &:focus {
    outline: none;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef((props, ref) => {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()} style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

const Login = function (props) {
  const { history } = props;
  const classes = useStyles();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFormState = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await authService
      .login(formState.email, formState.password)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token);
        setIsLoading(false);
        history.push('/admin/courses');
      })
      .catch((e) => {
        setFormState({
          ...formState,
          email: '',
          password: '',
        });
        toast.error('Invalid email or password', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setIsLoading(false);
      });
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box sx={{ position: 'fixed', right: '0px', zIndex: -1 }}>
        <img src={LoginBackgroundGreenIcon} alt='logo back' style={{ width: '65vw', height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', top: '60px', left: '60px' }}>
        <LogoIcon style={{ width: '50vw', height: '20vh' }} />
      </Box>
      <form>
        <Box
          sx={{
            height: '100vh',
            width: '60vw',
            marginLeft: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '500px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography variant='h1' sx={{ color: 'white.main' }}>
              Log In
            </Typography>

            <CustomInput
              aria-label='Demo input'
              placeholder='Your Email'
              type='email'
              name='email'
              value={formState.email}
              onChange={handleChangeFormState}
            />
            <CustomInput
              aria-label='Demo input'
              placeholder='Password'
              type='password'
              name='password'
              value={formState.password}
              onChange={handleChangeFormState}
            />
            <Button variant='contained' sx={{ marginTop: '60px' }} onClick={handleLogin}>
              {isLoading && <CircularProgress color='inherit' size='1.5rem' />}
              <Typography sx={{ marginLeft: '8px' }}>LOG IN</Typography>
            </Button>
            <Typography
              variant='body'
              sx={{
                color: 'white.main',
                marginTop: '20px',
                textAlign: 'center',
                display: 'flex',
              }}
            >
              Don't you have an account?&nbsp;
              <Link sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <Typography variant='h5'>Sign Up!</Typography>
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default withRouter(Login);

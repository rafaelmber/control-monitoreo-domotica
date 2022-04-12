import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '@/services/firebase';

import StyledLogin from './Login.styles';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import PasswordField from '@components/forms/PasswordField/PasswordField';
import EmailField from '@components/forms/EmailField/EmailField';
import NameHeader from '@components/layout/NameHeader/NameHeader';

import EmailIcon from '@assets/email.svg';
import GoogleIcon from '@assets/google.svg';

const Login = ({ history }) => {
  const [userData, setUserdata] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const newUserData = {
      ...userData,
      [event.target.name]: event.target.value,
    };
    setUserdata(newUserData);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (userData.email === '') {
      console.log('You must enter an email');
    } else if (userData.password === '') {
      console.log('You must enter a password');
    } else {
      auth
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
          console.log(userCredential, userCredential.user);
          userCredential.user.getIdToken().then((token) => {
            localStorage.setItem('token', token);
            dispatch({
              type: 'SET_TOKEN',
              payload: token,
            });
            history.push('/');
          });
        })
        .catch((error) => {
          console.log(error);
        });
      setUserdata({
        email: '',
        password: '',
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/');
    }
  }, [dispatch]);

  return (
    <StyledLogin>
      <NameHeader />
      <form className='login-form'>
        <EmailField
          label='Email'
          name='email'
          value={userData.email}
          placeholder='Enter your Email'
          onChange={handleChange}
        />
        <PasswordField
          label='Password'
          name='password'
          value={userData.password}
          placeholder='Enter your password'
          onChange={handleChange}
        />
        <div className='buttons'>
          <ContextButton
            text='Login with Email'
            textColor='var(--lightest-neutral)'
            bgColor='var(--primary)'
            Icon={EmailIcon}
            onClick={handleLogin}
          />
        </div>
      </form>
      <div className='buttons'>
        <p className='text-or'>Or</p>
        <ContextButton
          text='Login with Google'
          textColor='var(--neutral)'
          bgColor='var(--lightest-primary)'
          Icon={GoogleIcon}
        />
      </div>
      <div className='sign-up'>
        If you don't have an account <Link to='/signup'>Sign Up</Link>
      </div>
    </StyledLogin>
  );
};

export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '@/services/firebase';

import StyledSignUp from './SignUp.styles';
import NameHeader from '@components/layout/NameHeader/NameHeader';
import EmailField from '@components/forms/EmailField/EmailField';
import PasswordField from '@components/forms/PasswordField/PasswordField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import CheckIcon from '@assets/check.svg';

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email === '') {
      console.log('You must enter an Email');
    } else if (userData.password === '') {
      console.log('Youo must enter a Password');
    } else if (userData.password !== userData.password2) {
      console.log("Passwords don't match");
    } else {
      console.log(userData);
      auth
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
          console.log(userCredential);
          console.log('User', userCredential.user);
          userCredential.user.getIdToken().then((response) => {
            localStorage.setItem('token', response);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <StyledSignUp>
      <NameHeader />
      <form className='form'>
        <EmailField
          name='email'
          label='Email'
          placeholder='Enter your Email'
          value={userData.email}
          onChange={handleChange}
        />
        <PasswordField
          name='password'
          label='Password'
          placeholder='Enter a password'
          value={userData.password}
          onChange={handleChange}
        />
        <PasswordField
          name='password2'
          label='Repeat your Password'
          placeholder='Repeat your Password'
          value={userData.password2}
          onChange={handleChange}
        />
        <ContextButton
          text='Sign Up'
          textColor='var(--lightest-neutral)'
          bgColor='var(--secundary)'
          Icon={CheckIcon}
          onClick={handleSubmit}
        />
      </form>
      <p>
        You can <Link to='/login'>Login</Link> if you already have an account
      </p>
    </StyledSignUp>
  );
};

export default SignUp;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { hideError, showError } from '../../actions/ui';
import { startSignUpWithEmailNameAndPassword } from '../../actions/auth';
import { Container } from '@material-ui/core';
import SocialButton from './components/SocialButton';

export const Register = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.ui);
  const [formValues, handleInputChange, reset] = useForm({
    name: 'Test',
    email: 'test@email.com',
    password: 'daynal#1234',
    confirmPassword: 'daynal#1234',
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startSignUpWithEmailNameAndPassword(email, name, password));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(showError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(showError('Email is not valid'));
      return false;
    } else if (password !== confirmPassword || password.length < 5) {
      dispatch(
        showError(
          'Password should be at least 6 characters and match each other'
        )
      );
      return false;
    }
    dispatch(hideError());
    return true;
  };

  return (
    <Container>
      <div className="auth__wrapper">
        <h3 className="auth__title">Register</h3>
        <form className="auth__form" onSubmit={handleSignUpSubmit}>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <Input
            type="text"
            label="Email"
            placeholder="Enter email"
            icon={FaUser}
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Name"
            placeholder="Enter name"
            icon={FaLock}
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Password"
            icon={FaLock}
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Confirm password"
            icon={FaLock}
            placeholder="Enter password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />

          <div className="auth__container-button">
            <div style={{ width: '80%' }}>
              <Button primary={true}>Register</Button>
            </div>
          </div>

          <hr />

          <p className="text-center">Or Sign Up using</p>
          <div className="auth__social-buttons">
            <SocialButton name="google" />
            <SocialButton name="facebook" />
            <SocialButton name="twitter" />
          </div>

          <div className="text-center">
            <Link to="/auth/login">Already have a account?</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import {
  login,
  startSignInWithEmailAndPassword,
  startSignInWithGoogle,
} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import { GoogleButton } from '../Auth/components/GoogleButton';
import { FacebookButton } from '../Auth/components/FacebookButton';
import { TwitterButton } from '../Auth/components/TwitterButton';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    email: 'test@email.com',
    password: 'daynal#1234',
  });

  const { email, password } = formValues;

  const handleSignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    dispatch(startSignInWithEmailAndPassword(email, password));
  };

  const handleSignInWithGoogle = () => {
    dispatch(startSignInWithGoogle());
  };

  return (
    <Container>
      <div className="auth__wrapper">
        <h3 className="auth__title">Login</h3>
        <form
          className="auth__form"
          onSubmit={handleSignInWithEmailAndPassword}
        >
          <Input
            type="text"
            label="Email"
            placeholder="Enter email"
            icon={faUser}
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Password"
            icon={faLock}
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <div className="text-right m-5">
            <Link href="#">Forgot password?</Link>
          </div>

          <div className="auth__container-button">
            <div style={{ width: '80%' }}>
              <Button primary={true} disabled={isLoading}>
                Login
              </Button>
            </div>
          </div>

          <hr />

          <p className="text-center">Or Sign Up using</p>
          <div className="auth__social-buttons">
            <GoogleButton onClick={handleSignInWithGoogle} />
            <FacebookButton />
            <TwitterButton />
          </div>

          <p className="text-center">Or Sign Up using</p>
          <div className="text-center">
            <Link to="/auth/register">Create a new account</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa';

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
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';
import { FormControl } from '../../components/FormControl';

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
          <FormControl>
            <Label>Email</Label>
            <Input
              type="text"
              label="Email"
              placeholder="Enter email"
              icon={FaUser}
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <Label>Password</Label>
            <Input
              type="text"
              label="Password"
              icon={FaLock}
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </FormControl>

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

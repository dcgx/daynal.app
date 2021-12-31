import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  startSignInWithEmailAndPassword,
  startSignInWithGoogle,
  startSignInWithFacebook
} from '../../redux/actions/authAction'
import { useForm } from '../../hooks/useForm'

import { makeStyles } from '@mui/styles'
import { FormControl, TextField, Button } from '@mui/material'
import { LoginButtonProvider } from './components/LoginButtonProvider'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
  }
})

export default function LoginPage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(false)

  // const [formValues, handleInputChange, reset] = useForm({
  //   email: 'test@email.com',
  //   password: 'daynal#1234'
  // })

  // const { email, password } = formValues

  // const handleSignInWithEmailAndPassword = (e) => {
  //   e.preventDefault()
  //   dispatch(startSignInWithEmailAndPassword(email, password))
  // }

  // const handleSignInWithGoogle = () => {
  //   dispatch(startSignInWithGoogle())
  // }

  const [isEmailProvider, setIsEmailProvider] = useState(false)
  const [formValues, handleInputChange, reset] = useForm({
    email: 'test@email.com',
    password: 'daynal#1234'
  })
  const { email, password } = formValues

  const handleSignInWithGoogle = async () => {
    dispatch(startSignInWithGoogle())
  }

  const handleSignInWithFacebook = () => {
    dispatch(startSignInWithFacebook())
  }

  const handleSignInWithEmail = (e) => {
    e.preventDefault()
    dispatch(startSignInWithEmailAndPassword(email, password))
  }

  if (isEmailProvider) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center flex-column"
        style={{ height: '80vh' }}
      >
        <form className={classes.form} onSubmit={handleSignInWithEmail}>
          <FormControl className="my-3">
            <TextField
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={email}
            ></TextField>
          </FormControl>
          <FormControl className="my-3">
            <TextField
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={password}
            ></TextField>
          </FormControl>
          <div className="row">
            <div className="col">
              <Button
                variant="contained"
                type="button"
                onClick={() => setIsEmailProvider(false)}
              >
                Cancelar
              </Button>
            </div>
            <div className="col">
              <Button variant="contained" type="submit">
                Entrar
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div
        class="container d-flex align-items-center justify-content-center flex-column"
        style={{ height: '80vh' }}
      >
        <h1 className="mb-5">Daynal</h1>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <LoginButtonProvider onClick={handleSignInWithGoogle} provider="google">
          Continue with Google
        </LoginButtonProvider>
        <LoginButtonProvider
          onClick={handleSignInWithFacebook}
          provider="facebook"
        >
          Continue with Facebook
        </LoginButtonProvider>
        <LoginButtonProvider
          onClick={() => setIsEmailProvider(true)}
          provider="email"
        >
          Continue with Email
        </LoginButtonProvider>
      </div>
    )
  }
}

import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    margin: '10px',
    border: 'none',
    width: '100%',
    maxWidth: '250px',
    minHeight: '40px',
    height: 'auto',
    borderRadius: '20px',

    boxShadow:
      '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
  },
  icon: {
    width: '20px',
    margin: '0 5px'
  },
  text: {
    fontSize: '14px',
    fontWeight: '500'
  }
})

const GoogleProviderButton = ({ children, onClick }) => {
  const classes = useStyles()
  return (
    <button
      onClick={onClick}
      className={classes.root}
      style={{ color: '#757575', background: '#fff' }}
    >
      <div className="row">
        <div className="col-1">
          <img
            className={classes.icon}
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span className={classes.text}>{children}</span>
        </div>
      </div>
    </button>
  )
}

const FacebookProviderButton = ({ children, onClick }) => {
  const classes = useStyles()
  return (
    <button
      onClick={onClick}
      className={classes.root}
      style={{ color: '#fff', background: '#3b5998' }}
    >
      <div className="row">
        <div className="col-1">
          <img
            className={classes.icon}
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span className={classes.text}>{children}</span>
        </div>
      </div>
    </button>
  )
}

const EmailProviderButton = ({ children, onClick }) => {
  const classes = useStyles()
  return (
    <button
      onClick={onClick}
      className={classes.root}
      style={{ color: '#fff', background: '#db4437' }}
    >
      <div className="row">
        <div className="col-1">
          <img
            className={classes.icon}
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span className={classes.text}>{children}</span>
        </div>
      </div>
    </button>
  )
}

export const LoginButtonProvider = ({
  provider = 'google',
  children,
  onClick
}) => {
  if (provider === 'google') {
    return (
      <GoogleProviderButton onClick={onClick}>{children}</GoogleProviderButton>
    )
  } else if (provider === 'facebook') {
    return (
      <FacebookProviderButton onClick={onClick}>
        {children}
      </FacebookProviderButton>
    )
  } else {
    return (
      <EmailProviderButton onClick={onClick}>{children}</EmailProviderButton>
    )
  }
}

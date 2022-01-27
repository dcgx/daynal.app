import React from "react"

import "./styles.scss"

const GoogleProviderButton = ({ children, onClick }) => {
  return (
    <button
      className="loginButtonProvider"
      onClick={onClick}
      style={{ color: "#757575", background: "#fff" }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span>{children}</span>
        </div>
      </div>
    </button>
  )
}

const FacebookProviderButton = ({ children, onClick }) => {
  return (
    <button
      className="loginButtonProvider"
      onClick={onClick}
      style={{ color: "#fff", background: "#3b5998" }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span>{children}</span>
        </div>
      </div>
    </button>
  )
}

const EmailProviderButton = ({ children, onClick }) => {
  return (
    <button
      className="loginButtonProvider"
      onClick={onClick}
      style={{ color: "#fff", background: "#db4437" }}
    >
      <div className="row">
        <div className="col-1">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
            alt=""
          />
        </div>
        <div className="col">
          <span>{children}</span>
        </div>
      </div>
    </button>
  )
}

export const LoginButtonProvider = ({
  provider = "google",
  children,
  onClick,
}) => {
  if (provider === "google") {
    return (
      <GoogleProviderButton onClick={onClick}>{children}</GoogleProviderButton>
    )
  } else if (provider === "facebook") {
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

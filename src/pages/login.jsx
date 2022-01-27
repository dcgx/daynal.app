import React, { useState } from "react"

import { LoginButtonProvider } from "../components/Login/LoginButtonProvider"

export default function Login() {
  const [isEmailProvider, setIsEmailProvider] = useState(false)

  const handleClickSignInWithEmail = () => {
    setIsEmailProvider(!isEmailProvider)
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center flex-column"
      style={{ height: "80vh" }}
    >
      <h1 className="mb-5">Daynal</h1>
      <img
        src="https://play-lh.googleusercontent.com/YFqIlpawCRLToQqCM8KbbVZY5Ks7nLNq49e3jsXckM_rfiQXjCJynfksfHy01_dZYw"
        alt=""
        width="40px"
      />

      {isEmailProvider ? (
        <div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input type="text" className="form-control" />
          </div>

          <button className="btn btn-primary mt-3 text-center">
            {/* <div class="spinner-border spinner-border-sm" role="status"></div> */}
            Ingresar
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <LoginButtonProvider provider="google">
            Ingresar con Google
          </LoginButtonProvider>
          <LoginButtonProvider provider="facebook">
            Ingresar con Facebook
          </LoginButtonProvider>
          <LoginButtonProvider
            onClick={handleClickSignInWithEmail}
            provider="email"
          >
            Ingresar con Email
          </LoginButtonProvider>
        </div>
      )}
    </div>
  )
}

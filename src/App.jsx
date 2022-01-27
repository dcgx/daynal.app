import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import createStore from "./redux/create"

import "./styles/styles.scss"

import HomePage from "./pages/index"
import LoginPage from "./pages/login"
import WriterPage from "./pages/writer"

const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writer" element={<WriterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

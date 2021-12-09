import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import createStore from './redux/create'

import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'

// import { Home } from './containers/Home/Home'
// import { Writer } from './containers/Writer/Writer'
import LoginPage from './pages/Login/LoginPage'

const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/writer/new" element={<Writer />} /> */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

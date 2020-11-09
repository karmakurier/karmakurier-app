import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import slugify from 'slugify'
import { routes, protectedRoutes } from './router'
import ProtectedRoute from './components/ProtectedRoute'
import UserContext from './services/user.context'

const App = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: null,
  })

  const changeLoginState = (loginState) => {
    setUser({ isLoggedIn: loginState })
  }

  const [funcs] = useState({
    changeLoginState,
  })

  // Define global states
  return (
    <UserContext.Provider value={{ user, funcs }}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={slugify(route.path)} path={route.path} exact={route.exact}>
              <route.main />
            </Route>
          ))}
          {protectedRoutes.map((route) => (
            <ProtectedRoute key={slugify(route.path)} path={route.path} exact={route.exact} />
          ))}
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App

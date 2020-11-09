import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../services/user.context'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isLoggedIn) {
          return <Component {...rest} {...props} />
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }}
    />
  )
}

export default ProtectedRoute

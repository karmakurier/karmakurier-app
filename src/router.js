import React from 'react'
import Dashboard from './components/pages/Dashboard/Dashboard.page'
import Login from './components/pages/Login/Login.page'

/**
 * Use Routes for the React Router rendering
 */
export const routes = [
  {
    path: '/login',
    main: () => <Login />,
  },
  {
    path: '/',
    exact: true,
    main: () => <Dashboard />,
  },
]

export const protectedRoutes = []

export default { routes, protectedRoutes }

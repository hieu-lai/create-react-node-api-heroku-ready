import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default AppRouter;
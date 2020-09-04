import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
 
import Home from '../components/home'
import About from '../components/about'
import Login from '../pages/Login/index'

import PrivateRoute from '../components/PrivateRoute'
 
const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  </HashRouter>
)
 
const App = () => (
  <Routes />
)
 
export default App
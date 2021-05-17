import React, { Fragment } from 'react';
import { 
  Home,
  Start,
  Page404,
  Register
} from './components/Pages/index';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return ( 
    <Fragment>
      <Switch>

        <Route exact path='/'>
          <Start/>
        </Route>

        <Route exact path='/Login'>
          <Register 
            type='login'
          />
        </Route>

        <Route exact path='/Register'>
          <Register 
            type='register'
          />
        </Route>

        <Route exact path='/todo'>
          <Home/>
        </Route>

        <Route>
          <Page404/>
        </Route>

      </Switch>
    </Fragment>
  );
}
 
export default App;
import React from 'react';
import { Route, Switch } from "react-router-dom";

import Homepage from './components/Homepage';
import UserDetail from './components/UserDetail';
import './App.css';

 const App = ()=> { 
  return (
    <>
    <Switch>
      <Route path= '/' exact component ={Homepage} />
      <Route path='/users/:id' component={UserDetail} />
      
    </Switch>
    </>
  );
}

export default App;

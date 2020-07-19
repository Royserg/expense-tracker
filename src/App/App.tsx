import React from 'react';
import { Switch, Route } from 'react-router-dom'

/* Components */
import Header from '../components/Header'
/* Views */
import Home from '../views/Home'
import Transactions from '../views/Transactions'

function App() {
  return (
    <>
      <Header title={'Expense Tracker'}/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/transactions' component={Transactions}/>
        {/* <Route exact path='/transactions/:id' component={Transaction}/> */}
      </Switch>
    </>
  );
}

export default App;

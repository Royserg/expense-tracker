import React from 'react'
import { Switch, Route } from 'react-router-dom'
/* Components */
import Header from '../components/Header'
/* Views */
import Home from '../views/Home'
import Transactions from '../views/Transactions'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <>
      {/* Material-UI css rest */}
      <CssBaseline />
      <Container maxWidth='sm'>
        <Header title={'Expense Tracker'}/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/transactions' component={Transactions}/>
          {/* <Route exact path='/transactions/:id' component={Transaction}/> */}
        </Switch>
      </Container>
    </>
  );
}

export default App;

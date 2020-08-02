import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
/* Styles */
import useStyles from './styles.'
/* Components */
import Header from '../components/Header'
/* Views */
import Home from '../views/Home'
import Transactions from '../views/Transactions'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import BottomAppBar from '../components/BottomAppBar'


const App: FC = () => {
  const classes = useStyles()

  return (
    <>
      {/* Material-UI css rest */}
      <CssBaseline />
      <Container maxWidth='sm' className={classes.root}>
        <Header title={'Expense Tracker'} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/transactions' component={Transactions} />
          {/* <Route exact path='/transactions/:id' component={Transaction}/> */}
        </Switch>

        <BottomAppBar />
      </Container>
    </>
  )
}

export default App

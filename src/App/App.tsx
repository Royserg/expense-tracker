import React, { FC, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
/* Redux */
import { useStoreActions } from '../store'
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

  const { saveTransactions, loadTransactions } = useStoreActions(
    (actions) => actions.transactions
  )

  /* Before refresh/closing tab save data to localStorage */
  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    saveTransactions()
  })

  useEffect(() => {
    /* Load transactions from localStorage */
    loadTransactions()
  }, [loadTransactions])

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

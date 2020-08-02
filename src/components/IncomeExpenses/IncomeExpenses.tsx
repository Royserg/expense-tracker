import React, { FC } from 'react'
/* Redux */
import { useStoreState } from '../../store'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'


const IncomeExpenses: FC = () => {

  const classes = useStyles()
  const { totalIncome, totalExpense } = useStoreState(state => state.transactions)

  return (
    <Paper elevation={2} className={classes.container}>
      <div className={classes.valueContainer}>
        <Typography variant='h5' component='h2'>Income</Typography>
        <p>+{totalIncome}</p>
      </div>
      <Divider orientation='vertical' flexItem />
      <div className={classes.valueContainer}>
        <Typography variant='h5' component='h2'>Expense</Typography>
        <p>{totalExpense}</p>
      </div>
    </Paper>
  )
}

export default IncomeExpenses

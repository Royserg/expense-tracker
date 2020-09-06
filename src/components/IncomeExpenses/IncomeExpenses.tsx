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
  const { totalIncome, totalExpense } = useStoreState(
    (state) => state.transactions
  )

  return (
    <Paper elevation={2} className={classes.container}>
      <div className={classes.valueContainer}>
        <Typography
          variant='h5'
          component='h2'
          className={classes.incomeHeading}
        >
          Income
        </Typography>
        <Typography variant='h6' component='h4'>
          +{totalIncome}
        </Typography>
      </div>
      <Divider orientation='vertical' flexItem />
      <div className={classes.valueContainer}>
        <Typography
          variant='h5'
          component='h2'
          className={classes.expenseHeading}
        >
          Expense
        </Typography>
        <Typography variant='h6' component='h4'>
          {totalExpense}
        </Typography>
      </div>
    </Paper>
  )
}

export default IncomeExpenses

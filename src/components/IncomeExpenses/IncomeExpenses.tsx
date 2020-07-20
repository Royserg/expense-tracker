import React, { FC } from 'react'
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'


interface IncomeExpensesProps {
  income: number;
  expense: number;
}

const IncomeExpenses: FC<IncomeExpensesProps> = ({ income, expense }) => {

  const classes = useStyles()

  return (
    <Paper elevation={2} className={classes.container}>
      <div className={classes.valueContainer}>
        <Typography variant='h5' component='h2'>Income</Typography>
        <p>+{income}</p>
      </div>
      <Divider orientation='vertical' flexItem />
      <div className={classes.valueContainer}>
        <Typography variant='h5' component='h2'>Expense</Typography>
        <p>-{expense}</p>
      </div>
    </Paper>
  )
}

export default IncomeExpenses

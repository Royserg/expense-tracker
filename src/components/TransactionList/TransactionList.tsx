import React, { FC } from 'react'

/* Styles */
import useStyles from './styles'

/* Components */
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'


// interface TransactionListProps {

// }

const TransactionList: FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h5' component='h3'>History</Typography>
      <Divider />
      <List>
        <ListItem disableGutters dense>
          <Paper elevation={2} className={classes.transactionItem}>
            <span>Cash</span>
            <span>-$400</span>
            <button className={classes.deleteButton}>x</button>
          </Paper>
        </ListItem>
        <ListItem disableGutters dense>
          <Paper elevation={2} className={classes.transactionItem}>
            <span>Salary</span>
            <span>+$400</span>
            <button className={classes.deleteButton}>x</button>
          </Paper>
        </ListItem>
      </List>
    </div>
  )
}

export default TransactionList

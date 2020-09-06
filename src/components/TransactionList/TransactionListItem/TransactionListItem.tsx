import React, { FC } from 'react'
import clsx from 'clsx'
/* Styles */
import useStyles from './styles'
/* Components */
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import { useStoreActions } from '../../../store'

interface TransactionListItemProps {
  id: string,
  description: string,
  amount: number,
}

const TransactionListItem: FC<TransactionListItemProps> = ({
  id,
  description,
  amount,
}) => {
  const classes = useStyles()
  const deleteTransaction = useStoreActions(
    (actions) => actions.transactions.deleteTransaction
  )

  return (
    <ListItem disableGutters dense>
      <Paper
        elevation={2}
        className={clsx(
          classes.container,
          amount > 0 ? classes.greenBorder : classes.redBorder
        )}
      >
        <span>{description}</span>
        <span>{amount}</span>
        <button
          className='deleteBtn'
          title='Delete transaction'
          onClick={handleDelete}
        >
          x
        </button>
      </Paper>
    </ListItem>
  )

  /* Handlers */
  function handleDelete() {
    deleteTransaction(id)
  }
}

export default TransactionListItem

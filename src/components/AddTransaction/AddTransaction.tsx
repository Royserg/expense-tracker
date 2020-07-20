import React, { FC } from 'react'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// interface AddTransactionProps {

// }

const AddTransaction: FC = () => {

  const classes = useStyles()

  return (
    <>
      <Typography variant='h5' component='h3'>Add new transaction</Typography>
      <Divider />
      <form noValidate className={classes.form}>
        <TextField
          label='Description'
          placeholder='Enter description...'
          name='description'
          variant='outlined'
          margin='normal'
        />
        <TextField
          label='Amount'
          placeholder='Enter amount...'
          name='amount'
          variant='outlined'
          type='number'
          margin='normal'
        />
        <Button variant="contained" color="primary" className={classes.submitBtn}>
          Add Transaction
        </Button>
      </form>
    </>
  )
}

export default AddTransaction

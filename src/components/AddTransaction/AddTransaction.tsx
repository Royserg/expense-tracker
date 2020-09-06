import React, { FC } from 'react'
import { NewTransaction } from '../../models'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'
/* Redux */
import { useStoreActions } from '../../store'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

interface Inputs {
  description: string,
  amount: number,
}

const AddTransaction: FC = () => {
  const classes = useStyles()

  const { register, handleSubmit, reset } = useForm<Inputs>()
  const addTransaction = useStoreActions((actions) => actions.transactions.addTransaction)

  const onSubmit = (data: Inputs) => {
    const { amount, description } = data
    const timestamp = DateTime.local().toMillis()

    const newTransaction: NewTransaction = {
      description,
      amount: +amount,
      date: timestamp,
    }

    addTransaction(newTransaction)
    reset({})
  }

  return (
    <>
      <Typography variant='h5' component='h3'>Add new transaction</Typography>
      <Divider />
      <form noValidate onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          label='Description'
          placeholder='Enter description...'
          variant='outlined'
          margin='normal'
          inputProps={{
            name: 'description',
            ref: register,
          }}
        />
        <TextField
          label='Amount'
          placeholder='Enter amount...'
          variant='outlined'
          type='number'
          margin='normal'
          inputProps={{
            name: 'amount',
            ref: register,
          }}
        />
        <Button
          type='submit'
          variant="contained"
          color="primary"
          className={classes.submitBtn}
        >
          Add Transaction
        </Button>
      </form>
    </>
  )
}

export default AddTransaction

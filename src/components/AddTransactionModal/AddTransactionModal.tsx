import React, { FC } from 'react'
/* Redux */
import { useStoreActions } from '../../store'
/* Styles */
import useStyles from './styles'
import { NewTransaction } from '../../models'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'
/* Components */
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

interface Inputs {
  description: string,
  amount: number,
}

interface Props {
  isOpen: boolean,
  close: () => void,
}

const AddTransactionModal: FC<Props> = ({ isOpen, close }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, reset } = useForm<Inputs>()
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
    /* Clear form */
    reset({})
    /* Close Modal */
    close()
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        aria-labelledby='form-dialog-title'
        fullWidth={true}
        maxWidth='sm'
        disableBackdropClick
      >
        <DialogTitle id='form-dialog-title'>Add Transaction</DialogTitle>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <DialogContent classes={{ root: classes.dialogContent }}>
            {/* Description Field */}
            <TextField
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              label='Description'
              placeholder='Enter description...'
              variant='outlined'
              margin='normal'
              inputProps={{
                name: 'description',
                ref: register({ required: true }),
              }}
              error={errors.description ? true : false}
              helperText='This field is required'
            />

            {/* Amount Field */}
            <TextField
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              label='Amount'
              placeholder='Enter amount...'
              variant='outlined'
              type='number'
              margin='normal'
              inputProps={{
                name: 'amount',
                ref: register({ required: true }),
              }}
              error={errors.amount ? true : false}
              helperText={errors.amount ? 'Field is required' : 'Negative number for expense'}
            />
          </DialogContent>

          <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
            <Button onClick={close} className={classes.cancelButton}>
              Cancel
            </Button>
            <Button type='submit' className={classes.confirmButton}>
              Add Transaction
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default AddTransactionModal

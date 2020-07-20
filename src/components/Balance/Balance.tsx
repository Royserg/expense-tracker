import React, { FC } from 'react'
/* Components */
import Typography from '@material-ui/core/Typography'


const Balance: FC = () => {
  return (
    <>
      <Typography variant='h6'>
        Your Balance
      </Typography>
      <Typography variant='h4'>
        $0.00
      </Typography>
    </>
  )
}

export default Balance

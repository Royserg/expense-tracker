import React, { FC } from 'react'
/* Styles */
import useStyles from './styles'
/* Components */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'


const BottomAppBar: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' color='primary' className={classes.appBar} >
      <Toolbar>
        <Fab color='secondary' aria-label='add' className={classes.fabButton}>
          +
        </Fab>
      </Toolbar>
    </AppBar>
  )
}

export default BottomAppBar

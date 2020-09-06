import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
/* Styles */
import useStyles from './styles'
/* Components */
import AddTransactionModal from '../AddTransactionModal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'

const BottomAppBar: FC = () => {
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddTransactionModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
      <AppBar
        position='absolute'
        color='transparent'
        classes={{
          positionAbsolute: classes.appBar,
        }}
      >
        <Toolbar classes={{ root: classes.toolbar }}>
          <Fab color='secondary' aria-label='add' className={classes.fabButton} onClick={handleFABClicked}>
            +
          </Fab>
          <NavLink to='/history' className={classes.appBarLink} activeClassName={classes.linkActive}>History</NavLink>
        </Toolbar>
      </AppBar>
    </>
  )

  /* Handlers */
  function handleFABClicked(): void {
    setIsModalOpen(true);
  }
}

export default BottomAppBar

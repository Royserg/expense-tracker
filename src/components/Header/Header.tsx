import React, { FC } from 'react'
import { Link } from 'react-router-dom'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'


interface HeaderProps {
  title: string,
}

const Header: FC<HeaderProps> = ({ title }) => {

  const classes = useStyles()

  return (
    <Typography variant='h5' component='h2' className={classes.root}>
      <Link to='/' className={classes.link}>
        {title}
      </Link>
    </Typography>
  )
}

export default Header

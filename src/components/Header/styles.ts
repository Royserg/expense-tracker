import makeStyles from '@material-ui/core/styles/makeStyles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: grey['900'],
  }
})

export default useStyles

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    padding: '.5rem',
    marginTop: '1rem',
    display: 'flex',
  },
  valueContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: '50px',
    backgroundColor: '#222'
  }
})

export default useStyles

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    marginTop: '2rem',
  },
  transactionItem: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto',
    padding: '1rem',
    borderRight: '0.5rem solid red',
  },
  deleteButton: {
    position: 'absolute',
    left: '-20px'
  }
})

export default useStyles

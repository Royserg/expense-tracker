import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto',
    padding: '1rem',
  },
  redBorder: {
    borderRight: '0.5rem solid red',
  },
  greenBorder: {
    borderRight: '0.5rem solid green',
  },
  deleteButton: {
    position: 'absolute',
    left: '-20px'
  }
})

export default useStyles
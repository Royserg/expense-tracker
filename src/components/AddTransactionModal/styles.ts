import { makeStyles } from "@material-ui/core"
import { colors } from '../../utils/constants'

const useStyles = makeStyles({
  dialogContent: {
    width: '75%',
    margin: '0 auto',
    marginBottom: '1rem',
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '1rem',
    width: '70%',
    margin: '0 auto',
  },
  confirmButton: {
    background: colors.redAccent,
    color: 'white',
    border: `1px solid ${colors.redAccent}`,
    marginLeft: '1rem',
    '&:hover': {
      color: colors.redAccent,
    }
  },
  cancelButton: {
    fontSize: '0.8rem',
  },
})

export default useStyles

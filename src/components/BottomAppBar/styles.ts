import makeStyles from '@material-ui/core/styles/makeStyles'
import { colors } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: '50px 50px 0 0',
    top: 'auto !important',
    bottom: 0,
    height: '50px',
    '& active': {
      color: 'blue',
    }
  },
  appBarLink: {
    textDecoration: 'none',
    fontSize: '1.1rem',
    color: 'black',
    marginRight: '10px',
    borderBottom: `1px solid transparent`,
    marginTop: '-10px',
    transition: 'all .3s',
    '&:hover, &:focus': {
      color: colors.redSecondary,
      borderBottom: `1px solid ${colors.redSecondary}`,
    }
  },
  linkActive: {
    color: colors.redSecondary,
    borderBottom: `1px solid ${colors.redSecondary}`,
  },
  toolbar: {
    borderRadius: '50px 50px 0 0',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

export default useStyles

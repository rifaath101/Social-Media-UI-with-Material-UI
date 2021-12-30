import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  alpha,
  Badge,
  Avatar,
} from '@material-ui/core'
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons'
import InputBase from '@material-ui/core/InputBase'
import img from '../IMG_20211221_173213_503.jpg'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          Rifaath Dev
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          Rifaath
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder='Search...' className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='secondary' className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt='Remy Sharp' src={img} />
        </div>
      </Toolbar>
    </AppBar>
  )
}

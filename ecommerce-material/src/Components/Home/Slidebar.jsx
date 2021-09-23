import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import '../Home/home.css'
import {Link} from 'react-router-dom'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

var navitem = ['Home', 'Shop', 'Blog', 'About Us', 'Contact Us']
var navlink = ['/home', '/shop', '/blog', '/about-us', '/contact-us']
var navicons = [<HomeRoundedIcon />, <ShoppingCartRoundedIcon />, <SubjectRoundedIcon />, <InfoIcon />, <ContactSupportIcon />]

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const [active, setActive] = useState()

  return (
    <div className={`main-drawer ${classes.root}`}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={`side-header ${classes.toolbar}`}>
          <Typography className="sidebar-title" variant="h6" color="initial">My Shopping Cart</Typography>
        </div>
        <Divider />
        <List className="list-ul">
          {navitem.map((text, index) => (
            <Link to={navlink[index]} className="nav-link">
              <ListItem onClick={() => setActive(parseInt(index))} className={`nav-list ${active == index ? 'active' : ''}`} button key={text}>
                <ListItemIcon>{navicons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

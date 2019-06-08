import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import { withStyles,fade } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appContainer:{
      backgroundColor: fade('#ba68c8', 0.75)
  }
 
});

export default withStyles(styles)(({ classes }) =>{
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appContainer}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
           FullThrottle Labs Front End React Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
})
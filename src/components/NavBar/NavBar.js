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
      backgroundColor: fade('#ba68c8', 0.75),
      color:'white'
  }
 
});

export default withStyles(styles)(({ classes }) =>{
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appContainer}>
        <Toolbar>
          <img
            src="/images/logo-2.png"
            alt="Full throttle"
            width={145}
            height={'auto'}
          />
           <div className="flex-grow" />
          <Typography className={classes.title} variant="h6" noWrap>
            Front End React Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
})
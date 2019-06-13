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
      backgroundColor: fade('#7f0087', 0.75),
      color:'white'
  }
 
});

export default withStyles(styles)(({ classes }) =>{
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appContainer}>
        <Toolbar>
          <img
            src="/images/smiley.png"
            alt="smiley"
            width={45}
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
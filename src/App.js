import React,{ Component } from 'react';
import Nav from './components/NavBar/NavBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = theme =>({
  sliderContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  },
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
 
})

class App extends Component{
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>
        <Nav/>
        <div className={classes.sliderContainer}>
          <div className={classes.root}>
            <Typography id="label">Amount Slider</Typography>
            <Slider
              className={classes.slider}
              value={value}
              aria-labelledby="label"
              onChange={this.handleChange}
            />
             <Typography id="label">Month Slider </Typography>
            <Slider
              className={classes.slider}
              value={value}
              aria-labelledby="label"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
 }
}

export default  withStyles(styles)(App);

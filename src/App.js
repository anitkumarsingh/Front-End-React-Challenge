import React,{ Component } from 'react';
import Nav from './components/NavBar/NavBar';
import PropTypes from 'prop-types';
import { withStyles,Typography,Grid } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

const styles = theme =>({
  sliderContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    marginLeft:'auto',
    marginRight:'auto',
    width:'70%'
  },
  root: {
    width: 400,
  },
  slider: {
    padding: '22px 0px',
  },
 
})

class App extends Component{
  state = {
    AmtValue: 500,
    MnthValue:6
  };

  handleAmtChange = (event, AmtValue) => {
    this.setState({ AmtValue});
  };
  handleMnthChange = (event, MnthValue) => {
    this.setState({ MnthValue});
  };
  render(){
    const { classes } = this.props;
    const { MnthValue, AmtValue} = this.state;
    return (
      <>
        <Nav/>
          <div className={classes.sliderContainer}>
              <Grid container direction="row" justify="space-around" 
                    alignItems="center"
                    >
                <Grid item lg={6}>
                    <div className={classes.root}>
                        <Typography id="label">Amount Slider</Typography>
                        <Slider
                          className={classes.slider}
                          value={AmtValue}
                          min={500}
                          max={5000}
                          aria-labelledby="label"
                          onChange={this.handleAmtChange}
                        />
                        {AmtValue}
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <div className={classes.root}>
                        <Typography id="label">Month Slider </Typography>
                          <Slider
                            className={classes.slider}
                            value={MnthValue}
                            min={6}
                            max={12}
                            step={1}
                            aria-labelledby="label"
                            onChange={this.handleMnthChange}
                          />
                        {MnthValue}
                    </div>
                </Grid>
              </Grid>
            </div>
      </>
    );
 }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(App);

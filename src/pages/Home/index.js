import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as selectors from './redux/reducer';
import { withStyles,Typography,Grid } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import Loader from '../../components/Loader/Loader';

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

class Home extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      AmtValue: 500,
      MnthValue:6
    };
  }
  componentDidMount() {
      this.props.dispatch(actions.getData());
    }
  handleAmtChange = (event, AmtValue) => {
      this.setState({ AmtValue});
    };
  handleMnthChange = (event, MnthValue) => {
      this.setState({ MnthValue});
    };
    render(){
        const { loading,payments,classes } = this.props;
        const { MnthValue, AmtValue} = this.state;
        console.log(payments);
        if(loading){
         return <Loader/>
        }else{
        return(
            <>
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
                              max={24}
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
        )
      }
    }
}

  function mapStateToProps(state) {
    return selectors.getAllValues(state);
  }
export default connect(mapStateToProps)(withStyles(styles)(Home));
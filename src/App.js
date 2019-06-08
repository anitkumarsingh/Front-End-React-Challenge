import React from 'react';
import Nav from './components/NavBar/NavBar';
import Home from './pages/Home';
import styles from './theme/styles';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/app.theme';

const App =() =>{
    return (
      <MuiThemeProvider theme={theme}>
         <Nav/>
         <Home/>
      </MuiThemeProvider>
    );
 }


export default  withStyles(styles, { withTheme: true })(App);

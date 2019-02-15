import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import {Grid, AppBar, Typography, Button, withStyles} from '@material-ui/core'
import Carosel from './Components/carosel';
import Info from './Components/info'
import GodRegion from './Components/godRegion'

const styles = theme => ({
  heading:{
    'padding-left': '20px', 
    'padding-top': '5px',
    'padding-bottom': '5x'
  },
})

class App extends Component {
  render() {
    const {classes} = this.props

    return (
      <Router>
        <div className="App">
          <Grid container align="center">
            <Grid item xs={12}>
              <AppBar position="static" id="appbar">
                <Grid container>
                  <Grid item xs={8} sm={6} md={6}>
                    <Typography variant="headline" align="left" color="inherit" className={classes.heading}>
                      The Nine
                    </Typography>
                  </Grid>
                  <Grid align="right" item xs={4} sm={6} md={6}>
                      <Link className="a-button" exact={true} to={`/login`}>
                        <Button>
                        Log In
                        </Button>
                      </Link>
                      <Link className="a-button" exact={true} to={`/signup`}>
                        <Button>
                        Sign Up
                        </Button>
                      </Link>
                  </Grid>
                </Grid>
              </AppBar>
              <body>
                <Route path='/' exact={true} component={body} />
              </body>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

const body = () => {
  return(
    <div>
      <Grid item xs={12} align="center" className="m">
        <Carosel />
      </Grid>
      <Grid item xs={12}>
        <GodRegion />
      </Grid>
    </div>
  )
}

const AppWithStyle = withStyles(styles)(App)

export default AppWithStyle
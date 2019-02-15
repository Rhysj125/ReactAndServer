import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import {Grid, AppBar, Typography, Button, withStyles} from '@material-ui/core'
import Carosel from './Components/carosel';
import Info from './Components/info'
import GodRegion from './Components/godRegion'
import Login from './pages/login'

const styles = theme => ({
  heading:{
    'padding-left': '20px', 
    'padding-top': '5px',
    'padding-bottom': '5x'
  },
})

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  renderLoggedIn(){
    return(
      <div>
        Logged in as Rhys
      </div>
    )
  }

  renderNotLoggedIn(){
    return (
      <div>
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
      </div>
    )
  }

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
                    {this.state.isLoggedIn === true ? this.renderLoggedIn() : this.renderNotLoggedIn()}
                  </Grid>
                </Grid>
              </AppBar>
              <body>
                <Route path='/' exact={true} component={body} />
                <Route path='/login' exact={true} component={login} />
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

const login = () => {
  return(
    <Login />
  )
}

const AppWithStyle = withStyles(styles)(App)

export default AppWithStyle
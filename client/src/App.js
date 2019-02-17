import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import {Grid, AppBar, Typography, Button, withStyles} from '@material-ui/core'
import Carosel from './Components/carosel';
import Info from './Components/info'
import GodRegion from './Components/godRegion'
import Login from './pages/login'
import logo from './images/ValhallaSmallest.png'
import Signup from './pages/signup';

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
      <div className='height-fill'>
        <Link className="a-button height-fill" exact={true} to={`/login`}>
          <Button className="height-fill">
          Log In
          </Button>
        </Link>
        <Link className="a-button height-fill" exact={true} to={`/signup`}>
          <Button className="height-fill">
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
                      <Link to='/' className="a-button">
                          <img src={logo} style={{marginRight:'5px'}} alt="" />
                        <span>
                          Valhalla
                        </span>
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid align="right" item xs={4} sm={6} md={6}>
                    {this.state.isLoggedIn === true ? this.renderLoggedIn() : this.renderNotLoggedIn()}
                  </Grid>
                </Grid>
              </AppBar>
              <div id="body">
                <Route path='/' exact={true} component={body} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/signup' exact={true} component={Signup} />
              </div>
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
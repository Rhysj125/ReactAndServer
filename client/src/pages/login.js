import React, {Component} from 'react'
import { Card, withStyles, Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from '../images/ValhallaSmall.png'

const styles = theme => ({
    card:{
        'margin-top': '50px',
        'max-width' : '400px',
        'min-width' : '400px',
        'min-height' : '500px'
    },

    form:{
        'padding-left': '20px',
        'padding-right' : '20px'
    },

    formEntry:{
        'margin-bottom' : '5px',
        'margin-top' : '5px',
    },

    formTitle:{
        'margin-top': '15px'
    }
})

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){

        const { classes } = this.props

        return(
            <Card className={classes.card}>
                <img src={Logo} style={{marginTop : '10px'}} alt="" />    
                <Typography variant="headline" className={classes.formTitle}>
                    Log in to Valhalla
                </Typography>
                <Grid container align="center" className={classes.form}>
                    <Grid item xs={12}>
                        <TextField placeholder="Username" label="Username" fullWidth className={classes.formEntry} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder="Password" label="Password" type="password" fullWidth className={classes.formEntry} />
                    </Grid>
                    <Grid item xs={12}>
                        <Link to='/forgottenPassword' >
                            <Typography variant="body1" className={classes.formEntry} >
                                Forgotten Password?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary" fullWidth>
                            Log In
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={classes.formEntry} >
                            Don't have an account? Sign up <a href='/signup'>here</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default withStyles(styles)(Login)
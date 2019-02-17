import React, {Component} from 'react'
import { Card, withStyles, Typography, TextField, Grid, Button } from '@material-ui/core'
import Logo from '../images/ValhallaSmall.png'
import { Redirect } from 'react-router-dom'

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

class Signup extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: null,
            password: null,
            confirmPassword: null,
            error: null,
            validUser: {
                username: null,
                password: null,
            },
            redirect: false,
        }

        this.handleTextInputChange = this.handleTextInputChange.bind(this)
        this.validateUser = this.validateUser.bind(this)
    }

    handleTextInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateUser(){
       if(this.state.username === "" || this.state.username === null){
            this.setState({
                error: "Please enter a username",
            })
        }else if(this.state.password === "" || this.state.password === null){
            this.setState({
                error: "Please enter a password",
            })
        }else if(this.state.password !== this.state.confirmPassword){
            console.log("Password mismatch")
            this.setState({
                error: "Passwords do not match",
            })
        }else{
            this.setState({
                error: "",
                validUser: {
                    username: this.state.username,
                    password: this.state.password
                },
                redirect: true,
            }, () => console.log('made it here'))
        }
    }

    signup = async () =>{
        console.log(JSON.stringify(this.state))

        const response = await fetch('/user', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'ContentType' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(this.state),
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))

        console.log(response)
    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to='/' />
        }
    }

    render(){

        const { classes } = this.props

        return(
            <Card className={classes.card}>
                {this.renderRedirect()}
                <img src={Logo} style={{marginTop : '10px'}} />    
                <Typography variant="headline" className={classes.formTitle}>
                    Sign up to Valhalla
                </Typography>

                <Typography variant="body1" color="error">
                    {this.state.error}
                </Typography>

                <Grid container align="center" className={classes.form}>
                    <Grid item xs={12}>
                        <TextField placeholder="Username" label="Username" fullWidth className={classes.formEntry} name="username" onChange={this.handleTextInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder="Password" label="Password" type="password" fullWidth className={classes.formEntry} name="password" onChange={this.handleTextInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder="confirm Password" label="Confirm Password" type="password" fullWidth className={classes.formEntry} name="confirmPassword" onChange={this.handleTextInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth onClick={this.validateUser}>
                            Sign up
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={classes.formEntry} >
                            Already have an account? Log in <a href='/login'>here</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default withStyles(styles)(Signup)
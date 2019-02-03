import React, { Component } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    paper:{
        maxWidth:400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2
    }
})

class InfoBox extends Component {
    
    constructor(props){
        super(props)

        this.paperClicked = this.paperClicked.bind(this);
    }

    paperClicked(){
        console.log("this was clicked")
    }

    getBodyText(url){
        return url
    }

    render(){
        const { classes } = this.props

        return(
            <Grid container styles={{width:500}} spacing={24}>
                <Grid item xs={12} md={6} className="i">
                    <Paper styles={classes.paper}>
                        <Typography variant="headline" align="center" gutterBottom="true">
                            {this.props.TitleOne}
                        </Typography>
                        <Typography variant="body" align="left" color="primary" className="ml" noWrap={false}>
                            {this.props.bodyOne}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} className="i">
                    <Paper styles={classes.paper} onClick={this.paperClicked}>
                        <Typography variant="headline" align="center" gutterBottom="true">
                            {this.props.TitleTwo}
                        </Typography>
                        <Typography variant="body" align="left" color="primary" className="ml" >
                            {this.getBodyText("")}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(InfoBox)
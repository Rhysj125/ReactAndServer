import React, { Component } from 'react'
import {Modal, Typography, TextField, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ModalStyle from '../../styles/modalStyle'

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },

    textField: {
        padding: '10px',
    },
  });

class AddGodModal extends Component{
    constructor(props){
        super(props)

        this.state = {
            open: true,
            valid: true,
            name: "",
        }

        this.closeModal = this.closeModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKey = this.handleKey.bind(this)
        this.save = this.save.bind(this)
    }

    // Close the current modal
    closeModal(){
        this.setState({
            open: false
        })
    }

    // Handle any changes made to the given field
    handleChange = name => event =>{
        this.setState({
            [name]: event.target.value
        })
    }

    // Save when enter key is pressed
    handleKey(e){
        e.keyCode === 13 ? this.save() : null
    }

    // Save the newly created session
    save(){
        // Checking whether the session has a name
        if(this.state.name.length !== 0){
            this.props.save(this.state.name)
            this.closeModal()
        } else {
            this.setState({
                valid: false
            })
        }
    }

    render(){
        const {classes} = this.props

        return(
            <Modal onKeyUp={this.handleKey} open={this.state.open} onBackdropClick={this.closeModal}>
                <div style={ModalStyle} className={classes.paper}>
                    <Typography variant="title" className="title">
                        New Game Session
                    </Typography>
                    <Typography variant="subheading" className="form">
                        <TextField className={classes.textField} label="Game Name" defaultValue={null} onChange={this.handleChange('name')} fullWidth />
                    </Typography>

                    <Button variant="contained" color="primary" id="save" onClick={this.save}>Save</Button>
                </div>
            </Modal>
        )
    }
}

const AddGodModalWrapped = withStyles(styles)(AddGodModal)

export default AddGodModalWrapped
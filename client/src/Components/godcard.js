import React, { Component } from 'react'
import { Card, Button } from '@material-ui/core'
import AddGodModal from '../Components/Modals/addGodModal'

class GodCard extends Component{
    constructor(props){
        super(props)
    }

    getGodInfo = async () => {
        const response = await fetch(`localhost:5000/god/${this.props.godID}`)
        const body = await response.json()

        if (response.status !== 200){
            console.log(body.message)
        }
        return body
    }
    
    render(){
        return(
            <div>
                <Card raised={true} className="godPaper">
                    {this.getGodInfo}
                </Card>
                <AddGodModal />
            </div>
        )
    }
}

export default GodCard
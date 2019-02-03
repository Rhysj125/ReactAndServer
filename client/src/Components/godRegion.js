import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class GodRegion extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: null,
            newGod: {
                name: 'Loki',
                mythology: 'Norse',
                description: 'Norse God Of Mischief',
                Weapon: 'Shape Shifting',
            }
        }
    }

    componentDidMount(){
        this.getGods()
        .then(res => this.setState({data:res.express}))
        .catch(err => console.log(err))
    }

    getGods = async () => {
        const response = await fetch(`/gods`)
        console.log(response)
        const body = await response.json()

        if (response.status !== 200){
            console.log(body.message)
        }

        return body
    }

    postGod = async () =>{
        console.log(JSON.stringify(this.state.newGod))

        const response = await fetch('/gods', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'ContentType' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(this.state.newGod),
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))

        console.log(response)
    }

    eachGod(){

    }

    render(){
        return (
            <div>
                <button onClick={this.postGod}>Press me</button>
            </div>
        )
    }
}

export default GodRegion
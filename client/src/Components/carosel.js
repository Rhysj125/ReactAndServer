import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Button, Grid} from '@material-ui/core'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

//Array of images that will be rendered in the carosel.
var images = [
    {
        backgroundImage: `url(${require("../images/Test1.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/Test2.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/test3.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/test4.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/test3.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/Test2.jpg")})`
    },

    {
        backgroundImage: `url(${require("../images/Test1.jpg")})`
    }
]

class Carosel extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentImage: 0
        }
    
        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
    }
    
    //Change the carosel image to the previous in the image array.
    //If reaches the end, will circle back around to then end.
    previousImage(){
        this.setState(prevState => ({
            currentImage: prevState.currentImage - 1 > 0 ? prevState.currentImage - 1 : images.length - 1
        }))
    }

    //Change the carosel image to the next in the image array.
    //If reaches the end, will circle back around to then beginning.
    nextImage(){
        this.setState(prevState => ({
            currentImage: prevState.currentImage + 1 < images.length ? prevState.currentImage + 1 : 0
        }))
    }

    render(){
        
        return(
            <div id="Carosel">
                <Grid container className="c-fill-x" style={images[this.state.currentImage]}>
                    <Grid item xs={1} className="c-l-btn">
                        <Button className="c-fill-x" onClick={this.previousImage}>
                            <FaChevronLeft />
                        </Button>
                    </Grid>

                    <Grid item xs={10}>
                    </Grid>

                    <Grid item xs={1} className="c-r-btn">
                        <Button className="c-fill-x" onClick={this.nextImage}>
                            <FaChevronRight />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

//const CaroselStyled = withStyles(styles)(Carosel)

export default Carosel
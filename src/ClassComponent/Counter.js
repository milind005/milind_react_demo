import React, { Component } from 'react'



class Counter extends Component {
    constructor(props) {
        super()


    }


    componentDidMount() {
        console.log("compo mounted now",)
    }
    componentDidUpdate() {
        console.log("compo updated",)
    }
    componentWillUnmount() {
        console.log("compo unmounted",)
    }
    render() {
        return (
            <div><h1>{this.props.num}</h1></div>
        )
    }
}



export default Counter

import React, { Component } from 'react'


const mountCount = 0;
const updateCount = 0;
const unMountCount = 0;
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

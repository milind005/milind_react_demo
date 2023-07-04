import react, { Component, Fragment } from "react"

class Tp extends Component {

    constructor(props) {
        super(props)


        this.timerid = null
    }

    componentDidMount() {
        console.log("mounted id:", this.props.id)
        this.timerid = setInterval(() => { console.log("this is compo:", this.props.id) }, 2000)
    }
    componentDidUpdate() {
        console.log(("compo is updated"))
    }
    componentWillUnmount() {
        console.log("compo is unmounted id:", this.props.id)
        clearInterval(this.timerid)
    }

    render() {
        return (
            <div style={{ display: "flex" }}>
                <h1>{this.props.name}</h1>
                <h1>{this.props.id}</h1>
                <button
                    onClick={() => this.props.DeleteFun(this.props.id)}
                >Delete</button>
            </div >
        )
    }
}

export default Tp

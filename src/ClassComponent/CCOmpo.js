import React, { Component } from 'react'
import Counter from './Counter';
import Tp from './LIfe';


const myData = [{ id: 1, name: "Raju" }, { id: 2, name: "sham" }, { id: 3, name: "Ram" }, { id: 4, name: "hina" }, { id: 5, name: "mina" }]
// const myData = [{ id: 1, name: "Raju" }]
export default class CCOmpo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            data: []
        }
        // this.setCount = this.setCount.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
    // setCount() {
    //   this.setState({ ...this.state, number: this.state.number + 1 })
    // }

    handleShow() {
        if (this.state.showList === false) {
            this.setState({ ...this.state, data: myData, showList: true, })
        } else {
            this.setState({ ...this.state, data: [], showList: false, })
        }
    }


    handleDelete(id) {

        const newArr = this.state.data.filter((cur) => cur.id !== id)
        this.setState({ ...this.state, data: newArr })
    }



    render() {

        const lifCOmpos = this.state.data.map((cur) => {
            return <Tp key={cur.id} name={cur.name} id={cur.id} DeleteFun={this.handleDelete} />
        })

        return (
            <div>
                {/* <h1>my {this.state.brand}</h1>
          <p>
            It is a {this.state.color} its color is {this.state.color}
            and it is {this.state.year} model
          </p>
  
          {(this.state.number > 10 && this.state.number < 15) ?
            "its Gone" : <Counter num={this.state.number} />
          }
          <button onClick={this.setCount}> Click to Add</button> */}
                <h1>class component life cycle</h1>
                <p>we set intrval interval of 2 sec to update element and if you delete the lifecycle unmout get triggered here see in console </p>
                <h1><button
                    onClick={() => { this.handleShow() }}
                >{this.state.showList ? "HIde" : "Show"}</button></h1>
                {lifCOmpos}
            </div>
        )
    }
}
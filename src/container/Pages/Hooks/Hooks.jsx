import React, { Component, useState, useEffect } from "react";
import './Hooks.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     componentDidMount() {
//         document.title = `Angka saat ini: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Angka saati ini: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = 'React Basic'
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Angka saat ini : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Angka</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Angka saati ini: ${count}`
        return () => {
            document.title = 'React Basic'
        }
    })

    return (
        <div className="p-hooks">
            <p>Angka saat ini : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Angka</button>
        </div>
    )
}

export default Hooks;
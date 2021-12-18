import React, { Component, Fragment } from 'react';
import './LifeCycleComp.css';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout( ()=> {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return (
            <Fragment>
                <p className="section-title">Life Cycle Component</p>
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />
                <p>
                    Total Order : {this.props.state.totalOrder}
                </p>
            </Fragment>
        )
    }
}

const mapStateToProduk = state => {
    return {
        order: state.totalOrder
    }
}

// Redux
// export default connect(mapStateToProduk)(LifeCycleComp);

// Context
export default GlobalConsumer(LifeCycleComp);
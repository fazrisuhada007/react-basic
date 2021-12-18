import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';
import { connect } from 'react-redux';
import { GlobalConsumer } from "../../../context/context";

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p className="section-title">Product</p>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/etanee-frozen-white.b6c98c0d.png" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

// Redux
// export default connect(mapStateToProps)(Product);

// Context
export default GlobalConsumer(Product);
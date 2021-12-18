import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/2260d807-18d5-4a2f-a2c3-94c19ef93133.png" alt="product_image" />
                </div>
                <p className="product-title">Dagingn Ayam</p>
                <p className="product-price">Rp.50.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;
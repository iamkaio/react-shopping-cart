import React, {Component} from 'react';
import formatCurrency from "../../util";

import {
    Container,
} from './styles';

class Products extends Component {
    render() {
        return (
            <div>
                <Container>
                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id}>
                                        <img src={product.image} alt={product.title}/>
                                        <p>{product.title}</p>
                                    </a>

                                    <div className="product-price">
                                        <p>{formatCurrency(product.price)}</p>
                                        <button onClick={() => this.props.addToCart(product)} className="btnBuy">
                                            add ao carrinho
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Products;
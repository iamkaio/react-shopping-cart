import React, {Component} from 'react';
import formatCurrency from "../../util";
import Modal from 'react-modal';
import './modal.css'
import {
    Container,
    ModalWrapper
} from './styles';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }


    openModal = (product) => {
        this.setState({product})
    }
    closeModal = () => {
        this.setState({product: null})
    }

    render() {
        const {product} = this.state
        return (
            <div>

                    <Container>
                    <ul className="products">
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>

                                <div className="product-price">
                                    <p>{formatCurrency(product.price)}</p>
                                    <button onClick={() => this.props.addToCart(product)} className="btnBuy">
                                        adicionar ao carrinho
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                    </Container>



                {
                    product && (
                        <Modal className="modal" isOpen={true}
                        onRequest={this.closeModal}>
                            <ModalWrapper>

                            <button className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="product-details">
                                <div className="product-detail-image">
                                    <img src={product.image} alt={product.title}/>
                                </div>
                                <div className="product-description">
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>

                                    <div className="available-sizes">
                                        <p>Tamanhos disponíveis: { " " }</p>
                                        <div className="sizes">
                                        {product.availableSizes.map((x)=>(
                                            <span>

                                                {" "}
                                                <button className="button">{x}</button>

                                            </span>
                                        ))}
                                        </div>

                                    </div>

                                    <div className="product-detail-price">
                                        <p>{formatCurrency(product.price)}</p>
                                    </div>

                                    <div className="product-detail-btn">
                                        <button onClick={() => {
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}> Add To Cart </button>
                                    </div>
                                </div>
                            </div>
                            </ModalWrapper>
                        </Modal>
                    )}
            </div>
        );
    }
}

export default Products
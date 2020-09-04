import React, {Component} from 'react';
import {
    CartWrapper,
    HeaderCart,
    PreviewCart,
    TotalCart,
    ModalCheckout
} from './styles';
import formatCurrency from "../../util";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    }


    render() {
        const {cartItems} = this.props
        return (
            <div>
                <CartWrapper>
                    <HeaderCart>
                        {cartItems.length === 0 ?
                            (<p>Carrinho vazio</p>)
                            :
                            (<p>Você tem {cartItems.length} no carrinho {" "}</p>)
                        }
                    </HeaderCart>

                    <PreviewCart>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div className="img-preview">
                                        <img src={item.image} alt={item.title}/>
                                    </div>

                                    <div className="title-preview">
                                        <span>
                                        <p>{item.title}</p>
                                        <p>{formatCurrency(item.price)}</p>
                                        <p>Qntd: {item.count}</p>
                                        </span>
                                        <button className="remove" onClick={() => this.props.removeFromCart(item)}>
                                            remove
                                        </button>
                                    </div>


                                </li>
                            ))}
                        </ul>
                    </PreviewCart>

                    <TotalCart>
                        <div className="totalPrice">
                            <span>total</span>
                            <p>
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0
                                    )
                                )}
                            </p>
                        </div>
                        <div className="buy">
                            <button onClick={()=>{this.setState({showCheckout: true})}}>Comprar</button>
                        </div>
                    </TotalCart>



                </CartWrapper>

                <ModalCheckout>
                    {this.state.showCheckout && (
                        <div className="cart">
                            <form onSubmit={this.createOrder}>
                                <ul className="form-container">
                                    <li>
                                        <label>Name</label>
                                        <input name="name" type="text" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <input name="email" type="email" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input name="address" type="text" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <button type="submit">Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    )}
                </ModalCheckout>
            </div>
        );
    }
}

export default Cart;
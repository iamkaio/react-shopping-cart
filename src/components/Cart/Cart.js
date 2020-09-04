import React, {Component} from 'react';
import {
    CartWrapper,
    HeaderCart,
    PreviewCart,
    TotalCart

} from './styles';
import formatCurrency from "../../util";

class Cart extends Component {
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
                                {formatCurrency (
                                cartItems.reduce((a,c) => a + c.price * c.count, 0
                                )
                            )}
                            </p>
                        </div>
                        <div className="buy">
                            <button>Comprar</button>
                        </div>
                    </TotalCart>
                </CartWrapper>
            </div>


        );
    }
}

export default Cart;
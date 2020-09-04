import React from 'react';
import data from "./data.json"
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: [],
            size: "",
            sort: "",
        };
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({cartItems:  cartItems.filter(x=>x._id !== product._id)})


    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();

        let alreadyInCart = false

        cartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true
            }
        });
        if (!alreadyInCart) {
            cartItems.push({...product, count: 1});
        }

        this.setState({cartItems})
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "lowest"
                        ? a.price > b.price
                        ? 1
                        : -1
                        : sort === "highest"
                        ? a.price < b.price
                            ? 1
                            : -1
                        : a._id > b._id
                            ? 1
                            : 1
                )
        }))
    }

    filterProducts = (event) => {
        //impl
        console.log(event.target.value)
        if (event.target.value === "") {
            this.setState({size: event.target.value, products: data.products})
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter(
                    (products) => products.availableSizes.indexOf(event.target.value) >= 0),
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Header/>

                <main>
                    <div className="content">
                        <div className="product_content">
                            <Filter
                                count={this.state.products.length}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            />
                            <Products products={this.state.products} addToCart={this.addToCart}/>
                        </div>

                        <div className="cart-preview">
                            <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;

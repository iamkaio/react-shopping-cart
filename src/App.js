import React from 'react';
import data from "./data.json"
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: "",
        };
    }

    sortProducts = (event)  => {
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
            this.setState({size: event.target.value , products: data.products})
        } else {
            this.setState( {
                size: event.target.value,
                products: data.products.filter(
                    (products) => products.availableSizes.indexOf(event.target.value) >= 0), });
        }


    }

    render() {
        return (
            <div className="container">
                <Header />

                <main>
                    <div className="content">
                        <div className="product_content">
                            <Filter
                                count={this.state.products.length}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                            ></Filter>
                            <Products products={this.state.products}></Products>
                        </div>

                        <div className="cart-preview">
                            Carrinho
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;

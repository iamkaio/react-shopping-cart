import React from 'react';
<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import data from "./data.json"
import Products from "./components/Products/Products";
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
                <header>
                    <a href="/">clothes.co</a>
                    <div className="cart">cart</div>
                </header>

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
                        <div className="sidebar">
                            Carrinho
                        </div>
                    </div>
                </main>

                <footer>
                    All Righrs is reserved.
                </footer>
            </div>
        );
    }
>>>>>>> Stashed changes
}

export default App;

import React, {Component} from 'react';
import {
    FilterWrapper,
    Orders
} from './styles';

class Filter extends Component {
    render() {
        return (
            <div>
                <FilterWrapper>
                    <div className="filter-results">
                        {this.props.count} Products
                    </div>

                    <Orders>
                        <div className="filter-sort">
                            <p>Order</p>
                            <select value={this.props.sort} onChange={this.props.sortProducts}>
                                <option value="">Latest</option>
                                <option value="lowest">lowest</option>
                                <option value="highest">highest</option>
                            </select>
                        </div>
                        <div className="filter-size">
                            <p>Filter</p>
                            <select value={this.props.size} onChange={this.props.filterProducts}>
                                <option value="" id="">All</option>
                                <option value="XS" id="">XS</option>
                                <option value="S" id="">S</option>
                                <option value="M" id="">M</option>
                                <option value="XL" id="">XL</option>
                                <option value="XXL" id="">XXl</option>
                            </select>
                        </div>
                    </Orders>

                </FilterWrapper>
            </div>
        );
    }
}

export default Filter;
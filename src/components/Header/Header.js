import React, {Component} from 'react';

import {
    HeaderWrapper,
} from './styles';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <a href="/">clothes.co</a>
                    <div className="cart" >cart</div>
                </HeaderWrapper>
            </div>
        );
    }
}

export default Header;
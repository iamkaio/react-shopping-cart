import React, {Component} from 'react';

import {
    HeaderWrapper,
} from './styles';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <a href="/">Case Conquer</a>
                </HeaderWrapper>
            </div>
        );
    }
}

export default Header;
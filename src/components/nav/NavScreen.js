import React from 'react';
import { Logo } from './Logo';
import { Search } from './Search';

export const NavScreen = ({ history }) => {
  
    return (
        <nav className="nav__navbar">
            <div className="nav__container">
                <Logo/>
                <Search history={ history } />
            </div>
        </nav>
    )
}

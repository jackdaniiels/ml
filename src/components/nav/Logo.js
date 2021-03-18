import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link className="nav__logo" to="hhttps://www.mercadolibre.com.co/">
          <img src={logo} width="53" height="36" className="mx-4" loading="lazy" alt="logo"/>
        </Link>
    )
}

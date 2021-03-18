import React from 'react';
import { Link } from 'react-router-dom';


export const Breadcumb = () => {
    return (
      <nav className="breadcumb__breadcumb-wrapper" aria-label="breadcumb__breadcumb-wrapper">
        <ol className="breadcumb__breadcumb">
          <li className="breadcumb__list-item">
            <Link className="breadcumb__link" to="#">Home</Link>
          </li>
          <li className="breadcumb__list-item">
            <Link className="breadcumb__link" to="#">Library</Link>
          </li>
          <li className="breadcumb__list-item breadcumb__active" aria-current="page">Data</li>
        </ol>
      </nav>
    )
}

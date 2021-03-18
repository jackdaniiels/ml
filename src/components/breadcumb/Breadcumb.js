import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../helpers/getCategories';
import { IdContext } from '../../context/IdContext';

export const Breadcumb = () => {

  const { id } = useContext(IdContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
       getCategories('MLA126843').then(({ categories }) => setCategories(categories));
      }, [id])
  
    return (
      <nav className="breadcumb__breadcumb-wrapper" aria-label="breadcumb__breadcumb-wrapper">
        <ol className="breadcumb__breadcumb">
          { 
            categories.map((category, idx) => {
            
            if(idx + 1 < categories.length) {
              return (
                <li className="breadcumb__list-item">
                  <Link className="breadcumb__link" key={ category } to="#"> { category } { idx + 1} </Link>
                </li>
              )
            } else {
              return (
                <li className="breadcumb__list-item breadcumb__active" key={ category } aria-current="page">{ category }</li>
              )
            }
          }) 
          }
        </ol>
      </nav>
    )
}

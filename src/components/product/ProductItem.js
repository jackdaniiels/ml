import React from 'react';
import  img  from '../../assets/img/car-icon.png';

export const ProductItem = ( { price, productName, city, productImg, id, history } ) => {

    const handleNavigate = () => {
        history.push(`/items/${id}`);
    }

    const formatterPeso = new Intl.NumberFormat('es-CO', {
       style: 'currency',
       currency: 'COP',
       minimumFractionDigits: 0
    });
    
    return (
     <>
        <div className="product__product_item" onClick={ handleNavigate }>
            <div className="product__product-item-img">
                <img src={ productImg } width="180" height="180" alt={ productName } />
            </div>
            <div className="product__item-description">
                <h1>
                    { formatterPeso.format(price) }
                    <img src={ img } alt="transport" />
                </h1>
                <h3> { productName } </h3>
            </div>
            <p className="product__city-location"> { city } </p>
        </div>
     </>
    )
}

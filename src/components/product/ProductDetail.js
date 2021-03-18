import React from 'react';
import { Description } from './Description';
import { Button } from '../shared/Button';

export const ProductDetail = ( { product } ) => {

  const result = product?.item;

  const sellInformation = (condition, sold_quantity) => {
   condition = condition === 'new' ? 'Nuevo' : 'Usado';
   const sold = sold_quantity === 1 ? 'Vendido' : 'Vendidos';
   return `${condition} - ${sold_quantity} ${sold}`
  };

  const formatterPeso = new Intl.NumberFormat('es-CO', {
       style: 'currency',
       currency: 'COP',
       minimumFractionDigits: 0
  });
  
  return (
     <>
      <div className="product__wrapper">
         <div className="product__card">
            <div className="product__card-content">
                <div className="product__card-img">
                  <img src={ result?.picture } alt={ result?.title } loading="lazy" alt={ result?.title } />
                </div>
                <div className="product__card-cta">
                  <p> { sellInformation(result?.condition, result?.sold_quantity) } </p>
                  <h3> { result?.title } </h3>
                  <h1> { formatterPeso.format(result?.price) } <span>00</span></h1>
                  <Button text={'Comprar'} btnClass={'base__button-primary'} type={'button'}/>
                </div>
            </div>
           <Description description={ result?.description }/>
        </div>
      </div>
    </>
    )
}

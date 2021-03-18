import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Breadcumb } from '../components/breadcumb/Breadcumb';
import { ProductItem } from '../components/product/ProductItem';
import { NavScreen } from '../components/nav/NavScreen';

export const ProductListPage = ({ history }) => {

    const { dataResults } = useContext(SearchContext);
    
    return (
        <div className="animate__animated animate__fadeIn">
            <NavScreen history={ history } />
            <Breadcumb />
            <div className="product__wrapper">
               <div className="product__card">
                {
                    dataResults.map(({ item }) => (
                      
                        <ProductItem 
                            history={history}
                            id={ item.id }
                            transport={ item.transport }
                            key={ item.id }
                            price={ item.price.amount } 
                            productName={ item.title } 
                            city={ item.city } 
                            productImg={ item.picture } 
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

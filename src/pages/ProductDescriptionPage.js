import React, { useEffect, useState } from 'react';
import { Breadcumb } from '../components/breadcumb/Breadcumb';
import { NavScreen } from '../components/nav/NavScreen';
import { ProductDetail } from '../components/product/ProductDetail';
import { getResultById } from '../helpers/getResultById';
import { useParams } from 'react-router-dom';

export const ProductDescriptionPage = ({ history }) => {
   const [product, setProduct] = useState({});
   const { id } = useParams();

   useEffect(() => {
        getResultById(id).then(result => setProduct(result))
   }, [id])

    return (
        <div className="animate__animated animate__fadeIn">
            <NavScreen history={ history } />
            <Breadcumb />
            <ProductDetail product={ product } />
        </div>
    )
}

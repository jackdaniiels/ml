import React from 'react';

export const Description = ( { description } ) => {
    return (
        <div className="description__wrapper">
            <h1>Descripción del producto</h1>
            <p> { description } </p>
        </div>
    )
}

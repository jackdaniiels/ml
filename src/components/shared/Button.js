import React from 'react';

export const Button = ({ text, btnClass, type }) => {
    return (
           <button className={ btnClass} type={type}>
              { text }
           </button>
    )
}

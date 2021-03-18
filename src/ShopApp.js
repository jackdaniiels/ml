import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter';
import { SearchContext } from './context/SearchContext';
import { IdContext } from './context/IdContext';

export const ShopApp = () => {

    const [dataResults, setDataResults] = useState([]);
    const [id, setId] = useState([]);

    return (
       <IdContext.Provider value={{ id, setId } }>
            <SearchContext.Provider value={{ dataResults, setDataResults } }>
              <AppRouter/>
            </SearchContext.Provider>
       </IdContext.Provider>
    )
}


import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter';
import { SearchContext } from './context/SearchContext';
import { DescriptionContext } from './context/DescriptionContext';

export const ShopApp = () => {

    const [dataResults, setDataResults] = useState([]);
    const [descriptionResults, setDescriptionResults] = useState([]);

    return (
       <DescriptionContext.Provider value={{ descriptionResults, setDescriptionResults } }>
            <SearchContext.Provider value={{ dataResults, setDataResults } }>
              <AppRouter/>
            </SearchContext.Provider>
       </DescriptionContext.Provider>
    )
}


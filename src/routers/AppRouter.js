import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { SearchPage } from '../pages/SearchPage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDescriptionPage } from '../pages/ProductDescriptionPage';

export const AppRouter = () => {
   
    return (
        <Router>
            <div>
                <Switch>    

                    <Route 
                        exact
                        path="/items"
                        component={ ProductListPage }
                    />

                    <Route 
                        exact
                        path="/items/:id"
                        component={ ProductDescriptionPage }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ SearchPage }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
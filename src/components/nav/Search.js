import React, { useEffect, useContext }  from 'react';
import queryString from 'query-string';
import iconSearch from '../../assets/img/ic_Search.png';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../.././context/SearchContext';
import { getResults } from '../.././helpers/getResults';

export const Search = ({ history }) => {

    const location = useLocation();
    const { setDataResults } = useContext(SearchContext);
    const { search = '' } = queryString.parse(location.search);
    const [ formValues, handleInputChange ] = useForm( { searchText: '' } );
    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchText) {
            return;
        }
        history.push(`/items?search=${searchText}`);
    };
    

    useEffect(() => { 
        getResults(search).then(results => {
            results = results.filter((result, idx) => idx < 4);
            setDataResults(results);
        });
    }, [search, setDataResults]);
    
    return (
        <>
            <form className="nav__form-search" onSubmit={ handleSearch }>
                <div className="nav__input-group">
                    <input type="text" 
                           name="searchText"
                           value={ searchText }
                           onChange={ handleInputChange }
                           autoComplete="off"
                           className="nav__form-control" 
                           placeholder="Nunca dejes de buscar"
                           aria-label="search" 
                           aria-describedby="button-search"/>
                    <button className="nav__btn nav__btn-outline-secondary" type="submit" id="button-search">
                        <img src={ iconSearch } width="20" height="20" alt="icon-search"/>
                    </button>
                </div>
            </form>
        </>
    )
}



import React from 'react';
import List from '@material-ui/core/List';
import IndividualResult from '../IndividualResult';
import './index.css';

const SearchResults = ({ results }) => {

    return (<List className="searchResults">
        {
            results.map(result => <IndividualResult key={result.cacheId} result={result} />)
        }
    </List>)
};

export default SearchResults
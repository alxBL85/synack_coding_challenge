import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './index.css'

import { availableSearchEngines } from '../../config';

const EngineSelector = ({ onSelect = ()=>{}}) => {

    const searchEngines = availableSearchEngines();
    const [selectedEngine, setSelectedEngine] = useState(searchEngines[0] || '');


    const handleSelect = (event) => {
        const { value } = event.target;
        setSelectedEngine(value);
        onSelect(value);
    }

    return (<Select id="selectSearchEngine" className="selectSearchEngine" value={selectedEngine} onChange={ handleSelect }>
        {searchEngines.map(e => <MenuItem key={e} value={e} >{e}</MenuItem>)}
    </Select>);


};

export default EngineSelector;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import EngineSelector from '../EngineSelector';
import ErrorDialog from '../ErrorDialog';
import ProgressBar from '../ProgressBar';
import SearchResults from '../SearchResults';

import './index.css';

import { requestSearchThunk, // Thunk
         getResults,         // Selector
         isLoading,          // Selector
         getError            // Selector
       } from '../../slice'

const Body = () => {

    const dispatch = useDispatch();

    // ------------ SELECTORS ---------------------------
    
    const loading = useSelector(isLoading);
    const error = useSelector(getError);
    const results = useSelector(getResults);
   

    // ------------ LOCAL STATE -------------------------

    const [searchEngine, setSearchEngine] = useState('Google');
    const [searchTerm, setSearchTerm] = useState('');
    const [timerId, setTimerId] = useState('');
    const [showErrorDialog, setShowErrorDialog] = useState(false);


    // ------------ EFFECTS -----------------------------

    useEffect(() => {
        setShowErrorDialog(error !== '');
    }, [error])

    // ------------ EVENT HANDLERS ----------------------

    const handleChange = (event) => {

        clearTimeout(timerId);

        const { value } = event.target;
        setSearchTerm(value);

        const timeOutId = setTimeout(() => {
            dispatch(requestSearchThunk({ searchEngine, searchTerm}));
        }, 500);

        setTimerId(timeOutId);
    };

    // ---------------------------------------------------

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    /**
     * This function handles the event when the user click's over one of the displayed options
     * @param {*} event 
     * @param {*} option 
     * @param {*} reason 
     */
    const handleInputChange = (event, option, reason) => {
        if (reason === 'reset' || reason === 'clear') {
            const theEvent = {
                target: {
                    value: option,
                }
            }

            handleChange(theEvent);
        }
    }

    // --------------------------------------------------------------------------

    const handleCloseErrorDialog = () => {
        setShowErrorDialog(false);
    }

    // --------------------------------------------------------------------------

    const handleSearchClick = () => {
        dispatch(requestSearchThunk({ searchEngine, searchTerm}))
    }

    // --------------------------------------------------------------------------

    const handleSelectEngine = (engine) => {
        setSearchEngine(engine);
    }

    // ---------------------  RENDER --------------------------------------------

    return (<div className='bodyContainer'>

        <ErrorDialog isOpen={showErrorDialog} message={error} handleClose={handleCloseErrorDialog} />

        <form className={"inputSearchIssue"} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Autocomplete
                id="searchInput"
                freeSolo
                className="inputTextField"
                handleHomeEndKeys
                onInputChange={handleInputChange}
                options={["hello", "world"]}
                renderInput={(params) => (
                <div>
                <Box component="span" m={1} className="searchBox">

                   <EngineSelector onSelect = { handleSelectEngine }/>

                    <TextField
                        {...params}
                        label="Search Terms"
                        margin="normal"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleChange}
                    />

                    <Button variant="contained" className="searchButton" onClick={ handleSearchClick } >Search</Button>
                </Box>  
                <ProgressBar isLoading = {loading} />     
                </div>           
                )}                
            />               
        </form>

        {
            results && <SearchResults results={results}></SearchResults>
        }
    </div>
    );
}

export default React.memo(Body);
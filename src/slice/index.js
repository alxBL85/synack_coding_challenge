import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchService } from '../services';
import { getItemsPath } from '../config';
import { getPath } from '../utils';

// ---------------------------------------------------------------

export const requestSearchThunk = createAsyncThunk('requestSearchThunk', async (data, thunkApi) => {
    const { searchEngine, searchTerm } = data;

   try {
    const response = await searchService(searchEngine, searchTerm);
    response.requestId = thunkApi.requestId;

    const itemsPath = getItemsPath(searchEngine);
    const items = getPath(response.data, itemsPath);    
    
    const extendedItems = items.map(item => {
        return {...item, searchEngine: searchEngine};
    })
   
    return {results: extendedItems };

    }
    catch( error )
    {
     return { error };
    }
});

// -------------------------------------------------------------------------------------------------

const initialState = {
  results: [],  
  isLoading: false,
  error: '',  
};

// -------------------------------------------------------------------------------------------------


export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: { },
    
    extraReducers: {

    [requestSearchThunk.pending]: (state) => {
        state.results = [];
        state.error = '';
        state.isLoading = true;        
    },

    [requestSearchThunk.fulfilled]: (state, action) => {
        state.results = action.payload.results;
        state.error = '';
        state.isLoading = false;
    },

    [requestSearchThunk.rejected]: (state, action) => {
        state.results = [];
        state.error = action.error;
        state.isLoading = false;
    },

    }
});

// ------------- Action Creators: -------------------



// ------------- Selectors: -------------------------

export const getResults = (state) => state.searchAggregator.results;
export const isLoading = (state) => state.searchAggregator.isLoading;
export const getError = (state) => state.searchAggregator.error;

// ------------- Reducer: ---------------------------

export default searchSlice.reducer;
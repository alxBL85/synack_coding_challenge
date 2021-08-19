import { configureStore } from '@reduxjs/toolkit';
import searchAggregator from '../slice';

export default configureStore({
    reducer: {
       searchAggregator,
    },
});
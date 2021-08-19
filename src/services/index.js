import axios from 'axios';
import { searchEngines } from '../config';
import { encodeParams } from '../utils';

const getService = async (url) => {

    const options = {
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await axios.get(url, options).then(res => res).catch(error => error);
        return response;
    }
    catch (error) {
        return error;
    }
};

// ---------------------------------------------------------------------------------------------------

export const searchService = async (engineName, searchTerm) => {
    try {
        const engine = searchEngines[engineName];
        const { baseUrl, queryParams, searchParam } = engine;

        const encodedParams = encodeParams({ ...queryParams, [searchParam]: searchTerm });
        const url = `${baseUrl}?${encodedParams}`;
        const response = await getService(url);
        return response;
    }
    catch (exception) {
        return { error: "invalid.engine" }
    }
}
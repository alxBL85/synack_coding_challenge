//  AIzaSyCAiqp4G0E0QuOLTn1CgNclnsYi8LDiszY 

export const searchEngines = {
    "Google": {
        baseUrl: "https://www.googleapis.com/customsearch/v1",
        queryParams: {
            key: "AIzaSyCAiqp4G0E0QuOLTn1CgNclnsYi8LDiszY",
            cx: "f817229aab9701f11",
        },
        searchParam: "q",
        backgroundColor: "orange",
        headerParams: {},
        itemsPath: "items", //from response.data, where are the items
        title: "title",
        link: "link",
    },
    "Bing": {
        baseUrl: "https://api.bing.microsoft.com/v7.0/custom/search",
        queryParams: {
            customconfig:"f0b83c3d-bb6b-43fd-ad7b-4029ae2e3e50",
            mkt: "en-US",
        },
        searchParam: "q",
        backgroundColor: "green",
        headerParams: {
            "Ocp-Apim-Subscription-Key" : "2da96020afa64026a53f83c6e450cc23",
        },
        itemsPath: "webPages.value",
        title: "name",
        link: "url", 
    }
}

export const availableSearchEngines = () => {
    const engines = Object.keys(searchEngines);
    return [...engines, "All" ];
}

export const firstSearchEngine = () => {
    const engines = Object.keys(searchEngines);
    return engines.length > 0? engines[0] : 'None';
}

const getAttribute = (engineKey, attribute) => {
    if (searchEngines[engineKey])
    {
     const engine = searchEngines[engineKey];      
     return engine[attribute]? engine[attribute]: null;
    }

    return null;
}

export const getEngineColor = (engine) => {
    return searchEngines[engine]? searchEngines[engine].backgroundColor : "gray";
}

export const getItemsPath = engine => {
    return getAttribute(engine, "itemsPath"); 
}

export const getItemTitle = engine => {
    return getAttribute(engine, "title");
}

export const getItemLink = engine => {
    return getAttribute(engine, "link");
}
//  AIzaSyCAiqp4G0E0QuOLTn1CgNclnsYi8LDiszY 

export const searchEngines = {
    "Google": {
        baseUrl: "https://www.googleapis.com/customsearch/v1",
        queryParams: {
            key: "AIzaSyCAiqp4G0E0QuOLTn1CgNclnsYi8LDiszY",
            cx: "f817229aab9701f11",
        },
        searchParam: "q",
        backgroundColor: "orange"
    },
    "Bing": {}
}

export const availableSearchEngines = () => {
    const engines = Object.keys(searchEngines);
    return [...engines, "All" ];
}

export const firstSearchEngine = () => {
    const engines = Object.keys(searchEngines);
    return engines.length > 0? engines[0] : 'None';
}

export const getEngineColor = (engine) => {
    return searchEngines[engine]? searchEngines[engine].backgroundColor : "gray";
}
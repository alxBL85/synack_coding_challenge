export const encodeParams = (params) => {
    return Object.keys(params).reduce((aggregated, key)=>{
        return `${aggregated}&${key}=${encodeURIComponent(params[key])}`
    }, "");
}

export const getPath = (object, path) => {
    const keys = path.split(".");
    console.log("keys: ", keys);
    
    let child = object;
    keys.forEach(key => child = child[key]);
    return child;
}
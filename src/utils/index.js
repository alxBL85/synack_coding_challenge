export const encodeParams = (params) => {
    return Object.keys(params).reduce((aggregated, key)=>{
        return `${aggregated}&${key}=${encodeURIComponent(params[key])}`
    }, "");
}
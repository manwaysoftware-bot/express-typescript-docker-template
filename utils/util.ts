

let isUndefined=(value:any)=>{
    return (value==undefined || value===undefined)
}

let isNull=(value:any)=>{
    return (value==null || value===null)
}

let isUndefinedOrNull=(value:any)=>{
    return (isUndefined(value) || isNull(value))
}

let isEmpty=(value:any)=>{
    if(typeof value === "string"){
        return value.trim().length === 0;
    }
    else if(typeof value === "number"){
        return value === 0;
    }else if(typeof value === "object"){
        return Object.keys(value).length === 0;
    }else if(typeof value === 'boolean'){
        return !value;
    }else if(value instanceof Map){
        return value.size === 0;
    }
    else if(Array.isArray(value)){
        return value.length === 0;
    }
    return isUndefinedOrNull(value)
}


console.log(isUndefined(null))









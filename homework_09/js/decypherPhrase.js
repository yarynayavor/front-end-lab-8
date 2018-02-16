let decypherPhrase = (obj, str) => {
    let newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[obj[prop]] = prop;
        }
    }
    obj = newObj;
    let result = cypherPhrase(obj, str);
    return result;
}
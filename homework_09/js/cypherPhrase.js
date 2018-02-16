let cypherPhrase = (obj, str) => {
    let strToArray = str.split('');
    let result = getTransformedArray(strToArray, function(element) {
        for (var prop in obj) {
            if (element === prop) {
                element = obj[prop];
            }
        }
        return element;
    });
    return result.join('');
}
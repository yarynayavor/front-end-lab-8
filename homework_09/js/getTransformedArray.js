let getTransformedArray = (array, differentFunction) => {
    let newArr = [];
    forEach(array, function(element) {
        newArr.push(differentFunction(element));
    })
    return newArr;
}
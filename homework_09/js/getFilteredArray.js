let getFilteredArray = (array, differentFunction) => {
    let newArr = [];
    forEach(array, function(element) {
        let checked = differentFunction(element);
        if (checked) {
            return newArr.push(element);
        }
    })
    return newArr;
}
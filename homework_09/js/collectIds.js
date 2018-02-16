let collectIds = (arrayOfMovies) => {
    let filteredRating = getFilteredArray(arrayOfMovies, function(element) {
        return element.rating > 3.0;
    });
    let newArr = getTransformedArray(filteredRating, function(element) {
        return element.id;
    });
    return newArr;
}
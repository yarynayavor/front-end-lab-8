let getMin = (...arguments) => {
    let min = undefined;
    for (let i = 0; i < arguments.length; i++) {
        if (min === undefined || min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}
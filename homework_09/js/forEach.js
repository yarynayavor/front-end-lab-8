 let forEach = (array, differentFunction) => {
     for (var i = 0; i < array.length; i++) {
         differentFunction(array[i])
     }
     return array;
 }
/* The task is to find out if there are any multiple values inside an array */
//The two pointer solution.
function areThereDuplicates(args) {
    //two pointer solution needs the array to be sorted
    console.log(args);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++
    }
    return false;
}

console.log(areThereDuplicates([1, 2, 2, 3]));

//Same frequency solution.
function areThereFrequency(args) {
    let collection = {};
    /* make the collection object and check if the collection(args[val]) if the key exists then add +1 to its value or start at 0. */
    for (let val in args) {
        collection(args[val]) = (collection(args[val]) || 0) + 1;
    }
    /* then loop through the object to check if any of the key has a value greater than 1 if true then there are multiples. */
    for (let key in collection) {
        if (collection[key] > 1) {
            return true;
        }
        return false;
    }


}
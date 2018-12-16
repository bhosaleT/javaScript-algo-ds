// Frequency Counter problem.
// we use an object to store values and keep track of their frequencies.
// this is useful in challenges where we compare pieces of data.

/* QUESTION : Write a function called SAME which should return true after taking in two arrays and if every value from array 1 is squared and present in array 2. Frequencies must be same. order dosent matter. 
same([1,2,3] , [4,2,9]) // true.
*/

/* PROCESS : 
-- if both arrays not of similar length return false directly.
-- Loop over array 1 and check if the indexOf exists in array2 with its value squared 
-- if value found remove it from arr2 so that we keep track of that frequency counter so we remember how many times we encountered this.
*/

//nested loop method. O(n**2)
function sameNestedLoop(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// console.log(sameNestedLoop([1, 2, 3, 2], [1, 4, 9, 4]));


/* PROCEDURE
-- first we create the frequency counter objects. 
-- which will hold keyvalue pairs with the array elements as key and their frequencies as values.
-- then we again loop over the first object and we check if the key when squared exists in the second object
-- if it does then check if their corresponding values i.e. the frequencies match if yes then return true.
*/

//Frequency Counter method O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let fc1 = {};
    let fc2 = {};
    for (let val of arr1) {
        fc1[val] = (fc1[val] || 0) + 1; 
    }
    for (let val of arr2) {
        fc2[val] = (fc2[val] || 0) + 1;
    }
    console.log(fc1, fc2);
    for (let key in fc1) {
        if (!(key ** 2 in fc2)) {
            return false;
        }
        if (fc2[key ** 2] !== fc1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));
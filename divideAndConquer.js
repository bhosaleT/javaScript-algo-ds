/* Binary Search */
//when given a big array and we have to find something specific in it we will divide into two parts and then traverse those two parts to find the value.
/* in an array of 1,2,3,4,5,6 divide it in half get the middle element and then move up or down based on how the middle value fares compared to the required value */

function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // let currentElement = arr[middle];

        if (arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
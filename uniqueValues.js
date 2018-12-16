/* QUESTION: RETURN THE NUMBER OF UNIQUE VALUES IN THE ARRAY. */

/* Space time complexity O(n) */
function uniqueValues(arr) {
    let uniqueValues = 0;
    if (arr.length === 0) {
        uniqueValues = 0;
    } else {
        uniqueValues = 1;
    }
    let left = 0;
    let right = 1;

    while (right <= arr.length - 1) {
        if (arr[left] !== arr[right]) {
            uniqueValues += 1;
            left++;
            right++;
        } else {
            left++;
            right++;
        }
    }
    return uniqueValues
}

// console.log(uniqueValues([89, 1, 1, 1, 1, 78, 45]));

/* Another solution which works for sorted arrays only */
function countUniqueValues(arr) {
    var i = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([89, 1, 1, 1, 1, 78, 45]));
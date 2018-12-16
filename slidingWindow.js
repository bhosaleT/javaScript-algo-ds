// sliding window
//in this method the idea is to make a window which can be an array or numbers starting from one position to another and depending on some condition the window increases or decreases.
//applications are largest unique string and max sum in a sub-array, this is solved when a window is specified.

/* NAiVE SOLUTION */
function maxSumArray(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity; // if the array is all of negative numbers.
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(max, temp);
    }
    return max;
}


/* SLIDING WINDOW SOLUTION O(n) */
function windowMaxSumArray(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
/* Explanation */
/* 
-- in the array 1,2,3,4,5 with a window of 2 the first two elements will come in the window lets take their sum and store it in a variable sum. to move the window ahead we basically remove the first element from the sum and add the next element. - arr[i - num] if i is sum and we remove our window from it we land on the first element. thus removing first adding next.

*/


console.log(windowMaxSumArray([2, 5, 6, 7, 4, 5], 3));
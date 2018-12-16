/* QUESTION: sumZero where it takes in a sorted array and returns the first pair which has a sum of 0. */

/* time complexity O(n**2) */
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/* Without the nested loops using the two pointers method */
/* PROCESS : we will generate two pointers one starting at the start of the array and the second one at the end of the array and then we will move them individually up or down based on the value of the sum. */

/* Time complexity O(n) */
function sumZeroOptimal(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZeroOptimal([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
/* QUESTION : ANAGRAM CHALLENGE 
-- CHECK IF THE TWO GIVEN STRINGS ARE ANAGRAM OR NOT.
*/

/* PROCEDURE
-- check if the length of both the strings are equal.
-- create an frequency tracking object.
-- loop over the first string and add each letter to the object with its frequency as a key value pair.
-- loop over the second string and check if each letter exists in our frequency counter object if it does          decrease its frequency.
-- return true. 
*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let fc = {};
    for (let val of str1) {
        let letter = str1[val];
        fc[letter] ? fc[letter] += 1 : fc[letter] = 1;
    }
    for (let val of str2) {
        let letter = str2[val];
        if (!(fc[letter])) {
            return false;
        } else {
            fc[letter] -= 1
        }
    }
    return true;
}

console.log(validAnagram('cinema', 'iceman'));
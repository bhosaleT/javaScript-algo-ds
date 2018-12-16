function sameFrequency(arg1, arg2) {
    let num1 = arg1.toString();
    let num2 = arg2.toString();

    if (num1.length !== num2.length) {
        return false;
    }
    let fc1 = {};
    let fc2 = {};
    for (let val of num1) {
        fc1[val] = (fc1[val] || 0) + 1;
    }
    for (let val of num2) {
        fc2[val] = (fc2[val] || 0) + 1;
    }
    for (let key in fc1) {
        if (fc1[key] !== fc2[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281));
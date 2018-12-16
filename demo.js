const str = "tejas";
const strArr = str.split('');
const revArr = [];
for(i = strArr.length; i >= 0; i--){
    revArr.push(strArr[i]);
}
console.log(revArr.join(''));
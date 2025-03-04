/*
    0
    ''
    null
    undefined
    NaN
    false
*/

var a = 1;
var b = 2;

var result = null || '' || undefined || 0;

console.log(result);
if (result) {
    console.log('Dieu kien dung');
}

else {
    console.log('Dieu kien sai');
}    
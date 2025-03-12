var myString = 'Hoc js tai F8!'

//keyword: JS string methods

//1. length
console.log(myString.length);

//2. find index
console.log(myString.lastIndexOf('js'));

console.log(myString.search('js'));

//3. cut string
console.log(myString.slice(-3, -1));

//4. replace
console.log(myString.replace(/js/g, 'JavaScript'));

//5. convert to upper case
console.log(myString.toUpperCase());

//6. convert to lower case
console.log(myString.toLowerCase());

//7. trim
console.log(myString.trim().length);

//8. split
var languages = 'Javascript, PHP, Ruby';

console.log(languages.split(', '));

//9. get a character by index
const myString2 = 'Quoc An';

console.log(myString2[10]);
console.log(myString2.charAt(0));


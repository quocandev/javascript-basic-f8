// object trong js

var emailKey = 'email';

var myInfo = {
    name: 'Quoc An',
    age: 21,
    address: 'Ha Noi, Viet Nam',
    [emailKey]: 'doquocan1601@gmail.com',
    getName: function () {
        return this.name;
    },
};

// Function ---> Phương thức

//Others ---> Thuộc tính

console.log(myInfo.getName());

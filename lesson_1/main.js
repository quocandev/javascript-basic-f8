//object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Do', 'Quoc An', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

author.title = 'Chia sẻ dạo tại F8'
user.conment = 'Hay quá, cảm ơn bạn đã chia sẻ';

console.log(author.getName());
console.log(user.getName());

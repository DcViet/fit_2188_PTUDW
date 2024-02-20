//Lab2_nang cao

Arrow Function:
var addNumber = (a, b) => {
    return a + b;
}
x = addNumber(1, 2);

//Đối tượng:
var student = {  //object name
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    hieght: 170,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
student.age = 19;
student[age]++;
name = student.fullName();

//Định nghĩa thư viện module
//Random.js
function random(min, max) {
    return min + Math.random() * (max - min);
}
module.export = random;
//Controller.js
var controller = {};
controller.add = (x, y) => x + y;
controller.subtract = (x, y) => x - y;
module.exports = controller;

//Using.js
var random = require('./Random");
console.log(random(0, 10));

var controller = require('./Controller');
console.log(controller(2, 3));
console.log(controller(4, 6));

//Xử lý bất đồng bộ
//Sử dụng  Callback
function add(x, y, callback) {
    setTimeout(() => {
        callback(x + y);
    }, 1000);
}
add(2, 3, x => console.log(x));

//Sử dụng Promise
function add(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y);
        }, 1000);
    });
}
add(2, 3).then(x => console.log(x));

//Sử dụng Async - Await
async function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 1000);
    });
}
async function add(x, y) {
    return await asyncThing(x + y);
}

(async function () {
    let x = await add(2, 3);
    console.log(x);
})();
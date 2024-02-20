//Ex01.js
var age =18; //number
var name = "Jane"; //string
var name = {first: "Jane", last: "Doe"}; //object
var truth = false; //boolean
var sheets = ["HTML","CSS","JS"]; //array
var a; typeof a; //undefined
var a = null; // value null

// Cấu trúc điều khiển
//If-Else

if ((age >=14) && (age < 19)) {
	status = "Eligible.";
}else {
	status = "Not eligible.";
}

//Switch 

switch (new Date().getDay()) {
	case 6: 
		text = "Saturday";
		break;
case 0:
text = "Sunday";
break;
default: 
text = "Whatever";
}

//Vòng lặp
//For
var sum = 0;
for (var i = 0; i< a.length; i++) {
sum += a[i];
} //parsing an array

//While
var i = 1;
while (i<100) {
i*=2;
console.log(i + ",");
}

//Do While 
var i = 1;
do { 
i*=2;
console.log(i + ",");
}while (i<100);

//Khai báo hàm
function addNumbers(a,b) {
return a + b; ;
}
x = addNumbers(1,2);

//Đối tượng
var student = {  //object name
firstName:"Jane", //list of properties
lastName:"Doe",
age:18,
height:170,
fullName : function() {  // object function
return this.firstName + " " +this.lastName;
}
};
student.age = 19; //setting value
student[age]++;  //incrementing
name = student.fullName(); //call object function

//Sắp xếp mảng
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b) {return a - b});
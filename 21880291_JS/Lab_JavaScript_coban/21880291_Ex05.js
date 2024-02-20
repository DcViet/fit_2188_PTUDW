//Ex05.js
//Ex05-SortObjects
// Định nghĩa các đối tượng student
let students = [
    { firstName: "John", lastName: "Doe", age: 21, height: 175 },
    { firstName: "Alice", lastName: "Smith", age: 19, height: 165 },
    { firstName: "Bob", lastName: "Johnson", age: 20, height: 180 }
];

// Sắp xếp mảng theo tuổi tăng dần
students.sort(function(a, b) {
    return a.age - b.age;
});

// Xuất kết quả ra console
console.log("Danh sách sinh viên theo tuổi tăng dần:");
students.forEach(function(student) {
    console.log(student.firstName + " " + student.lastName + " - Tuổi: " + student.age);
});

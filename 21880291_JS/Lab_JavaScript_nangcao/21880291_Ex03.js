// Ex03-StudentController.js
const { random } = require('./Ex02-Random');

function generate(students) {
    students.forEach(student => {
        student.subjects.forEach(subject => {
            subject.score = random(0, 10); // Giả sử điểm từ 0 đến 10
        });
    });
}

function average(students) {
    students.forEach(student => {
        let sum = student.subjects.reduce((acc, subject) => acc + subject.score, 0);
        student.averageScore = sum / student.subjects.length;
    });
}

function normalize(students) {
    students.forEach(student => {
        student.subjects.forEach(subject => {
            subject.score = parseFloat(subject.score.toFixed(2)); // Làm tròn điểm về 2 chữ số thập phân
        });
    });
}

module.exports = { generate, average, normalize };

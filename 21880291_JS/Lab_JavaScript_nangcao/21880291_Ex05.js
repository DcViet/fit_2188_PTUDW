// Ex05-SlowStudentController.js
const { slowRandom } = require('./Ex04-SlowRandom');

async function generate(students) {
    for (let student of students) {
        for (let subject of student.subjects) {
            subject.score = await slowRandom(0, 10); // Gọi hàm slowRandom để phát sinh điểm ngẫu nhiên
        }
    }
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

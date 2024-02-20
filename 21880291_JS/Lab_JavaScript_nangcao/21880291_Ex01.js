// Ex01-Main.js
// Định nghĩa một mảng đối tượng chứa danh sách sinh viên
const students = [
    {
        studentID: "SV001",
        fullName: "Nguyễn Văn A",
        subjects: [
            { subjectName: "Toán", score: 0 },
            { subjectName: "Văn", score: 0 },
            { subjectName: "Anh", score: 0 }
        ]
    },
    {
        studentID: "SV002",
        fullName: "Trần Thị B",
        subjects: [
            { subjectName: "Toán", score: 0 },
            { subjectName: "Văn", score: 0 },
            { subjectName: "Anh", score: 0 }
        ]
    },
    {
        studentID: "SV003",
        fullName: "Lê Văn C",
        subjects: [
            { subjectName: "Toán", score: 0 },
            { subjectName: "Văn", score: 0 },
            { subjectName: "Anh", score: 0 }
        ]
    }
];

// Xuất thông tin danh sách sinh viên ra màn hình
console.log("Thông tin danh sách sinh viên:");
console.log(JSON.stringify(students, null, 2));

module.exports = { students };

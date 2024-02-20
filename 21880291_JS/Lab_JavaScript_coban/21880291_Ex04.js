//Ex04.js
//Ex04-Average
function average(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Test các trường hợp
console.log(average([0])); // Kết quả: 0
console.log(average([1,2,3])); // Kết quả: 2
console.log(average([1,2,3,4])); // Kết quả: 2.5
console.log(average([1,4,4,4,1])); // Kết quả: 2.8
console.log(average([-12,-13,512,1337])); // Kết quả: 461

//Ex02.js
//Ex02-FindTheLargest
function getLargest(a, b, c) {
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    return largest;
}

console.log(getLargest(2, 3, 4)); // Kết quả: 4
console.log(getLargest(4, 3, 2)); // Kết quả: 4
console.log(getLargest(3, 4, 2)); // Kết quả: 4
console.log(getLargest(3, 2, 4)); // Kết quả: 4
console.log(getLargest(17, 1, 8)); // Kết quả: 17
console.log(getLargest(5, 5, 9)); // Kết quả: 9
console.log(getLargest(1, 22, 3)); // Kết quả: 22
console.log(getLargest(88, 87, 86)); // Kết quả: 88
console.log(getLargest(4, 2, 3)); // Kết quả: 4

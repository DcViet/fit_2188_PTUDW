// Ex04-SlowRandom.js

function slowRandom(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() * (max - min) + min;
            resolve(result);
        }, 1000); // Trì hoãn 1 giây trước khi trả về kết quả
    });
}

module.exports = { slowRandom };

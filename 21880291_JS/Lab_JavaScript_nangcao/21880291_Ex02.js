// Ex02-Random.js

function random(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = { random };

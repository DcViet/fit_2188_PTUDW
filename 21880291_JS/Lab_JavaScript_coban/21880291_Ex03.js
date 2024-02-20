//Ex03.js 
//Ex03-Fibonacci
function printFibonacci(num) {
    let a = 0, b = 1;
    let fibSeries = [a, b];

    for (let i = 2; i < num; i++) {
        let c = a + b;
        fibSeries.push(c);
        a = b;
        b = c;
    }

    return fibSeries;
}

let fibonacciSequence = printFibonacci(30);
console.log("30 số đầu tiên của dãy Fibonacci là:");
console.log(fibonacciSequence);

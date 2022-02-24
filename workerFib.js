
addEventListener('message', messageReceived2);

function messageReceived2(event) {
    let numberToReach = event.data;
    let fibonacciSequence = calculateFibonacci1(numberToReach);
    postMessage(fibonacciSequence);
}



function calculateFibonacci1(number) {
    let array = [];
    let n1 = 0;
    let n2 = 1;
    let n3;
    for (let i = 0; i < number; i++) {
        array.push(n1);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return array;
}

// function calculateFibonacci(n) {
//     if (n === 0) {
//         return 0;
//     }
//     else if (n === 1) {
//         return 1;
//     }

//     let x = 0;
//     let y = 1;
//     for (let i = 2; i < n + 1; i++) {
//         y = x + y;
//         x = y - x;
//     }
//     return x + y;
// }
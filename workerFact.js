addEventListener('message', messageReceived);

function messageReceived(event) {
    let numberToReach = event.data;
    let factorialNumber = calculateFactorial1(numberToReach);
    postMessage([factorialNumber]);
}


// let f0 = 1;
// let numero_1 = 1;
// let array = [];

// function calculateFactorial1(numero) {
//     if (numero === 0) {
//         return 1;
//     }
//     for (let i = 1; i < numero; i++) {
//         f0 = (i * numero_1);
//         array.push(f0);
//         numero_1 = f0;
//     }
//     return array;
// }



function calculateFactorial1(num) {
  if (num === undefined) {
    return "N/A"
  }
  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}





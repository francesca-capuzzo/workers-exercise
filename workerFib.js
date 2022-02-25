
addEventListener('message', messageReceived2);

function messageReceived2(event) {
    let numberToReach = event.data;
    let fibonacciSequence = calculateFibonacci1(numberToReach);
    postMessage(fibonacciSequence);
}



function calculateFibonacci1(number) {
    if (number === undefined) {
        return "N/A"
    }
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




// addEventListener('message', messageReceived2);

// function messageReceived2(event) {
//     let numberToReach = event.data;
//     let fibonacciSequence = calculateFibonacci2(numberToReach);
//     // postMessage({completed: true, result: fibonacciSequence}); //--> message senza progression 
//     postMessage({completed: true, result: fibonacciSequence, progression: 100});
// }

// function calculateFibonacci2(number) { //posto il risultato un po' alla volta
//     if (number === undefined) {
//         return "N/A"
//     }
//     let array = [];
//     let n1 = 0;
//     let n2 = 1;
//     let n3;
//     const fraction = Math.ceil(number / 10); 
//     for (let i = 0; i < number; i++) {
//         array.push(n1);
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//         // postMessage({completed: false, result: n1});   //--> aggiungo sotto l'IF per dare oltre che il risultato parziale, anche l'avanzamento.
//         if (i % fraction === 0) {
//             postMessage({completed: false, result: n1, progression: (Math.floor(i / fraction) - 1) * 10});   //così facendo restituisce anche l'avanzamento del risultato. 
//         }
//     }
//     return array;
// }

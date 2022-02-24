const workerPrime = new Worker("./workerPrime.js");
workerPrime.addEventListener('message', messageReceived);
workerPrime.postMessage(100);

function messageReceived(event) {
    let primeNumber = event.data;
    let par = document.getElementById('result-prime');
    for (const prime of primeNumber) {
        const node = document.createTextNode(' ' + prime + ' ');
        par.appendChild(node)
    }
}


const workerFib = new Worker("./workerFib.js");
workerFib.addEventListener('message', messageReceived2);
workerFib.postMessage(100);

function messageReceived2(event) {
    let fibonacciSequence = event.data;
    let par = document.getElementById('result-Fibonacci');
    for (const number of fibonacciSequence) {
        const node = document.createTextNode(' ' + number + ' ');
        par.appendChild(node);
    }
}
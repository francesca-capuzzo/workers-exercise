
function inputValue() {
    const input = document.getElementsByName('inputNumber')[0];
    return input.value;
}

function clearScreen(id) {
    let par = document.getElementById(id);
    par.innerHTML = '';
}


function calculatePrime() {
    clearScreen('result-prime');
    let loader = document.getElementById('loader');
    loader.style.display = 'inline-block';
    
    const workerPrime = new Worker("./workerPrime.js");
    workerPrime.addEventListener('message', (event) => {
        loader.style.display = 'none';
        let primeNumber = event.data;
        let par = document.getElementById('result-prime');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        for (const prime of primeNumber) {
            const node = document.createTextNode(' ' + prime + ' ');
            par.appendChild(node);
        }
    })
    workerPrime.postMessage(inputValue());
}



function calculateFibonacci() {
    clearScreen('result-Fibonacci');
    let loader2 = document.getElementById('loader2');
    loader2.style.display = 'inline-block';
   
    const workerFib = new Worker("./workerFib.js");
    workerFib.addEventListener('message', (event) => {
        loader2.style.display = 'none';
        let fibonacciSequence = event.data;
        let par = document.getElementById('result-Fibonacci');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        for (const number of fibonacciSequence) {
            const node = document.createTextNode(' ' + number + ' ');
            par.appendChild(node);
        }
    });
    workerFib.postMessage(inputValue());
}




function calculateFactorial() {
    clearScreen('result-factorial');
    let loader3 = document.getElementById('loader3');
    loader3.style.display = 'inline-block';
    
    const workerFact = new Worker('./workerFact.js');
    workerFact.addEventListener('message', (event) => {
        loader3.style.display = 'none'
        let factorialNumber = event.data;
        let par = document.getElementById('result-factorial');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        const node = document.createTextNode(' ' + factorialNumber + ' ');
        par.appendChild(node);
    });
    workerFact.postMessage(inputValue());
}






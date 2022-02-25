//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    loader.style.display = 'block';
    
    const workerPrime = new Worker("./workerPrime.js");
    workerPrime.addEventListener('message', (event) => {
        let primeNumber = event.data;
        loader.style.display = 'none';
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


function calculateFactorial() {
    clearScreen('result-factorial');
    let loader2 = document.getElementById('loader2');
    loader2.style.display = 'block';
    
    const workerFact = new Worker('./workerFact.js');
    workerFact.addEventListener('message', (event) => {
        
        let factorialNumber = event.data;
        loader2.style.display = 'none'
        let par = document.getElementById('result-factorial');
        const result = document.createTextNode("Result: ");
        par.appendChild(result);
        const node = document.createTextNode(' ' + factorialNumber + ' ');
        par.appendChild(node);
    });
    workerFact.postMessage(inputValue());
}



function calculateFibonacci() {
    clearScreen('result-Fibonacci');
    let loader3 = document.getElementById('loader3');
    loader3.style.display = 'block';
   
    const workerFib = new Worker("./workerFib.js");
    workerFib.addEventListener('message', (event) => {
        
        let fibonacciSequence = event.data;
        loader3.style.display = 'none';
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




//NB IL CALLBACK DELLE FUNZIONI EVENTS PRENDE SOLO UN PARAMETRO (event) --> se ne deve prendere di più, va scritta come lambda.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///correzione;

function getNumberFromInput(inputId) {
    const inputValue = document.getElementById(inputId).value;
    if (!isNaN(inputValue)) {
        const number = parseInt(inputValue);
        return number;
    } else{
        return NaN;
    }
}


function calculatePrime() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const primeWorker = new Worker('./workerPrime.js');
        // primeWorker.addEventListener('message', writeResult(event, 'result-prime'))
        primeWorker.addEventListener('message',(event) => {
            writeResultInPar(event, 'result-prime');
            stopLoader('loader');
        });
        startLoader('loader');
        primeWorker.postMessage(numb);
    }
}
// function writeResult(event) {
// }


function calculateFactorial() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const factWorker = new Worker('./workerFact.js');
        factWorker.addEventListener('message',(event) => {
            writeResultInPar(event, 'result-factorial');
            stopLoader('loader2');
        });
        // factWorker.addEventListener('error', (event) => console.log(event));    //AGGIUNGO QUESTA LINEA PERCHè CON IL FATTORIALE RICORSIVO, SI GENERA UN ERRORE E VORREI LOGGARLO. --> 
        factWorker.addEventListener('error', (event) =>{
            stopLoader('loader2');
            writeErrorInPar(event, 'result-factorial');
        }); 
        startLoader('loader2');
        factWorker.postMessage(numb);
    }
}



function calculateFibonacci() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const fibWorker = new Worker('./workerFib.js');
        fibWorker.addEventListener('message',(event) => {
            writeResultInPar(event, 'result-Fibonacci');
            stopLoader('loader3');
        });
        startLoader('loader3');
        fibWorker.postMessage(numb);
    }
}

// function calculateFibonacci() {
//     const numb = getNumberFromInput('input');
//     if (!isNaN(numb)) {
//         const fibWorker = new Worker('./workerFib.js');
//         fibWorker.addEventListener('message',(event) => {
//             writeResultInPar(event.data.result, 'result-Fibonacci');
//             if (event.data.completed) {
//                 stopLoader('loader3'); 
//             }
//         });
//         startLoader('loader3');
//         fibWorker.postMessage(numb);
//     }
// }

// function writeResultInPar(result, parId){                                //--> mettendo result al posto di event, quando chiamo la funzione dovrò usare event.data anzichè solo event!!!
//     const par = document.getElementById(parId);
//     par.innerHTML = ' ';        //ripulisco il paragrafo direttamente qui 
//     for (const num of result) {
//         let node = document.createTextNode(' ' + num + ' ');
//         par.appendChild(node);
//     }
// }


function writeErrorInPar(event, parId) { //utilizzata per il fattoriale con ricorsione che da un errore nella console ma non nell'index.
    const par = document.getElementById(parId);
    par.innerHTML = ' ';
    const message = event.message;
    const textNode = document.createTextNode(message);
    par.appendChild(textNode);
}


function writeResultInPar(event, parId){
    const par = document.getElementById(parId);
    par.innerHTML = ' ';        //ripulisco il paragrafo direttamente qui 
    const result = event.data;
    for (const num of result) {
        let node = document.createTextNode(' ' + num + ' ');
        par.appendChild(node);
    }
}

function startLoader(loaderId) { //sempre prima di mandare il messaggio al worker
    let loader = document.getElementById(loaderId);
    loader.style.display = 'block';
}


function stopLoader(loaderId) { //quando ci arriva il messaggio del worker, 
    let loader = document.getElementById(loaderId);
    loader.style.display = 'none';
}


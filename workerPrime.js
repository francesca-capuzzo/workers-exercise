addEventListener('message', messageReceived);

function messageReceived(event) {
    let numberToReach = event.data;
    let primeNumber = calculatePrime1(numberToReach);
    postMessage(primeNumber);
}


function calculatePrime1(number) {
    let array = Array.from({length: number - 2}, (v, i) => i + 3);
    return array.reduce((p, c) => p.some(element => c % element === 0) ? p : [...p,c], [2]);
}

function calculateFactorial(numero) {

    if (numero === 0) {
        return 1;
    }
    return numero * calculateFactorial(numero - 1);
}


// let f0 = 1;
// let numero_1 = 1;

// function fattorialeNonRicorsivo(numero) {
//     if (numero === 0) {
//         return 1;
//     }
//     for (let i = 1; i <= numero; i++) {

//         console.log(f = i * numero_1);
//         numero_1 = f;
//     }
//     return f;
// }
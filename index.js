//Iteraciones Pair Programming
//Arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones
function suma(a, b) {
    return a + b;
}

function potenciacion(a, b) {
    return a ** b;
}

function separarPalabras(str) {
    return str.split(' ');
}

function repetirString(str, n) {
    return str.repeat(n);    
}

function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//Arrays y funciones

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

function obtenerPares(arr) {
    return arr.filter(n => n % 2 === 0);
}

function pintarArray(arr) {
    let str = '[';
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) str += arr[i] + ', ';
        else str += arr[i];
    }
    return str += ']';
}

function arrayMapi(arr, f) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(f(arr[i]));
    }
    return result;
}

function eliminarDuplicados(arr) {
    let newArr = [...new Set(arr)];
    return newArr;
}

//Iteraciones proyecto

//Arrays
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones
function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function esPar(n) {
    return n % 2 === 0 ? true : false;
}

let arrayFunciones = [function suma(a, b) {
    return a + b;
}, function resta(a, b) {
    return a - b;
}, function multiplicacion(a, b) {
    return a * b;
}];

//Mezclando arrays y funciones

function ordenarArray2(arr) {
    return arr.sort((a, b) => b - a);
}

function obtenerImpares(arr) {
    return arr.filter(n => n % 2 !== 0);
}

function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

function multiplicarArray(arr) {
    let suma = 1;
    for (let i = 0; i < arr.length; i++) {
        suma *= arr[i];
    }
    return suma;
}




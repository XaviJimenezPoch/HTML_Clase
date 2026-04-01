let num1 = prompt("Ingrese el primer número:");
// num1 = parseFloat(num1); 
let num2 = prompt("Ingrese el segundo número:");
// num2 = parseFloat(num2);

if (num1 > num2) {
    console.log("El primer número es mayor que el segundo.");
} else if (num1 < num2) {
    console.log("El segundo número es mayor que el primero.");
} else {
    console.log("Los números son iguales.");
}

let num3 = prompt("Ingrese el tercer número:");
if (typeof num3 === 'number') {
    num3 = parseFloat(num3);
} else {
    console.log("El tercer valor no es un número.");
}
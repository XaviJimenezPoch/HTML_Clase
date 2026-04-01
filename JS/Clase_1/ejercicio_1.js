// 1
// Pedir con prompt:
// ● Edad
// ● Nivel (junior, mid, senior)
// ● Número favorito

let edad = prompt("Ingrese su edad:");
let nivel = prompt("Ingrese su nivel (junior, mid, senior):");
let numeroFavorito = prompt("Ingrese su número favorito:");

// 2
// Genera letra
// ● 18–35 → "A"
// ● 36–60 → "B"
// ● 60 → "C"

if (edad < 18) {
  console.log("X");
} else if (edad >= 18 && edad <= 35) {
  console.log("A");
} else if (edad >= 36 && edad <= 60) {
  console.log("B");
} else if (edad > 60) {
  console.log("C");
}

// 3
// Genera numero
// Según nivel:
// ● junior → 1
// ● mid → 2
// ● senior → 3

if (nivel === "junior") {
  console.log(1);
} else if (nivel === "mid") {
  console.log(2);
} else if (nivel === "senior") {
  console.log(3);
}

// 4
// Genera numero    
// ● Si número favorito es par → multiplicar ×2
// ● Si es impar → sumar +5

if (numeroFavorito % 2 === 0) {
  console.log(numeroFavorito * 2);
} else {
  console.log(numeroFavorito + 5);
}


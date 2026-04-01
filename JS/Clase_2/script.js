function saludar(nombre, edad) {
  alert("Hola " + nombre + ", tu edad es " + edad);
}

saludar("Xavi", 27);
saludar("Marta", 30);
saludar("Pablo", 35);






function calcularMayor(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

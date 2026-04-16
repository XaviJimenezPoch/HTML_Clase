class Calculator {
  constructor() {
    this.pantalla = document.getElementById("inputID");
    this.valorActual = "0";
    this.valorAnterior = "";
    this.operacion = null;
    this.debeReestablecerse = false;
  }

  agregarNumero(numero) {
    if (this.debeReestablecerse) {
      this.valorActual = String(numero);
      this.debeReestablecerse = false;
    } else {
      if (numero === "." && this.valorActual.includes(".")) {
        return;
      }
      this.valorActual =
        this.valorActual === "0" && numero !== "."
          ? String(numero)
          : this.valorActual + numero;
    }
    this.actualizarPantalla();
  }

  setOperacion(op) {
    if (this.valorActual === "") return;

    if (this.valorAnterior !== "") {
      this.calcular();
    }

    this.operacion = op;
    this.valorAnterior = this.valorActual;
    this.debeReestablecerse = true;
  }

  calcular() {
    if (!this.operacion || this.valorAnterior === "") return;

    let resultado;
    const anterior = parseFloat(this.valorAnterior);
    const actual = parseFloat(this.valorActual);

    switch (this.operacion) {
      case "+":
        resultado = anterior + actual;
        break;
      case "-":
        resultado = anterior - actual;
        break;
      case "*":
        resultado = anterior * actual;
        break;
      case "/":
        if (actual === 0) {
          this.valorActual = "Error";
          this.actualizarPantalla();
          this.limpiar();
          return;
        }
        resultado = anterior / actual;
        break;
      default:
        return;
    }

    this.valorActual = String(resultado);
    this.operacion = null;
    this.valorAnterior = "";
    this.debeReestablecerse = true;
    this.actualizarPantalla();
  }

  igual() {
    if (!this.operacion) return;
    this.calcular();
  }

  limpiar() {
    this.valorActual = "0";
    this.valorAnterior = "";
    this.operacion = null;
    this.debeReestablecerse = false;
    this.actualizarPantalla();
  }

  cambiarSigno() {
    this.valorActual = String(parseFloat(this.valorActual) * -1);
    this.actualizarPantalla();
  }

  calcularPorcentaje() {
    this.valorActual = String(parseFloat(this.valorActual) / 100);
    this.actualizarPantalla();
  }

  alCuadrado() {
    this.valorActual = String(Math.pow(parseFloat(this.valorActual), 2));
    this.actualizarPantalla();
  }

  alCubo() {
    this.valorActual = String(Math.pow(parseFloat(this.valorActual), 3));
    this.actualizarPantalla();
  }

  raizCuadrada() {
    const num = parseFloat(this.valorActual);
    if (num < 0) {
      this.valorActual = "Error";
    } else {
      this.valorActual = String(Math.sqrt(num));
    }
    this.actualizarPantalla();
  }

  insertarPI() {
    this.valorActual = String(Math.PI);
    this.actualizarPantalla();
  }

  actualizarPantalla() {
    this.pantalla.value = this.valorActual;
  }
}

const calculadora = new Calculator();

function add(numero) {
  calculadora.agregarNumero(numero);
}

function operacionFunction(operador) {
  calculadora.setOperacion(operador);
}

function igual() {
  calculadora.igual();
}

function cleanInput() {
  calculadora.limpiar();
}

function inverso() {
  calculadora.cambiarSigno();
}

function porciento() {
  calculadora.calcularPorcentaje();
}

function cuadrado() {
  calculadora.alCuadrado();
}

function cubo() {
  calculadora.alCubo();
}

function raiz() {
  calculadora.raizCuadrada();
}

function pi() {
  calculadora.insertarPI();
}
const agenda = [
  {
    id: 1,
    nombre: "Ana López",
    telefono: "600123123",
    email: "ana@mail.com",
    empresa: "TechSoft",
  },
  {
    id: 2,
    nombre: "Carlos Pérez",
    telefono: "699456456",
    email: "carlos@mail.com",
    empresa: "Innova",
  },
];

function mostrarContactos() {
  const tbody = document.getElementById("tablaContactos");
  tbody.innerHTML = "";
  agenda.forEach((contacto) => {
    tbody.innerHTML += `
<tr>
<td>${contacto.nombre}</td>
<td>${contacto.telefono}</td>
<td>${contacto.email}</td>
<td>${contacto.empresa}</td>
<td>

<button class="btn btn-danger btn-sm"
onclick="eliminarContacto(${contacto.id})">
Eliminar
</button>
</td>
</tr>
`;
  });
}
mostrarContactos();

function agregarContacto() {
  const contacto = obtenerDatosFormulario();
  if (!contacto) return;
  agenda.push(contacto); // 👉 push
  limpiarFormulario();
  mostrarContactos();
}

function agregarUrgente() {
  const contacto = obtenerDatosFormulario();
  if (!contacto) return;
  agenda.unshift(contacto); // 👉 unshift
  limpiarFormulario();
  mostrarContactos();
}

function deshacerUltimo() {
  if (agenda.length === 0) return;
  agenda.pop(); // 👉 pop
  mostrarContactos();
}

function atenderPrimero() {
  if (agenda.length === 0) return;
  agenda.shift(); // 👉 shift
  mostrarContactos();
}

function eliminarContacto(id) {
  const index = agenda.findIndex((c) => c.id === id);
  if (index !== -1) {
    agenda.splice(index, 1);
    mostrarContactos();
  }
}

function obtenerDatosFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  if (!nombre || !telefono || !email || !empresa) {
    alert("Todos los campos son obligatorios");

    return null;
  }
  return {
    id: Date.now(),
    nombre,
    telefono,
    email,
    empresa,
  };
}
function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("empresa").value = "";
}

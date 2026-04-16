const ciudades = ["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"];
const tipos = ["Apartamento", "Casa", "Villa", "Loft"];
const extras = ["con piscina", "moderno", "en el centro", "de lujo"];

function generarAlojamientos(cantidad = 1000) {
  return Array.from({ length: cantidad }, (_, i) => {
    return {
      id: i,
      titulo: `${tipos[Math.floor(Math.random()*tipos.length)]} en ${
        ciudades[Math.floor(Math.random()*ciudades.length)]
      } ${extras[Math.floor(Math.random()*extras.length)]}`,
      precio: `${Math.floor(Math.random()*200 + 50)}€/noche`,
      img: `https://picsum.photos/400/300?random=${i}`
    };
  });
}

const alojamientos = generarAlojamientos(1000);

// ==============================
// 💾 GUARDAR JSON
// ==============================

const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "alojamientos.json");
fs.writeFileSync(outputPath, JSON.stringify(alojamientos, null, 2), "utf-8");
console.log(`✅ Archivo generado: ${outputPath}`);
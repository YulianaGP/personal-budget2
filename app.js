// Historias de Usuario
// 1. Como usuario, quiero registrar ingresos y egresos con nombre, tipo y monto, para llevar un control de mis finanzas.
// 2. Como usuario, quiero ver el saldo total, ingreso y egreso más alto, para entender mejor mi situación financiera.
// 3. Como usuario, quiero eliminar movimientos por nombre, para poder corregir errores o actualizar registros.
// 4. Como usuario, quiero buscar un movimiento por nombre, para verificar si ya fue registrado.
// 5. Como usuario, quiero ordenar los movimientos por monto descendente, para ver cuáles son los más grandes.
// 6. Como usuario, quiero ver sólo los nombres de los movimientos de ingreso, para enfocarme en mis fuentes de ingreso.

let movimientos = [];

function registrarMovimiento() {
  while (true) {
    let nombre = prompt("Control de ingresos y egresos:\nIngrese el nombre del movimiento:");
    if (!nombre) {
      alert("El nombre no puede estar vacío.");
      continue;
    }

    let tipo = prompt("Tipo de movimiento (Ingreso/Egreso):").toLowerCase();
    if (tipo !== "ingreso" && tipo !== "egreso") {
      alert("El tipo debe ser 'Ingreso' o 'Egreso'.");
      continue;
    }

    let monto = parseFloat(prompt("Monto:"));
    if (isNaN(monto) || monto <= 0) {
      alert("El monto debe ser un número mayor que cero.");
      continue;
    }

    movimientos.push({ nombre, tipo, monto });

    let continuar = prompt("¿Registrar otro movimiento? (si/no):").toLowerCase();
    if (continuar !== "si") break;
  }
}

// Funciones puras
function obtenerNombresDeMovimientos(movs) {
  return movs.map(m => m.nombre);
}

function filtrarEgresosMayoresA100(movs) {
  return movs.filter(m => m.tipo === "egreso" && m.monto > 100);
}

function buscarMovimientoPorNombre(movs, nombreBuscado) {
  return movs.find(m => m.nombre.toLowerCase() === nombreBuscado.toLowerCase());
}

function ordenarPorMontoDesc(movs) {
  return [...movs].sort((a, b) => b.monto - a.monto);
}

function nombresDeIngresos(movs) {
  return movs.filter(m => m.tipo === "ingreso").map(m => m.nombre);
}

function calcularTotalSaldo() {
  return movimientos.reduce((saldo, mov) => {
    return saldo + (mov.tipo === "ingreso" ? mov.monto : -mov.monto);
  }, 0);
}

function mostrarResumen() {
  let totalIngresos = movimientos
    .filter(m => m.tipo === "ingreso")
    .reduce((acc, m) => acc + m.monto, 0);

  let totalEgresos = movimientos
    .filter(m => m.tipo === "egreso")
    .reduce((acc, m) => acc + m.monto, 0);

  let mayorIngreso = movimientos
    .filter(m => m.tipo === "ingreso")
    .reduce((max, m) => (m.monto > max.monto ? m : max), { nombre: "-", monto: 0 });

  let mayorEgreso = movimientos
    .filter(m => m.tipo === "egreso")
    .reduce((max, m) => (m.monto > max.monto ? m : max), { nombre: "-", monto: 0 });

  const saldo = calcularTotalSaldo();
  const egresos100 = filtrarEgresosMayoresA100(movimientos);

  // Solicitar al usuario que ingrese el nombre del movimiento a buscar
  const nombreABuscar = prompt("Buscar movimiento por nombre:").toLowerCase();
  const movimientoBuscado = buscarMovimientoPorNombre(movimientos, nombreABuscar);

  // Mostrar en consola
  console.log("\n📋 Resumen Final:");
  console.log("-----------------------");
  console.log(`Total de movimientos registrados: ${movimientos.length}`);
  console.log(`Saldo total: $${saldo.toFixed(2)}\n`);

  console.log("Desglose por tipo:");
  console.log(`- Ingresos: $${totalIngresos.toFixed(2)}`);
  console.log(`- Egresos : $${totalEgresos.toFixed(2)}\n`);

  console.log(`Ingreso más alto: ${mayorIngreso.nombre} - $${mayorIngreso.monto.toFixed(2)}`);
  console.log(`Egreso más alto : ${mayorEgreso.nombre} - $${mayorEgreso.monto.toFixed(2)}\n`);

  console.log("Egresos mayores a $100:");
  console.log(egresos100.length > 0 ? egresos100 : "No hay egresos mayores a $100.");

  console.log(`\nBuscar movimiento por nombre: '${nombreABuscar}'`);
  console.log("Resultado encontrado:");
  console.log(movimientoBuscado ? movimientoBuscado : "No se encontró el movimiento.");

  // Mostrar en alert
  let resumen = `📋 Resumen Final\n-----------------------\n` +
    `Total de movimientos registrados: ${movimientos.length}\n` +
    `Saldo total: $${saldo.toFixed(2)}\n\n` +
    `Desglose por tipo:\n` +
    `- Ingresos: $${totalIngresos.toFixed(2)}\n` +
    `- Egresos : $${totalEgresos.toFixed(2)}\n\n` +
    `Ingreso más alto: ${mayorIngreso.nombre} - $${mayorIngreso.monto.toFixed(2)}\n` +
    `Egreso más alto : ${mayorEgreso.nombre} - $${mayorEgreso.monto.toFixed(2)}\n\n`;

  // ✅ Agregar egresos mayores a 100 al resumen
  resumen += `Egresos mayores a $100:\n`;
  if (egresos100.length > 0) {
    egresos100.forEach(m =>
      resumen += `- ${m.nombre} (${m.tipo}) - $${m.monto.toFixed(2)}\n`
    );
  } else {
    resumen += "- No hay egresos mayores a $100.\n";
  }

  // ✅ Agregar resultado de búsqueda del nombre ingresado
  resumen += `\nBuscar movimiento por nombre: '${nombreABuscar}'\n`;
  if (movimientoBuscado) {
    resumen += `Resultado encontrado:\n- ${movimientoBuscado.nombre} (${movimientoBuscado.tipo}) - $${movimientoBuscado.monto.toFixed(2)}\n`;
  } else {
    resumen += "No se encontró el movimiento.\n";
  }

  alert(resumen);
}

// Función para eliminar movimiento por nombre
function eliminarMovimientoPorNombre() {
  const nombreEliminar = prompt("Ingresa el nombre del movimiento a eliminar:");
  const index = movimientos.findIndex(m => m.nombre.toLowerCase() === nombreEliminar.toLowerCase());

  if (index !== -1) {
    movimientos.splice(index, 1);
    console.log(`Movimiento "${nombreEliminar}" eliminado correctamente.`);
  } else {
    console.log(`No se encontró un movimiento con el nombre "${nombreEliminar}".`);
  }
}

// Ejecución principal
registrarMovimiento();

// Mostrar datos específicos
console.log("\n🔎 Nombres de movimientos registrados:");
console.log(obtenerNombresDeMovimientos(movimientos));

console.log("\n📉 Egresos mayores a $100:");
console.log(filtrarEgresosMayoresA100(movimientos));

// Ordenar por monto
console.log("\n📊 Movimientos ordenados por monto (mayor a menor):");
console.log(ordenarPorMontoDesc(movimientos));

// Nombres de ingresos
console.log("\n💰 Nombres de ingresos:");
console.log(nombresDeIngresos(movimientos));

// Mostrar resumen
mostrarResumen();

// Preguntar si el usuario quiere eliminar un movimiento
const deseaEliminar = prompt("¿Deseas eliminar un movimiento? (si/no):").toLowerCase();
if (deseaEliminar === "si") {
  eliminarMovimientoPorNombre();
  mostrarResumen();
}

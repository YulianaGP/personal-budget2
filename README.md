# 💰 Control de Ingresos y Egresos

## 📌 Descripción

Este programa permite a los usuarios registrar sus movimientos financieros, clasificándolos como **ingresos** o **egresos**, y calcular un **saldo total**. Además, ofrece herramientas para:

- Mostrar un **resumen financiero** completo.
- **Buscar, ordenar y filtrar** movimientos usando funciones funcionales.
- **Eliminar movimientos** por nombre.

Todo esto se realiza en consola, interactuando con el usuario mediante `prompt()`. Además, se aplicarán funciones puras con **map()**, **filter()** y **find()** para transformar datos sin modificar el estado original.

---

## 🎯 Objetivos de Aprendizaje

- Comprender la diferencia entre programación funcional e imperativa.
- Aplicar funciones puras para resolver tareas específicas sin efectos secundarios.
- Usar funciones de orden superior (`map`, `filter`, `find`) para manipular arreglos de manera declarativa.
- Reutilizar funciones y mantener el código limpio usando el principio **DRY (Don’t Repeat Yourself)**.

---

## 🚀 Funcionalidades principales

1. **registrarMovimiento()**
   - Permite ingresar nombre, tipo y monto de múltiples movimientos.
   - Valida los datos y permite al usuario continuar o salir.

2. **calcularTotalSaldo()**
   - Calcula el saldo total restando los egresos a los ingresos.

3. **mostrarResumen()**
   - Muestra el total de movimientos, saldo final, ingresos y egresos totales, así como el ingreso y egreso más altos.

4. **eliminarMovimientoPorNombre()**
   - Permite eliminar un movimiento específico según su nombre ingresado por el usuario.

---

## 📝 Historias de Usuario

### HU1 - Listar nombres de movimientos  
*“Como usuario, quiero obtener una lista simple con los nombres de mis movimientos financieros registrados para revisarlos fácilmente.”*

✅ Usa `map()` para mostrar los nombres en consola.

---

### HU2 - Filtrar egresos mayores a $100  
*“Como usuario, quiero identificar rápidamente mis gastos mayores a $100 para analizar mejor mi presupuesto.”*

✅ Usa `filter()` para mostrar los egresos mayores a $100 en consola.

---

### HU3 - Buscar movimiento por nombre  
*“Como usuario, necesito buscar un movimiento específico por su nombre para revisar rápidamente sus detalles.”*

✅ Usa `find()` para mostrar el movimiento buscado o un mensaje si no se encuentra.

---

### HU4 - Eliminar movimiento por nombre  
*“Como usuario, quiero poder eliminar un movimiento que ingresé por error, usando su nombre.”*

✅ Elimina el movimiento directamente del array original si se encuentra.

---

### HU5 - Ordenar movimientos por monto (descendente)  
*“Como usuario, quiero ver mis movimientos ordenados del más caro al más barato para entender mis prioridades.”*

✅ Usa una función pura que devuelva una copia ordenada sin alterar el original.

---

### HU6 - Mostrar solo los nombres de ingresos  
*“Como usuario, quiero ver solamente los nombres de los ingresos para visualizar mis fuentes de entrada de dinero.”*

✅ Usa `filter()` + `map()` en composición funcional.

---

## 🧠 Funciones puras implementadas


| Función                        | Descripción                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| `obtenerNombresDeMovimientos` | Retorna solo los nombres de los movimientos registrados.                    |
| `filtrarEgresosMayoresA100`   | Filtra los egresos cuyo monto supera los $100.                              |
| `buscarMovimientoPorNombre`   | Devuelve un movimiento si su nombre coincide con el buscado.                |
| `ordenarPorMontoDesc`         | Devuelve una nueva lista ordenada de mayor a menor por monto.              |
| `nombresDeIngresos`           | Combina `filter()` y `map()` para retornar solo los nombres de ingresos.    |

---

## 🧼 Aplicación del Principio DRY

- Se reutilizan funciones como `calcularTotalSaldo()`, `mostrarResumen()`, `obtenerNombresDeMovimientos()`, evitando lógica repetida.
- Se favorece la inmutabilidad y composición funcional para manipular datos.

---

## 📘 ¿Qué es una función pura?

Una **función pura**:
- Siempre produce el mismo resultado con los mismos argumentos.
- No modifica variables globales ni interactúa con el exterior (sin efectos secundarios).

Ejemplo:

```js
function doble(x) {
  return x * 2;
}

## 🆚 Comparación de Paradigmas

| Característica       | Imperativo                         | Funcional                              |
|----------------------|-------------------------------------|-----------------------------------------|
| Enfoque              | Cómo se hace                        | Qué se quiere lograr                    |
| Uso de variables     | Mutables                            | Inmutables                              |
| Estructuras          | Bucles, condicionales               | map, filter, reduce, funciones puras    |
| Efectos secundarios  | Comunes                             | Evitados                                |

---

## ✅ Logros adicionales

- ✔️ Eliminar movimientos por nombre.
- ✔️ Buscar movimiento específico.
- ✔️ Ordenar por monto (descendente).
- ✔️ Mostrar nombres de ingresos únicamente.

---

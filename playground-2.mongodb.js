//                   CONSULTAS DE BASICAS

// 1. Filtros Simples (3 consultas)
use("db_inventario_ventas");
// Buscar un usuario específico por su nombre de usuario
db.usuarios.find({ usuario: "admin" }).toArray();

use("db_inventario_ventas");
// Buscar un producto específico por su código
db.productos.find({ codigo: "LAP001" }).toArray();

use("db_inventario_ventas");
// Buscar todos los clientes que sean personas jurídicas
db.clientes.find({ TipoPersona: "Jurídica" }).toArray();


// 2. Operadores de Comparación (3 consultas)
use("db_inventario_ventas");
// Buscar productos con un precio mayor a $500
db.productos.find({ precio: { $gt: 500 } }).toArray();

use("db_inventario_ventas");
// Buscar productos con stock menor o igual a 10 unidades
db.productos.find({ stock: { $lte: 10 } }).toArray();

use("db_inventario_ventas");
// Buscar ventas con un total mayor o igual a $1000
db.ventas.find({ total: { $gte: 1000 } }).toArray();


// 3. Operadores Lógicos (3 consultas)
use("db_inventario_ventas");
// Buscar productos con precio entre $100 y $300 usando $and
db.productos.find({
    $and: [
        { precio: { $gte: 100 } },
        { precio: { $lte: 300 } }
    ]
}).toArray();

use("db_inventario_ventas");
// Buscar usuarios que sean cajeros o supervisores usando $or
db.usuarios.find({
    $or: [
        { rol: "CAJERO" },
        { rol: "SUPERVISOR" }
    ]
}).toArray();

use("db_inventario_ventas");
// Buscar descuentos que NO sean de tipo fijo usando $nor
db.descuentos.find({
    $nor: [
        { tipo: "FIJO" }
    ]
}).toArray();


// 4. Proyección (3 consultas)
use("db_inventario_ventas");
// Mostrar solo el nombre y el precio de los productos, ocultando el _id
db.productos.find({}, {
    _id: 0,
    nombre: 1,
    precio: 1
}).toArray();

use("db_inventario_ventas");
// Mostrar solo el nombre y el email de los clientes, ocultando el _id
db.clientes.find({}, {
    _id: 0,
    nombre: 1,
    email: 1
}).toArray();

use("db_inventario_ventas");
// Mostrar solo la fecha y el total de las ventas, ocultando el _id
db.ventas.find({}, {
    _id: 0,
    fecha: 1,
    total: 1
}).toArray();


// Ordenamiento con sort() (2 consultas)
use("db_inventario_ventas");
// Ordenar los productos por precio de mayor a menor (descendente)
db.productos.find({}, {
    _id: 0,
    nombre: 1,
    precio: 1
}).sort({
    precio: -1
}).toArray();

use("db_inventario_ventas");
// Ordenar las ventas por fecha de la más reciente a la más antigua
db.ventas.find({}, {
    _id: 0,
    fecha: 1,
    total: 1
}).sort({
    fecha: -1
}).toArray();


// 6. Límite con limit() (2 consultas)
use("db_inventario_ventas");
// Mostrar solo los 3 productos más caros combinando sort y limit
db.productos.find({}, {
    _id: 0,
    nombre: 1,
    precio: 1
}).sort({
    precio: -1
}).limit(3).toArray();

use("db_inventario_ventas");
// Mostrar solo las 5 ventas más recientes combinando sort y limit
db.ventas.find({}, {
    _id: 0,
    fecha: 1,
    total: 1
}).sort({
    fecha: -1
}).limit(5).toArray();


// Consultas sobre Objetos Embebidos (2 consultas)

use("db_inventario_ventas");
// Buscar ventas que tengan al menos un detalle con cantidad mayor a 2
db.ventas.find({
    "detalles.cantidad": { $gt: 2 }
}).toArray();

use("db_inventario_ventas");
// Buscar ventas que tengan un detalle con precio unitario mayor a $1000
db.ventas.find({
    "detalles.precio_unitario": { $gt: 1000 }
}).toArray();


// 8. Consultas sobre Arreglos (2 consultas)
use("db_inventario_ventas");
// Buscar productos que tengan al menos un descuento aplicado (arreglo no vacío)
db.productos.find({
    descuentos: { $ne: [] }
}).toArray();

use("db_inventario_ventas");
// Buscar productos que tengan exactamente 1 descuento en su arreglo
db.productos.find({
    descuentos: { $size: 1 }
}).toArray();

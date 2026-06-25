


//                   CONSULTAS DE AGREGACIÓNES


// 1. Pipelines con $match (5 consultas)

use("db_inventario_ventas");
// 1.1 Buscar ventas activas (estado 1) con un total mayor a $1000
db.ventas.aggregate([
    {
        $match: {
            estado: 1,
            total: { $gt: 1000 }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 1.2 Buscar productos con stock menor a 15 unidades
db.productos.aggregate([
    {
        $match: {
            stock: { $lt: 15 }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 1.3 Buscar clientes que sean personas naturales
db.clientes.aggregate([
    {
        $match: {
            TipoPersona: "Natural"
        }
    }
]).toArray();

use("db_inventario_ventas");
// 1.4 Buscar descuentos de tipo porcentaje que estén activos
db.descuentos.aggregate([
    {
        $match: {
            tipo: "PORCENTAJE",
            estado: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 1.5 Buscar usuarios que tengan el rol de cajero y estén activos
db.usuarios.aggregate([
    {
        $match: {
            rol: "CAJERO",
            estado: 1
        }
    }
]).toArray();


// 2. Pipelines con $group (5 consultas)

use("db_inventario_ventas");
// 2.1 Calcular el total vendido y la cantidad de ventas por cada cliente
db.ventas.aggregate([
    {
        $group: {
            _id: "$id_cliente",
            totalVentas: { $sum: "$total" },
            cantidadVentas: { $sum: 1 }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 2.2 Contar la cantidad de productos y el stock total por cada categoría
db.productos.aggregate([
    {
        $group: {
            _id: "$id_categoria",
            cantidadProductos: { $sum: 1 },
            stockTotal: { $sum: "$stock" }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 2.3 Calcular el precio promedio, máximo y mínimo de productos por marca
db.productos.aggregate([
    {
        $group: {
            _id: "$id_marca",
            precioPromedio: { $avg: "$precio" },
            precioMaximo: { $max: "$precio" },
            precioMinimo: { $min: "$precio" }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 2.4 Calcular el total vendido y el número de ventas realizadas por cada usuario
db.ventas.aggregate([
    {
        $group: {
            _id: "$id_usuario",
            totalVendido: { $sum: "$total" },
            numVentas: { $sum: 1 }
        }
    }
]).toArray();

use("db_inventario_ventas");
// 2.5 Sumar el valor de los descuentos y contar cuántos hay por cada tipo
db.descuentos.aggregate([
    {
        $group: {
            _id: "$tipo",
            totalDescuentos: { $sum: "$valor" },
            cantidad: { $sum: 1 }
        }
    }
]).toArray();


// 3. Pipelines con $sort (5 consultas)

use("db_inventario_ventas");
// 3.1 Ordenar los productos por precio de mayor a menor
db.productos.aggregate([
    { $sort: { precio: -1 } },
    {
        $project: {
            nombre: 1,
            precio: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 3.2 Ordenar las ventas por su monto total de mayor a menor
db.ventas.aggregate([
    { $sort: { total: -1 } },
    {
        $project: {
            fecha: 1,
            total: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 3.3 Ordenar los clientes alfabéticamente por su nombre
db.clientes.aggregate([
    { $sort: { nombre: 1 } },
    {
        $project: {
            nombre: 1,
            email: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 3.4 Ordenar las categorías alfabéticamente por su nombre
db.categorias.aggregate([
    {
        $sort: {
            nombre: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 3.5 Ordenar los productos por su stock de menor a mayor (para ver los que se agotan)
db.productos.aggregate([
    { $sort: { stock: 1 } },
    {
        $project: {
            nombre: 1,
            stock: 1
        }
    }
]).toArray();


// 4. Pipelines con $limit (5 consultas)

use("db_inventario_ventas");
// 4.1 Mostrar el Top 5 de los productos más caros
db.productos.aggregate([
    { $sort: { precio: -1 } },
    { $limit: 5 },
    {
        $project: {
            nombre: 1,
            precio: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 4.2 Mostrar los primeros 10 clientes registrados
db.clientes.aggregate([
    { $limit: 10 },
    {
        $project: {
            nombre: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 4.3 Mostrar las 3 ventas más recientes
db.ventas.aggregate([
    { $sort: { fecha: -1 } },
    { $limit: 3 },
    {
        $project: {
            fecha: 1,
            total: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 4.4 Mostrar el Top 5 de productos con mayor stock en inventario
db.productos.aggregate([
    { $sort: { stock: -1 } },
    { $limit: 5 },
    {
        $project: {
            nombre: 1,
            stock: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 4.5 Mostrar los primeros 5 descuentos que estén activos
db.descuentos.aggregate([
    { $match: { estado: 1 } },
    { $limit: 5 },
    {
        $project: {
            nombre: 1,
            tipo: 1,
            valor: 1
        }
    }
]).toArray();


// 5. Pipelines con $lookup (5 consultas)

use("db_inventario_ventas");
// 5.1 Unir las ventas con la información del cliente que realizó la compra
db.ventas.aggregate([
    {
        $lookup: {
            from: "clientes",
            localField: "id_cliente",
            foreignField: "_id",
            as: "cliente"
        }
    },
    { $unwind: "$cliente" },
    {
        $project: {
            "cliente.nombre": 1,
            total: 1,
            fecha: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 5.2 Unir los productos con la información de su categoría
db.productos.aggregate([
    {
        $lookup: {
            from: "categorias",
            localField: "id_categoria",
            foreignField: "_id",
            as: "categoria"
        }
    },
    { $unwind: "$categoria" },
    {
        $project: {
            nombre: 1,
            "categoria.nombre": 1,
            precio: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 5.3 Unir los productos con la información de su marca
db.productos.aggregate([
    {
        $lookup: {
            from: "marcas",
            localField: "id_marca",
            foreignField: "_id",
            as: "marca"
        }
    },
    { $unwind: "$marca" },
    {
        $project: {
            nombre: 1,
            "marca.nombre": 1,
            precio: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 5.4 Unir las ventas con la información del usuario (cajero) que la registró
db.ventas.aggregate([
    {
        $lookup: {
            from: "usuarios",
            localField: "id_usuario",
            foreignField: "_id",
            as: "usuario"
        }
    },
    { $unwind: "$usuario" },
    {
        $project: {
            "usuario.nombre": 1,
            total: 1,
            fecha: 1
        }
    }
]).toArray();

use("db_inventario_ventas");
// 5.5 Unir los productos con la lista de descuentos que tienen aplicados
db.productos.aggregate([
    {
        $lookup: {
            from: "descuentos",
            localField: "descuentos",
            foreignField: "_id",
            as: "listaDescuentos"
        }
    },
    {
        $project: {
            nombre: 1,
            precio: 1,
            "listaDescuentos.nombre": 1
        }
    }
]).toArray();


// 6. Pipelines Combinados (5 consultas)

use("db_inventario_ventas");

db.ventas.aggregate([
    {
        $group: {
            _id: "$id_cliente",
            totalComprado: { $sum: "$total" },
            numCompras: { $sum: 1 }
        }
    },
    { $sort: { totalComprado: -1 } },
    { $limit: 5 },
    {
        $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "_id",
            as: "cliente"
        }
    },
    { $unwind: "$cliente" },
    {
        $project: {
            "cliente.nombre": 1,
            totalComprado: 1,
            numCompras: 1
        }
    }
]).toArray();

use("db_inventario_ventas");

db.ventas.aggregate([
    { $unwind: "$detalles" },
    {
        $group: {
            _id: "$detalles.id_producto",
            cantidadVendida: { $sum: "$detalles.cantidad" },
            totalIngresos: { $sum: "$detalles.precio_total" }
        }
    },
    { $sort: { cantidadVendida: -1 } },
    { $limit: 5 },
    {
        $lookup: {
            from: "productos",
            localField: "_id",
            foreignField: "_id",
            as: "producto"
        }
    },
    { $unwind: "$producto" },
    {
        $project: {
            "producto.nombre": 1,
            cantidadVendida: 1,
            totalIngresos: 1
        }
    }
]).toArray();

use("db_inventario_ventas");

db.ventas.aggregate([
    { $match: { estado: 1 } },
    {
        $group: {
            _id: {
                year: { $year: "$fecha" },
                month: { $month: "$fecha" }
            },
            totalVentas: { $sum: "$total" },
            numVentas: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.year": -1,
            "_id.month": -1
        }
    }
]).toArray();

use("db_inventario_ventas");

db.productos.aggregate([
    {
        $lookup: {
            from: "categorias",
            localField: "id_categoria",
            foreignField: "_id",
            as: "categoria"
        }
    },
    { $unwind: "$categoria" },
    {
        $group: {
            _id: "$categoria.nombre",
            totalProductos: { $sum: 1 },
            stockTotal: { $sum: "$stock" },
            valorInventario: { $sum: { $multiply: ["$precio", "$stock"] } }
        }
    },
    {
        $sort: {
            valorInventario: -1
        }
    }
]).toArray();

use("db_inventario_ventas");

db.ventas.aggregate([
    { $match: { estado: 1 } },
    {
        $group: {
            _id: "$id_usuario",
            totalVendido: { $sum: "$total" },
            numVentas: { $sum: 1 },
            promedioVenta: { $avg: "$total" }
        }
    },
    { $sort: { totalVendido: -1 } },
    { $limit: 5 },
    {
        $lookup: {
            from: "usuarios",
            localField: "_id",
            foreignField: "_id",
            as: "cajero"
        }
    },
    { $unwind: "$cajero" },
    {
        $project: {
            "cajero.nombre": 1,
            totalVendido: 1,
            numVentas: 1,
            promedioVenta: 1
        }
    }
]).toArray();
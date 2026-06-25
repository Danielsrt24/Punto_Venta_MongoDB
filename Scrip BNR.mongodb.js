// PROYECTO: Sistema de Control de Inventario y Ventas
// ESTUDIANTES: Daniel Antonio Sorto Blanco
//             Edwin Ernesto Marquez Amaya
//             David Alberto Rojas Jimenes



// Creación de la base de datos y colecciones
use("db_inventario_ventas");

db.createCollection("usuarios");
db.createCollection("categorias");
db.createCollection("marcas");
db.createCollection("descuentos");
db.createCollection("clientes");
db.createCollection("productos");
db.createCollection("ventas");



use("db_inventario_ventas");
db.usuarios.insertMany([
    {
        usuario: "admin",
        password: "admin123",
        nombre: "Carlos Administrador",
        rol: "ADMINISTRADOR",
        estado: 1
    },
    {
        usuario: "supervisor1",
        password: "super123",
        nombre: "María Supervisora",
        rol: "SUPERVISOR",
        estado: 1
    },
    {
        usuario: "cajero1",
        password: "caja123",
        nombre: "Juan Cajero",
        rol: "CAJERO",
        estado: 1
    },
    {
        usuario: "cajero2",
        password: "caja456",
        nombre: "Ana Cajera",
        rol: "CAJERO",
        estado: 1
    },
    {
        usuario: "cajero3",
        password: "caja789",
        nombre: "Pedro Martínez",
        rol: "CAJERO",
        estado: 1
    },
    {
        usuario: "cajero4",
        password: "caja012",
        nombre: "Laura Sánchez",
        rol: "CAJERO",
        estado: 1
    },
    {
        usuario: "supervisor2",
        password: "super456",
        nombre: "Roberto Gómez",
        rol: "SUPERVISOR",
        estado: 1
    },
    {
        usuario: "admin2",
        password: "admin456",
        nombre: "Sofía Directora",
        rol: "ADMINISTRADOR",
        estado: 1
    },
    {
        usuario: "cajero5",
        password: "caja345",
        nombre: "Miguel Torres",
        rol: "CAJERO",
        estado: 1
    },
    {
        usuario: "cajero6",
        password: "caja678",
        nombre: "Carmen Flores",
        rol: "CAJERO",
        estado: 1
    }
]);


use("db_inventario_ventas");
db.categorias.insertMany([
    {
        nombre: "Laptops",
        descripcion: "Computadoras portátiles",
        estado: 1
    },
    {
        nombre: "Smartphones",
        descripcion: "Teléfonos inteligentes",
        estado: 1
    },
    {
        nombre: "Accesorios",
        descripcion: "Accesorios para computadoras y teléfonos",
        estado: 1
    },
    {
        nombre: "Tablets",
        descripcion: "Tabletas electrónicas",
        estado: 1
    },
    {
        nombre: "Monitores",
        descripcion: "Pantallas y monitores",
        estado: 1
    },
    {
        nombre: "Impresoras",
        descripcion: "Impresoras y escáneres",
        estado: 1
    },
    {
        nombre: "Almacenamiento",
        descripcion: "Discos duros y SSD",
        estado: 1
    },
    {
        nombre: "Redes",
        descripcion: "Routers y switches",
        estado: 1
    },
    {
        nombre: "Audio",
        descripcion: "Parlantes y audífonos",
        estado: 1
    },
    {
        nombre: "Gaming",
        descripcion: "Equipos y accesorios para gaming",
        estado: 1
    }
]);


use("db_inventario_ventas");
db.marcas.insertMany([
    {
        nombre: "HP",
        descripcion: "Hewlett-Packard",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Dell",
        descripcion: "Dell Technologies",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Apple",
        descripcion: "Apple Inc.",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Samsung",
        descripcion: "Samsung Electronics",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Logitech",
        descripcion: "Logitech International",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Lenovo",
        descripcion: "Lenovo Group",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Asus",
        descripcion: "ASUSTek Computer",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Acer",
        descripcion: "Acer Inc.",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Microsoft",
        descripcion: "Microsoft Corporation",
        estado: 1,
        created_at: new Date()
    },
    {
        nombre: "Sony",
        descripcion: "Sony Corporation",
        estado: 1,
        created_at: new Date()
    }
]);


use("db_inventario_ventas");
db.descuentos.insertMany([
    {
        nombre: "Descuento 10% Laptops",
        tipo: "PORCENTAJE",
        valor: 10,
        descripcion: "10% de descuento en laptops",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-12-31"),
        estado: 1
    },
    {
        nombre: "Descuento $50 Fijo",
        tipo: "FIJO",
        valor: 50,
        descripcion: "$50 de descuento fijo",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-06-30"),
        estado: 1
    },
    {
        nombre: "Descuento 20% Accesorios",
        tipo: "PORCENTAJE",
        valor: 20,
        descripcion: "20% de descuento en accesorios",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-12-31"),
        estado: 1
    },
    {
        nombre: "Descuento $20 Fijo",
        tipo: "FIJO",
        valor: 20,
        descripcion: "$20 de descuento fijo en smartphones",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-12-31"),
        estado: 1
    },
    {
        nombre: "Descuento 15% Tablets",
        tipo: "PORCENTAJE",
        valor: 15,
        descripcion: "15% de descuento en tablets",
        fecha_inicio: new Date("2024-02-01"),
        fecha_fin: new Date("2024-11-30"),
        estado: 1
    },
    {
        nombre: "Descuento $30 Monitores",
        tipo: "FIJO",
        valor: 30,
        descripcion: "$30 de descuento en monitores",
        fecha_inicio: new Date("2024-01-15"),
        fecha_fin: new Date("2024-07-15"),
        estado: 1
    },
    {
        nombre: "Descuento 25% Gaming",
        tipo: "PORCENTAJE",
        valor: 25,
        descripcion: "25% de descuento en productos gaming",
        fecha_inicio: new Date("2024-03-01"),
        fecha_fin: new Date("2024-05-31"),
        estado: 1
    },
    {
        nombre: "Descuento $100 Servidores",
        tipo: "FIJO",
        valor: 100,
        descripcion: "$100 de descuento en servidores",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-03-31"),
        estado: 1
    },
    {
        nombre: "Descuento 5% Software",
        tipo: "PORCENTAJE",
        valor: 5,
        descripcion: "5% de descuento en software",
        fecha_inicio: new Date("2024-01-01"),
        fecha_fin: new Date("2024-12-31"),
        estado: 1
    },
    {
        nombre: "Descuento $15 Audio",
        tipo: "FIJO",
        valor: 15,
        descripcion: "$15 de descuento en audio",
        fecha_inicio: new Date("2024-02-01"),
        fecha_fin: new Date("2024-08-31"),
        estado: 1
    }
]);


use("db_inventario_ventas");
db.clientes.insertMany([
    {
        nombre: "Juan Pérez",
        telefono: "7890-1234",
        email: "juan.perez@email.com",
        DUI: 12345678,
        NIT: 1234567890,
        TipoPersona: "Natural",
        direccion: "San Salvador, El Salvador",
        estado: 1
    },
    {
        nombre: "María García",
        telefono: "7890-5678",
        email: "maria.garcia@email.com",
        DUI: 87654321,
        NIT: 9876543210,
        TipoPersona: "Natural",
        direccion: "Santa Ana, El Salvador",
        estado: 1
    },
    {
        nombre: "Tech Solutions S.A. de C.V.",
        telefono: "2222-3333",
        email: "ventas@techsolutions.com",
        DUI: 11223344,
        NIT: 1122334455,
        TipoPersona: "Jurídica",
        direccion: "San Miguel, El Salvador",
        estado: 1
    },
    {
        nombre: "Carlos López",
        telefono: "7890-9999",
        email: "carlos.lopez@email.com",
        DUI: 55667788,
        NIT: 5566778899,
        TipoPersona: "Natural",
        direccion: "La Libertad, El Salvador",
        estado: 1
    },
    {
        nombre: "Ana Martínez",
        telefono: "7890-1111",
        email: "ana.martinez@email.com",
        DUI: 22334455,
        NIT: 2233445566,
        TipoPersona: "Natural",
        direccion: "Sonsonate, El Salvador",
        estado: 1
    },
    {
        nombre: "Pedro Sánchez",
        telefono: "7890-2222",
        email: "pedro.sanchez@email.com",
        DUI: 33445566,
        NIT: 3344556677,
        TipoPersona: "Natural",
        direccion: "Usulután, El Salvador",
        estado: 1
    },
    {
        nombre: "Innovación Digital S.A.",
        telefono: "2233-4455",
        email: "info@innovaciondigital.com",
        DUI: 44556677,
        NIT: 4455667788,
        TipoPersona: "Jurídica",
        direccion: "San Salvador, El Salvador",
        estado: 1
    },
    {
        nombre: "Laura Hernández",
        telefono: "7890-3333",
        email: "laura.hernandez@email.com",
        DUI: 55667799,
        NIT: 5566779900,
        TipoPersona: "Natural",
        direccion: "La Unión, El Salvador",
        estado: 1
    },
    {
        nombre: "Roberto Gómez",
        telefono: "7890-4444",
        email: "roberto.gomez@email.com",
        DUI: 66778899,
        NIT: 6677889900,
        TipoPersona: "Natural",
        direccion: "Chalatenango, El Salvador",
        estado: 1
    },
    {
        nombre: "Sistemas Avanzados Ltda.",
        telefono: "2244-5566",
        email: "contacto@sistemasavanzados.com",
        DUI: 77889900,
        NIT: 7788990011,
        TipoPersona: "Jurídica",
        direccion: "Santa Ana, El Salvador",
        estado: 1
    }
]);


use("db_inventario_ventas");

db.productos.insertMany([
    {
        codigo: "LAP001",
        nombre: "Laptop HP Pavilion 15",
        descripcion: "Intel Core i5, 8GB RAM, 256GB SSD",
        precio: 750.00,
        stock: 15,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Laptops" })._id,
        id_marca: db.marcas.findOne({ nombre: "HP" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 10% Laptops" })._id]
    },
    {
        codigo: "LAP002",
        nombre: "Laptop Dell Inspiron 15",
        descripcion: "Intel Core i7, 16GB RAM, 512GB SSD",
        precio: 950.00,
        stock: 10,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Laptops" })._id,
        id_marca: db.marcas.findOne({ nombre: "Dell" })._id,
        descuentos: []
    },
    {
        codigo: "LAP003",
        nombre: "MacBook Air M2",
        descripcion: "Apple M2, 8GB RAM, 256GB SSD",
        precio: 1199.00,
        stock: 8,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Laptops" })._id,
        id_marca: db.marcas.findOne({ nombre: "Apple" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 10% Laptops" })._id]
    },
    {
        codigo: "SMR001",
        nombre: "iPhone 13 Pro",
        descripcion: "128GB, Color Azul",
        precio: 1099.00,
        stock: 8,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Smartphones" })._id,
        id_marca: db.marcas.findOne({ nombre: "Apple" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento $20 Fijo" })._id]
    },
    {
        codigo: "SMR002",
        nombre: "Samsung Galaxy S22",
        descripcion: "256GB, Color Negro",
        precio: 899.00,
        stock: 12,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Smartphones" })._id,
        id_marca: db.marcas.findOne({ nombre: "Samsung" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento $20 Fijo" })._id]
    },
    {
        codigo: "ACC001",
        nombre: "Mouse Logitech MX Master 3",
        descripcion: "Mouse inalámbrico ergonómico",
        precio: 99.00,
        stock: 25,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Accesorios" })._id,
        id_marca: db.marcas.findOne({ nombre: "Logitech" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 20% Accesorios" })._id]
    },
    {
        codigo: "ACC002",
        nombre: "Teclado Mecánico HP",
        descripcion: "Teclado mecánico RGB",
        precio: 79.00,
        stock: 20,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Accesorios" })._id,
        id_marca: db.marcas.findOne({ nombre: "HP" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 20% Accesorios" })._id]
    },
    {
        codigo: "MON001",
        nombre: "Monitor Dell 27 pulgadas",
        descripcion: "4K UHD, IPS, 60Hz",
        precio: 450.00,
        stock: 7,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Monitores" })._id,
        id_marca: db.marcas.findOne({ nombre: "Dell" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento $30 Monitores" })._id]
    },
    {
        codigo: "TAB001",
        nombre: "iPad Air",
        descripcion: "64GB, WiFi, Color Gris",
        precio: 599.00,
        stock: 10,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Tablets" })._id,
        id_marca: db.marcas.findOne({ nombre: "Apple" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 15% Tablets" })._id]
    },
    {
        codigo: "GAM001",
        nombre: "Teclado Gaming Razer",
        descripcion: "Teclado mecánico RGB para gaming",
        precio: 149.00,
        stock: 11,
        IVA: 0.13,
        estado: 1,
        id_categoria: db.categorias.findOne({ nombre: "Gaming" })._id,
        id_marca: db.marcas.findOne({ nombre: "Sony" })._id,
        descuentos: [db.descuentos.findOne({ nombre: "Descuento 25% Gaming" })._id]
    }
]);


use("db_inventario_ventas");

db.ventas.insertMany([
    {
        fecha: new Date("2024-01-15"),
        subtotal: 849.00,
        descuento_total: 75.00,
        total: 774.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "admin" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Juan Pérez" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "LAP001" })._id,
                cantidad: 1,
                precio_unitario: 750.00,
                precio_total: 750.00,
                descuento: 75.00,
                subtotal: 675.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "ACC001" })._id,
                cantidad: 1,
                precio_unitario: 99.00,
                precio_total: 99.00,
                descuento: 0,
                subtotal: 99.00
            }
        ]
    },
    {
        fecha: new Date("2024-01-16"),
        subtotal: 1178.00,
        descuento_total: 35.80,
        total: 1142.20,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero1" })._id,
        id_cliente: db.clientes.findOne({ nombre: "María García" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "SMR001" })._id,
                cantidad: 1,
                precio_unitario: 1099.00,
                precio_total: 1099.00,
                descuento: 20.00,
                subtotal: 1079.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "ACC002" })._id,
                cantidad: 1,
                precio_unitario: 79.00,
                precio_total: 79.00,
                descuento: 15.80,
                subtotal: 63.20
            }
        ]
    },
    {
        fecha: new Date("2024-01-17"),
        subtotal: 2800.00,
        descuento_total: 0,
        total: 2800.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "supervisor1" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Tech Solutions S.A. de C.V." })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "LAP002" })._id,
                cantidad: 2,
                precio_unitario: 950.00,
                precio_total: 1900.00,
                descuento: 0,
                subtotal: 1900.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "MON001" })._id,
                cantidad: 2,
                precio_unitario: 450.00,
                precio_total: 900.00,
                descuento: 0,
                subtotal: 900.00
            }
        ]
    },
    {
        fecha: new Date("2024-01-18"),
        subtotal: 1498.00,
        descuento_total: 20.00,
        total: 1478.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero2" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Carlos López" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "SMR002" })._id,
                cantidad: 1,
                precio_unitario: 899.00,
                precio_total: 899.00,
                descuento: 20.00,
                subtotal: 879.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "TAB001" })._id,
                cantidad: 1,
                precio_unitario: 599.00,
                precio_total: 599.00,
                descuento: 0,
                subtotal: 599.00
            }
        ]
    },
    {
        fecha: new Date("2024-01-19"),
        subtotal: 297.00,
        descuento_total: 59.40,
        total: 237.60,
        estado: 0,
        id_usuario: db.usuarios.findOne({ usuario: "cajero3" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Ana Martínez" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "ACC001" })._id,
                cantidad: 3,
                precio_unitario: 99.00,
                precio_total: 297.00,
                descuento: 59.40,
                subtotal: 237.60
            }
        ]
    },
    {
        fecha: new Date("2024-01-20"),
        subtotal: 1548.00,
        descuento_total: 154.80,
        total: 1393.20,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero4" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Pedro Sánchez" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "LAP003" })._id,
                cantidad: 1,
                precio_unitario: 1199.00,
                precio_total: 1199.00,
                descuento: 119.90,
                subtotal: 1079.10
            },
            {
                id_producto: db.productos.findOne({ codigo: "ACC001" })._id,
                cantidad: 1,
                precio_unitario: 349.00,
                precio_total: 349.00,
                descuento: 34.90,
                subtotal: 314.10
            }
        ]
    },
    {
        fecha: new Date("2024-01-21"),
        subtotal: 560.00,
        descuento_total: 60.00,
        total: 500.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero5" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Innovación Digital S.A." })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "MON001" })._id,
                cantidad: 2,
                precio_unitario: 280.00,
                precio_total: 560.00,
                descuento: 60.00,
                subtotal: 500.00
            }
        ]
    },
    {
        fecha: new Date("2024-01-22"),
        subtotal: 3200.00,
        descuento_total: 0,
        total: 3200.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "admin" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Laura Hernández" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "LAP002" })._id,
                cantidad: 2,
                precio_unitario: 950.00,
                precio_total: 1900.00,
                descuento: 0,
                subtotal: 1900.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "GAM001" })._id,
                cantidad: 4,
                precio_unitario: 149.00,
                precio_total: 596.00,
                descuento: 0,
                subtotal: 596.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "ACC002" })._id,
                cantidad: 5,
                precio_unitario: 79.00,
                precio_total: 395.00,
                descuento: 0,
                subtotal: 395.00
            }
        ]
    },
    {
        fecha: new Date("2024-01-23"),
        subtotal: 699.00,
        descuento_total: 104.85,
        total: 594.15,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero1" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Roberto Gómez" })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "TAB001" })._id,
                cantidad: 1,
                precio_unitario: 699.00,
                precio_total: 699.00,
                descuento: 104.85,
                subtotal: 594.15
            }
        ]
    },
    {
        fecha: new Date("2024-01-24"),
        subtotal: 228.00,
        descuento_total: 15.00,
        total: 213.00,
        estado: 1,
        id_usuario: db.usuarios.findOne({ usuario: "cajero2" })._id,
        id_cliente: db.clientes.findOne({ nombre: "Sistemas Avanzados Ltda." })._id,
        detalles: [
            {
                id_producto: db.productos.findOne({ codigo: "GAM001" })._id,
                cantidad: 1,
                precio_unitario: 149.00,
                precio_total: 149.00,
                descuento: 15.00,
                subtotal: 134.00
            },
            {
                id_producto: db.productos.findOne({ codigo: "ACC002" })._id,
                cantidad: 1,
                precio_unitario: 79.00,
                precio_total: 79.00,
                descuento: 0,
                subtotal: 79.00
            }
        ]
    }
]);




// VALIDACIONES (JSON Schema)

use("db_inventario_ventas");

db.runCommand({
    collMod: "usuarios",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["usuario", "password", "nombre", "rol"],
            properties: {
                usuario: { bsonType: "string" },
                password: { bsonType: "string" },
                nombre: { bsonType: "string" },
                rol: { enum: ["ADMINISTRADOR", "SUPERVISOR", "CAJERO"] },
                estado: { bsonType: "number" }
            }
        }
    }
});

db.runCommand({
    collMod: "categorias",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: { bsonType: "string" },
                descripcion: { bsonType: "string" },
                estado: { bsonType: "number" }
            }
        }
    }
});

db.runCommand({
    collMod: "marcas",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: { bsonType: "string" },
                descripcion: { bsonType: "string" },
                estado: { bsonType: "number" },
                created_at: { bsonType: "date" }
            }
        }
    }
});

db.runCommand({
    collMod: "descuentos",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "tipo", "valor"],
            properties: {
                nombre: { bsonType: "string" },
                tipo: { enum: ["PORCENTAJE", "FIJO"] },
                valor: { bsonType: "number" },
                descripcion: { bsonType: "string" },
                fecha_inicio: { bsonType: "date" },
                fecha_fin: { bsonType: "date" },
                estado: { bsonType: "number" }
            }
        }
    }
});

db.runCommand({
    collMod: "clientes",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: { bsonType: "string" },
                telefono: { bsonType: "string" },
                email: { bsonType: "string" },
                DUI: { bsonType: "number" },
                NIT: { bsonType: "number" },
                TipoPersona: { bsonType: "string" },
                direccion: { bsonType: "string" },
                estado: { bsonType: "number" }
            }
        }
    }
});

db.runCommand({
    collMod: "productos",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo", "nombre", "precio"],
            properties: {
                codigo: { bsonType: "string" },
                nombre: { bsonType: "string" },
                descripcion: { bsonType: "string" },
                precio: { bsonType: "number" },
                stock: { bsonType: "number" },
                IVA: { bsonType: "number" },
                estado: { bsonType: "number" },
                id_categoria: { bsonType: "objectId" },
                id_marca: { bsonType: "objectId" },
                descuentos: {
                    bsonType: "array",
                    items: { bsonType: "objectId" }
                }
            }
        }
    }
});

db.runCommand({
    collMod: "ventas",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fecha", "total", "id_usuario", "id_cliente", "detalles"],
            properties: {
                fecha: { bsonType: "date" },
                subtotal: { bsonType: "number" },
                descuento_total: { bsonType: "number" },
                total: { bsonType: "number" },
                estado: { bsonType: "number" },
                id_usuario: { bsonType: "objectId" },
                id_cliente: { bsonType: "objectId" },
                detalles: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id_producto", "cantidad", "precio_unitario", "subtotal"],
                        properties: {
                            id_producto: { bsonType: "objectId" },
                            cantidad: { bsonType: "number" },
                            precio_unitario: { bsonType: "number" },
                            precio_total: { bsonType: "number" },
                            descuento: { bsonType: "number" },
                            subtotal: { bsonType: "number" }
                        }
                    }
                }
            }
        }
    }
});




// Creacion de Indices

use("db_inventario_ventas");

db.usuarios.createIndex({ usuario: 1 }, { unique: true });
db.productos.createIndex({ codigo: 1 }, { unique: true });
db.productos.createIndex({ id_categoria: 1 });
db.productos.createIndex({ id_marca: 1 });
db.ventas.createIndex({ fecha: -1 });
db.ventas.createIndex({ estado: 1 });
db.ventas.createIndex({ id_cliente: 1 });



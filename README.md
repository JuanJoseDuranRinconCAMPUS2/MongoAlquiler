# **🪄🚍Sistema de Alquiler de Vehículos🚍🪄**

Este proyecto consiste en la creación de una base de datos para un sistema de alquiler de vehículos con MongoDB. Además se busca realizar unas cuantas consultas para aprender a jugar con la data en mongo DB



## 🔨🔗Organización de Archivos🔗🔨

Los archivos del proyecto son los siguientes:

- **db_campus_alquiler.mongodb**: Contiene el código referente a la creación de la base de datos 
- **query.mongodb**: Contiene el código referente a las diferentes consultas de la data de la base de datos.



## 🚨⚙️Requisitos⚙️🚨

Antes de ejecutar el código, asegúrate: 

- tener instalada la base de datos MongoDB en tu sistema.
- Tener instalado La extensión de MongoDB de VScode o la terminal de MongoDB



## 💥⚙️**Pasos para usar la extensión de MongoDB en Visual Studio Code⚙️💥

**Paso 1: ⚓Instalación de la extensión**⚓

1. Abre Visual Studio Code.
2. Haz clic en el ícono de "Extensiones" en la barra lateral izquierda (o presiona `Ctrl+Shift+X` en Windows/Linux o `Cmd+Shift+X` en macOS).
3. En el campo de búsqueda, escribe "MongoDB" y selecciona la extensión "MongoDB for VSCode" creada por Microsoft.
4. Haz clic en "Instalar" para instalar la extensión.

**Paso 2: 🛫Conexión a la base de datos MongoDB**🛫

1. Abre un proyecto en Visual Studio Code o crea uno nuevo.
2. En la barra lateral izquierda, selecciona la sección "MONGODB".
3. Haz clic en el ícono "Add Connection" (Agregar conexión) en la parte superior de la sección.
4. Selecciona o ingresa la cadena de conexión de tu base de datos MongoDB. Puedes usar una conexión local (`mongodb://localhost:27017/nombre_base_datos`) o una conexión remota proporcionada por un proveedor de servicios de MongoDB.
5. Si es necesario, proporciona un nombre descriptivo para la conexión.
6. Haz clic en "Connect" (Conectar).

**Paso 3: 🛰️Explorando y administrando la base de datos🛰️**

1. Una vez conectado, verás la estructura de la base de datos en la sección "MONGODB" de Visual Studio Code.
2. Expande la conexión para ver las bases de datos disponibles.
3. Expande una base de datos para ver sus colecciones.
4. Expande una colección para ver los documentos almacenados en ella.
5. Puedes hacer clic derecho en una base de datos o colección para realizar acciones como crear, eliminar y modificar documentos.
6. Utiliza las diferentes opciones disponibles en el menú contextual para administrar tu base de datos MongoDB de manera eficiente.



## 🎟️💫Creación de Colecciones💫🎟️

Las siguientes colecciones se han creado en la base de datos "db_campus_alquiler.mongodb":

1. **sucursal**: Contiene información sobre las sucursales de alquiler de vehículos.
2. **automovil**: Almacena los datos de los automóviles disponibles para alquilar.
3. **sucursal_automovil**: Relaciona las sucursales con los automóviles disponibles en cada una y la cantidad de automóviles disponibles.
4. **reserva**: Guarda información sobre las reservas realizadas por los clientes.
5. **cliente**: Contiene los datos de los clientes que alquilan los vehículos.
6. **alquiler**: Registra los detalles de los alquileres realizados por los clientes.
7. **registro_devolucion**: Almacena la información de las devoluciones de vehículos realizadas por los clientes.
8. **registro_entrega**: Guarda los registros de entrega de los vehículos a los clientes.
9. **empleado**: Contiene información sobre los empleados que trabajan en las sucursales de alquiler.



## 🧭🪡Consultas de Datos Relacionados🪡🧭

Para obtener información detallada sobre las relaciones entre las colecciones, se han realizado consultas de datos utilizando la función `aggregate` de MongoDB. Estas consultas permiten obtener datos combinados de diferentes colecciones según las claves foráneas.

Las consultas incluyen:

- Obtener información de las sucursales con los automóviles disponibles en cada una.

- Obtener información de los automóviles alquilados por cada cliente.

- Obtener información de las reservas realizadas por cada cliente.

- Obtener información de los registros de entrega realizados por cada empleado.

- Obtener información de los registros de devolución realizados por cada empleado.

  

## 🧧💮Ejecución del Proyecto💮🧧

Para ejecutar el proyecto, sigue estos pasos:

1. Asegúrate de tener MongoDB instalado en tu sistema.
2. Copia el contenido del archivo "db_campus_alquiler.mongodb" y pégalo en la terminal o consola de MongoDB para crear la base de datos y las colecciones, así como inyectar los datos de ejemplo o si tienes la extensión de MongoDB de visual studio ejecuta el script directamente desde el archivo en cuestión.
3. Abre el archivo "query.mongodb" en Visual Studio Code.
4. Encuentra la consulta que deseas ejecutar, por ejemplo, la número 12.
5. Selecciona la consulta que deseas ejecutar (consulta 12 en este caso).
6. Después de seleccionado la consulta ejecuta dicha sección de código ya sea desde la teminal de MongoDB o desde el mismo archivo presionando el botón de "|>"

## 

## 🔗🪓**Consultas Disponibles**🪓🔗

A continuación encontraras cada consulta con su respectiva ejecución.



**1.****🧧Mostrar todos los clientes registrados en la base de datos.**🧧

```javascript
use("db_campus_alquiler");
db.cliente.find();
```



### 2. ⚓Obtener todos los automóviles disponibles para alquiler.⚓

```javascript
use("db_campus_alquiler");
db.getCollection("automovil").aggregate([  
    {    
        $lookup: {      
            from: "alquiler",     
            localField: "_id",      
            foreignField: "automovil_id",      
            as: "Alquileres"   
         }  
    },  
    {
        $match: {Alquileres: { $ne: [] }}
    },
    {    
        $project: {     
            Marca: 1,      
            Modelo: 1,     
            Anio: 1,      
            Tipo: 1,      
            Capacidad: 1,      
            Precio_Diario: 1,      
            Alquileres: {
                $map: {
                  input: "$Alquileres",
                  as: "alquiler",
                  in: {
                    id: "$$alquiler._id",
                    Fecha_Inicio: "$$alquiler.Fecha_Inicio",
                    Fecha_Fin: "$$alquiler.Fecha_Fin",
                    Costo_Total: "$$alquiler.Costo_Total",
                    Estado: "$$alquiler.Estado"
                  }
                }
            }
        } 
    } 
]);
```



### 3.🧭Listar todos los alquileres activos junto con los datos de los clientes relacionados. 🧭

```javascript
use("db_campus_alquiler");
db.getCollection("alquiler").aggregate([  
    {    
        $lookup: {      
            from: "cliente",     
            localField: "cliente_id",      
            foreignField: "_id",      
            as: "Clientes"   
         }  
    },  
    {
        $match: {Clientes: { $ne: [] }, Estado: { $eq: "Activo" }}
    },
    {
        $unwind: "$Clientes"
    },
    {    
        $project: {     
            "Clientes.ID_Cliente": 0,
        } 
    },
    {
        $group: {
            _id: "$_id",
            Fecha_Inicio: {
                $first: "$Fecha_Inicio"
            },
            Fecha_Fin: {
                $first: "$Fecha_Fin"
            },
            Costo_Total: {
                $first: "$Costo_Total"
            },
            Estado: {
                $first: "$Estado"
            },
            Clientes: {
                $push: "$Clientes"
            },
        }
    }
]);
```



### 4.🪡Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado. 🪡

```javascript
use("db_campus_alquiler");
db.getCollection("reserva").aggregate([  
    {    
        $lookup: {      
            from: "cliente",     
            localField: "cliente_id",      
            foreignField: "_id",      
            as: "Clientes"   
         }  
    }, 
    {    
        $lookup: {      
            from: "automovil",     
            localField: "automovil_id",      
            foreignField: "_id",      
            as: "Automoviles"   
         }  
    },   
    {
        $match: {Clientes: { $ne: [] }, Estado: { $eq: "Pendiente" }, Automoviles: { $ne: [] }}
    },
    {
        $unwind: "$Clientes"
    },
    {    
        $project: {     
            "Clientes.ID_Cliente": 0,
            "Automoviles.ID_Automovil": 0
        } 
    },
    {
        $group: {
            _id: "$_id",
            Fecha_Reserva: {
                $first: "$Fecha_Reserva"
            },
            Fecha_Inicio: {
                $first: "$Fecha_Inicio"
            },
            Fecha_Fin: {
                $first: "$Fecha_Fin"
            },
            Estado: {
                $first: "$Estado"
            },
            Clientes: {
                $push: "$Clientes"
            },
            Automoviles: {
                $push: "$Automoviles"
            }
        }
    }
]);
```



### 5.🛰️Obtener los detalles del alquiler con el ID_Alquiler específico.  🛰️

```javascript
use("db_campus_alquiler");
db.alquiler.find({ ID_Alquiler: { $eq: 2 }})
```



### 6.🪄Listar los empleados con el cargo de "Vendedor". 🪄

```javascript
use("db_campus_alquiler");
db.empleado.find({ Cargo: { $eq: "Vendedor" }});
```



### 7.🚍Mostrar la cantidad total de automóviles disponibles en cada sucursal.🚍

```javascript
use("db_campus_alquiler");
db.getCollection("sucursal").aggregate([  
    {    
        $lookup: {      
            from: "sucursal_automovil",     
            localField: "_id",      
            foreignField: "sucursal_id",      
            as: "Cantidad_Automovil"   
         }  
    },  
    {
        $match: {CantididadAutomovil: { $ne: [] }}
    },
    {
        $unwind: "$Cantidad_Automovil"
    },
    {    
        $project: {     
            "Cantidad_Automovil.sucursal_id": 0,
            "Cantidad_Automovil.automovil_id": 0
        } 
    },
    {
        $group: {
            _id: "$_id",
            Nombre: {
                $first: "$Nombre"
            },
            Direccion: {
                $first: "$Direccion"
            },
            Telefono: {
                $first: "$Telefono"
            },
            Cantidad_Automovil: {
                $first: "$Cantidad_Automovil"
            },
            Total_Automoviles: {
                $sum: "$Cantidad_Automovil.Cantidad_Disponible"
            }
        }
    }
]);
```



### 8.🎟️Obtener el costo total de un alquiler específico.🎟️ 

```javascript
use("db_campus_alquiler");
db.alquiler.find({ ID_Alquiler: { $eq: 5 }},
    { _id: 1, Costo_Total: 1 });
```



### 9.🪓Listar los clientes con el DNI específico. 🪓

```javascript
use("db_campus_alquiler");
db.cliente.find({ DNI: { $eq: "343434" }});

//DNI DISPONIBLES:
// 343434
// 1225631215
// 22554451
// 45897812564
// 125233544
```



### 10.🚀Mostrar todos los automóviles con una capacidad mayor a 5 personas. 🚀

```javascript
use("db_campus_alquiler");
db.automovil.find({ Capacidad: { $gt: 5 }});
```



### 11.🧶Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'. 🧶

```javascript
use("db_campus_alquiler");
db.alquiler.find({ Fecha_Inicio: { $eq : new Date('2023-07-05') }});
```



### 12.🧡Listar las reservas pendientes realizadas por un cliente específico. 🧡

```javascript
use("db_campus_alquiler");
db.reserva.find({ Estado: { $eq: "Pendiente" }, cliente_id: { $eq: 1 }});
```



### 13.🪷Mostrar los empleados con cargo de "Gerente" o "Asistente". 🪷

```javascript
use("db_campus_alquiler");
db.empleado.find({
    $or: [
        {Cargo: { $eq: "Gerente" }}, 
        {Cargo: { $eq: "Vendedor" }}
    ]
});
```



### 14.🛑Obtener los datos de los clientes que realizaron al menos un alquiler. 🛑

```javascript
use("db_campus_alquiler");
db.getCollection("cliente").aggregate([  
    {    
        $lookup: {      
            from: "alquiler",     
            localField: "_id",      
            foreignField: "cliente_id",      
            as: "Alquiler"   
         }  
    },  
    {
        $match: {Alquiler: { $ne: [] }}
    },
    {
        $unwind: "$Alquiler"
    },
    {
        $set: { Estado: "El cliente tiene alquileres registrados" }
    },
    {
        $group: {
            _id: "$_id",
            Nombre: {
                $first: "$Nombre"
            },
            Apellido: {
                $first: "$Apellido"
            },
            DNI: {
                $first: "$DNI"
            },
            Direccion: {
                $first: "$Direccion"
            },
            Telefono: {
                $first: "$Telefono"
            },
            Email: {
                $first: "$Email"
            },
            Estado: {
                $first: "$Estado"
            }
        }
    }
]);
```



### 15.📛Listar todos los automóviles ordenados por marca y modelo. 📛

```javascript
use("db_campus_alquiler");
db.automovil.find().sort( { Marca: 1, Modelo: 1 } );
```



### 16.🎈Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.🎈

```javascript
use("db_campus_alquiler");
db.getCollection("sucursal").aggregate([  
    {    
        $lookup: {      
            from: "sucursal_automovil",     
            localField: "_id",      
            foreignField: "sucursal_id",      
            as: "Cantidad_Automovil"   
         }  
    },  
    {
        $match: {CantididadAutomovil: { $ne: [] }}
    },
    {
        $unwind: "$Cantidad_Automovil"
    },
    {    
        $project: {     
            "Cantidad_Automovil.sucursal_id": 0,
            "Cantidad_Automovil.automovil_id": 0
        } 
    },
    {
        $group: {
            _id: "$_id",
            Nombre: {
                $first: "$Nombre"
            },
            Direccion: {
                $first: "$Direccion"
            },
            Total_Automoviles: {
                $sum: "$Cantidad_Automovil.Cantidad_Disponible"
            }
        }
    }
]);
```



### 17.🎆Obtener la cantidad total de alquileres registrados en la base de datos. 🎆

```javascript
use("db_campus_alquiler");
db.alquiler.aggregate([  
    {
        $set: { Total_Cantidad: db.alquiler.countDocuments({}) }
    },
    {
        $group: {
            _id: null,
            Total_Cantidad: {
                $first: "$Total_Cantidad"
            }
        }
    },
    {    
        $project: {     
            "_id": 0
        } 
    }
]);
```



### 18.🎃Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles. 🎃

```javascript
use("db_campus_alquiler");
db.getCollection("automovil").aggregate([  
    {    
        $lookup: {      
            from: "alquiler",     
            localField: "_id",      
            foreignField: "automovil_id",      
            as: "Alquileres"   
         }  
    },  
    {
        $match: {Alquileres: { $ne: [] }, Capacidad: {$gte: 5}}
    },
    {
        $unwind: "$Alquileres"
    },
    {
        $group: {
            _id: "$_id",
            Marca: {
                $first: "$Marca"
            },
            Modelo: {
                $first: "$Modelo"
            },
            Año: {
                $first: "$Anio"
            },
            Tipo: {
                $first: "$Tipo"
            },
            Capacidad: {
                $first: "$Capacidad"
            },
            Precio_Diario: {
                $first: "$Precio_Diario"
            }
        }
    }
]);
```



### 19.🎞️Obtener los datos del cliente que realizó la reserva con *ID_Reserva específico.🎞️*

```javascript
use("db_campus_alquiler");
db.getCollection("cliente").aggregate([  
    {    
        $lookup: {      
            from: "reserva",     
            localField: "_id",      
            foreignField: "cliente_id",      
            as: "Reserva"   
         }  
    },  
    {
        $unwind: "$Reserva"
    },
    {
        $match: {Reserva: { $ne: [] }, "Reserva._id": {$gte: 5}}
    },
    {
        $set: { Estado: {
            $concat: [
                "El cliente tiene una reserva con el id ", " ", { $toString: "$Reserva._id" }
            ]
        } }
    },
    {
        $group: {
            _id: "$_id",
            Nombre: {
                $first: "$Nombre"
            },
            Apellido: {
                $first: "$Apellido"
            },
            DNI: {
                $first: "$DNI"
            },
            Direccion: {
                $first: "$Direccion"
            },
            Telefono: {
                $first: "$Telefono"
            },
            Email: {
                $first: "$Email"
            },
            Estado: {
                $first: "$Estado"
            }
        }
    }
]);
```



### 20.🎨Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.🎨

```javascript
use("db_campus_alquiler");
db.alquiler.find({
    Fecha_Inicio: {
      $gte: new Date('2023-07-05'),
      $lte: new Date('2023-07-10')
    }
  });
```



## **🌌Contribución🌌**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.



## **😶‍🌫️Licencias😶‍🌫️**

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/LICENSE).



¡Gracias por visitar mi proyecto!
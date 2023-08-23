# **🪄🚍Sistema de Alquileres de Vehículos🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(9).png?raw=true)

------

# 🧳/**Colecciones**🧳

**Este endpoint te permite manejar y administrar las colecciones de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------

## 🐰/GetColecciones

**`GET /GetBodegas`**: El SubEndPoint `/GetColecciones`: te permite obtener la lista de colecciones disponibles en la base de datos de MongoDB.

**Aclaraciones y Validaciones**

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Colecciones/GetColecciones
```
**Metodo HTTP**

```html
GET
```
**Respuesta**
Si la solicitud es exitosa, recibirás una respuesta con la lista de colecciones disponibles en la base de datos.

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
     [
  {
    "name": "registro_devolucion",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Registro",
            "alquiler_id",
            "empleado_id",
            "Fecha_Devolucion",
            "Combustible_Devuelto",
            "Kilometraje_Devuelto",
            "Monto_Adicional"
          ],
          "title": "registro_devolucion Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Registro": {
              "bsonType": "number",
              "description": "'ID_Registro' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "alquiler_id": {
              "bsonType": "number",
              "description": "'alquiler_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "empleado_id": {
              "bsonType": "number",
              "description": "'empleado_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Fecha_Devolucion": {
              "bsonType": "date",
              "description": "'Fecha_Entrega' must be of type date"
            },
            "Combustible_Devuelto": {
              "bsonType": "number",
              "description": "'Combustible_Devuelto' must be of type number decimal",
              "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
            },
            "Kilometraje_Devuelto": {
              "bsonType": "number",
              "description": "'Kilometraje_Devuelto' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Monto_Adicional": {
              "bsonType": "number",
              "description": "'Monto_Adicional' must be of type number decimal",
              "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "337be07b-b034-4606-8dc1-d178abe862cc"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "alquiler",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Alquiler",
            "cliente_id",
            "automovil_id",
            "Fecha_Inicio",
            "Fecha_Fin",
            "Costo_Total",
            "Estado"
          ],
          "title": "sucursal_automovil Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Alquiler": {
              "bsonType": "number",
              "description": "'ID_Alquiler' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "cliente_id": {
              "bsonType": "number",
              "description": "'cliente_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "automovil_id": {
              "bsonType": "number",
              "description": "'automovil_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Fecha_Inicio": {
              "bsonType": "date",
              "description": "'Estado' must be of type date"
            },
            "Fecha_Fin": {
              "bsonType": "date",
              "description": "'Estado' must be of type date"
            },
            "Costo_Total": {
              "bsonType": "number",
              "description": "'Costo_Total' must be of type number decimal",
              "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
            },
            "Estado": {
              "bsonType": "string",
              "description": "'Estado' must be of type string"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "3c52a2fc-9acd-4b37-80c7-2db78e673678"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "automovil",
    "type": "collection",
    "options": {},
    "info": {
      "readOnly": false,
      "uuid": "5823ec20-dcac-4e57-b79c-998d2a5157a2"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "cliente",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Cliente",
            "Nombre",
            "Apellido",
            "DNI",
            "Direccion",
            "Telefono",
            "Email"
          ],
          "title": "sucursal_automovil Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Cliente": {
              "bsonType": "number",
              "description": "'ID_Cliente' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Nombre": {
              "bsonType": "string",
              "description": "'Nombre' must be of type string"
            },
            "Apellido": {
              "bsonType": "string",
              "description": "'Apellido' must be of type string"
            },
            "DNI": {
              "bsonType": "string",
              "description": "'Cantidad_Disponible' must be of type string",
              "pattern": "^[1-9][0-9]*$"
            },
            "Direccion": {
              "bsonType": "string",
              "description": "'Direccion' must be of type string"
            },
            "Telefono": {
              "bsonType": "string",
              "description": "'Cantidad_Disponible' must be of type string",
              "pattern": "^[1-9][0-9]*$"
            },
            "Email": {
              "bsonType": "string",
              "description": "'Email' must be of type string"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "635aca16-0191-4c37-9a26-890b0227e455"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "reserva",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Reserva",
            "cliente_id",
            "automovil_id",
            "Fecha_Reserva",
            "Fecha_Inicio",
            "Fecha_Fin",
            "Estado"
          ],
          "title": "sucursal_automovil Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Reserva": {
              "bsonType": "number",
              "description": "'ID_Reserva' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "cliente_id": {
              "bsonType": "number",
              "description": "'cliente_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "automovil_id": {
              "bsonType": "number",
              "description": "'automovil_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Fecha_Reserva": {
              "bsonType": "date",
              "description": "'Estado' must be of type date"
            },
            "Fecha_Inicio": {
              "bsonType": "date",
              "description": "'Estado' must be of type date"
            },
            "Fecha_Fin": {
              "bsonType": "date",
              "description": "'Estado' must be of type date"
            },
            "Estado": {
              "bsonType": "string",
              "description": "'Estado' must be of type string"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "77cfbdbd-baa5-416f-a211-bd8ac2761a13"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "tokens_Api",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "id_usuario_Api",
            "token"
          ],
          "title": "tokens_Api Validation",
          "properties": {
            "_id": {
              "bsonType": "objectId",
              "description": "'_id' must be a valid ObjectId"
            },
            "id_usuario_Api": {
              "bsonType": "objectId",
              "description": "'id_usuario_Api' must be a valid ObjectId"
            },
            "token": {
              "bsonType": "string",
              "description": "'token' must be of type string."
            }
          },
          "additionalProperties": false
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "9e0f315f-6e3c-4090-9ef0-49fa75fc9402"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "empleado",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Empleado",
            "Nombre",
            "Apellido",
            "DNI",
            "Direccion",
            "Telefono",
            "Cargo"
          ],
          "title": "empleado Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Empleado": {
              "bsonType": "number",
              "description": "'ID_Empleado' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Nombre": {
              "bsonType": "string",
              "description": "'Nombre' must be of type string"
            },
            "Apellido": {
              "bsonType": "string",
              "description": "'Apellido' must be of type string"
            },
            "DNI": {
              "bsonType": "string",
              "description": "'Cantidad_Disponible' must be of type string",
              "pattern": "^[1-9][0-9]*$"
            },
            "Direccion": {
              "bsonType": "string",
              "description": "'Direccion' must be of type string"
            },
            "Telefono": {
              "bsonType": "string",
              "description": "'Cantidad_Disponible' must be of type string",
              "pattern": "^[1-9][0-9]*$"
            },
            "Cargo": {
              "bsonType": "string",
              "description": "'Cargo' must be of type string"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "ab301813-23b2-496b-8846-735b005e67f8"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "registro_entrega",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_Registro",
            "alquiler_id",
            "empleado_id",
            "Fecha_Entrega",
            "Combustible_Entregado",
            "Kilometraje_Entregado"
          ],
          "title": "registro_entrega Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "ID_Registro": {
              "bsonType": "number",
              "description": "'ID_Registro' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "alquiler_id": {
              "bsonType": "number",
              "description": "'alquiler_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "empleado_id": {
              "bsonType": "number",
              "description": "'empleado_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Fecha_Entrega": {
              "bsonType": "date",
              "description": "'Fecha_Entrega' must be of type date"
            },
            "Combustible_Entregado": {
              "bsonType": "number",
              "description": "'Combustible_Entregado' must be of type number decimal",
              "pattern": "^[0-9]+(\\.[0-9]{1,2})?$"
            },
            "Kilometraje_Entregado": {
              "bsonType": "number",
              "description": "'Kilometraje_Entregado' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "b0aee81a-b876-4360-981b-c1bc01ef18fa"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "usuario_Api",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "nombre",
            "email",
            "password",
            "codigo_Rol"
          ],
          "title": "usuario_Api Validation",
          "properties": {
            "_id": {
              "bsonType": "objectId",
              "description": "'_id' must be a valid ObjectId"
            },
            "nombre": {
              "bsonType": "string",
              "description": "'nombre' must be of type string with letters and numbers.",
              "pattern": "^[a-zA-Z0-9 ]+$",
              "maxLength": 255
            },
            "email": {
              "bsonType": "string",
              "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
              "description": "'email' must be an email of less than 255 characters",
              "maxLength": 255
            },
            "password": {
              "bsonType": "string",
              "description": "'password' must be of type string.",
              "maxLength": 255
            },
            "codigo_Rol": {
              "bsonType": "string",
              "description": "'codigo_Rol' must be a valid code",
              "pattern": "^(CsWscIpEhqmr1987|CsWscYrYwyvemws22501)$"
            }
          },
          "additionalProperties": false
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "b46390a3-598c-4318-9408-3bead7ef1944"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "sucursal",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "ID_sucursal"
          ],
          "title": "User Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number"
            },
            "ID_sucursal": {
              "bsonType": "number",
              "description": "'ID_sucursal' must be of type number"
            },
            "Nombre": {
              "bsonType": "string",
              "description": "'Nombre' must be of type string"
            },
            "Direccion": {
              "bsonType": "string",
              "description": "'Direccion' must be of type string"
            },
            "Telefono": {
              "bsonType": "number",
              "description": "'Telefono' must be of type number"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "cb9a53cc-b76d-4d58-9234-6edad75405d8"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "sucursal_automovil",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "sucursal_id",
            "automovil_id",
            "Cantidad_Disponible"
          ],
          "title": "sucursal_automovil Validation",
          "properties": {
            "_id": {
              "bsonType": "number",
              "description": "'_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "sucursal_id": {
              "bsonType": "number",
              "description": "'sucursal_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "automovil_id": {
              "bsonType": "number",
              "description": "'automovil_id' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            },
            "Cantidad_Disponible": {
              "bsonType": "number",
              "description": "'Cantidad_Disponible' must be of type number",
              "pattern": "^[1-9][0-9]*$"
            }
          }
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "d6c00ae6-f9e4-4eeb-a921-9ddcd6a79c85"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  },
  {
    "name": "roles_Api",
    "type": "collection",
    "options": {
      "validator": {
        "$jsonSchema": {
          "bsonType": "object",
          "required": [
            "_id",
            "rol",
            "acceso"
          ],
          "title": "roles_Api Validation",
          "properties": {
            "_id": {
              "bsonType": "string",
              "description": "'_id' must be of type string",
              "pattern": "^(CsWscIpEhqmr1987|CsWscYrYwyvemws22501)$"
            },
            "rol": {
              "bsonType": "string",
              "description": "'rol' must be of type string with letters and numbers.",
              "pattern": "^[a-zA-Z0-9 ]+$",
              "maxLength": 20
            },
            "acceso": {
              "bsonType": "string",
              "description": "'acceso' must be of type string with letters and numbers.",
              "pattern": "^[a-zA-Z0-9 ]+$",
              "maxLength": 200
            }
          },
          "additionalProperties": false
        }
      },
      "validationLevel": "strict",
      "validationAction": "error"
    },
    "info": {
      "readOnly": false,
      "uuid": "ec0e61d6-0464-4070-b5f6-3daac683d263"
    },
    "idIndex": {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  }
]
</details>

------

## 🚨/CrearColecciones

**`POST /CrearColecciones`**: El SubEndPoint  `/CrearColecciones`: es una ruta de la API que permite crear una nueva colección en la base de datos de MongoDB.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      Nombre: Cadena de caracteres (string)<br>
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Colecciones/CrearColecciones
```
**Metodo HTTP**

```html
POST
```
**Respuesta**
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
      "Nombre" : "Locales"<br>
    }
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	Coleccion (NOMBRE) creada
   </details>

------

## 💢/BorrarColeccion

**`DELETE /BorrarColeccion`**: El SubEndPoint  `/BorrarColeccion`:  es una ruta de la API que permite elimina una colección en la base de datos de MongoDB.

**Aclaraciones y Validaciones**

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      Nombre: Cadena de caracteres (string)<br>
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Colecciones/BorrarColeccion
```

**Metodo HTTP**

```html
DELETE
```

**Respuesta**
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
      "Nombre" : "Locales"<br>
    }
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	Coleccion (NOMBRE) eliminada
   </details>


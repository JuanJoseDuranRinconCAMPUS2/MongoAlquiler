# **🪄🚍Endpoint /Alquiler🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23(10).png?raw=true)

------

# 🚛/**Alquiler**🚛

**Este endpoint te permite manejar y administrar la coleccion "alquiler" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [🐰GetAlquiler🐰](#getalquiler) 
2. [🚨PostAlquiler🚨](#postalquiler)
3. [🛃PutAlquiler🛃](#putalquiler) 
4. [💢DeleteAlquiler💢](#deletealquiler) 
5. [🚨Consultas Especiales: /Alquiler🚨](#consultas-especiales-alquiler)   
6. [🦊(3) AlquilerCliente🦊](#3alquilercliente)  
7. [🧧(5) AlquilerEspecifico🧧](#5alquilerespecifico)  
8. [🎫(8) CostoEspecifico🎫](#8costoespecifico)  
9.  [⚛️(11) Alquiler2023-07-05⚛️](#11alquiler2023-07-05)   
10.  [🏪(17) TotalAlquileres🏪](#17totalalquileres)  
11.  [📆(20) AlquileresEntreFechas📆](#20alquileresentrefechas)

------

## 🐰/GetAlquiler

**`GET /GetAlquiler`**: El SubEndPoint `/GetAlquiler`: te permite obtener la lista todos los alquileres en la colección Alquiler.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/GetAlquiler
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
  {<br>
    "_id": 1,<br>
    "ID_Alquiler": 1,<br>
    "cliente_id": 2,<br>
    "automovil_id": 2,<br>
    "Fecha_Inicio": "2023-07-05T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-08-01T12:00:00.000Z",<br>
    "Costo_Total": 2800000,<br>
    "Estado": "Activo"<br>
  },<br>
  {<br>
    "_id": 2,<br>
    "ID_Alquiler": 2,<br>
    "cliente_id": 1,<br>
    "automovil_id": 3,<br>
    "Fecha_Inicio": "2023-07-11T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-07-21T12:00:00.000Z",<br>
    "Costo_Total": 450000,<br>
    "Estado": "Activo"<br>
  },<br>
  {<br>
    "_id": 3,<br>
    "ID_Alquiler": 3,<br>
    "cliente_id": 1,<br>
    "automovil_id": 2,<br>
    "Fecha_Inicio": "2023-08-01T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-08-12T12:00:00.000Z",<br>
    "Costo_Total": 1600000,<br>
    "Estado": "Pendiente"<br>
  },<br>
  {<br>
    "_id": 4,<br>
    "ID_Alquiler": 4,<br>
    "cliente_id": 4,<br>
    "automovil_id": 1,<br>
    "Fecha_Inicio": "2023-07-07T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-08-11T12:00:00.000Z",<br>
    "Costo_Total": 250000,<br>
    "Estado": "Pendiente"<br>
  },<br>
  {<br>
    "_id": 5,<br>
    "ID_Alquiler": 5,<br>
    "cliente_id": 5,<br>
    "automovil_id": 1,<br>
    "Fecha_Inicio": "2023-12-01T12:00:00.000Z",<br>
    "Fecha_Fin": "2024-01-01T12:00:00.000Z",<br>
    "Costo_Total": 2500000,<br>
    "Estado": "Pendiente"<br>
  },<br>
  {<br>
    "_id": 7,<br>
    "cliente_id": 4,<br>
    "automovil_id": 3,<br>
    "Fecha_Inicio": "1025-07-05T00:00:00.000Z",<br>
    "Fecha_Fin": "1223-01-01T00:00:00.000Z",<br>
    "Costo_Total": 23244000,<br>
    "Estado": "Muerto",<br>
    "ID_Alquiler": 7<br>
  },<br>
  {<br>
    "_id": 9,<br>
    "ID_Alquiler": 9,<br>
    "cliente_id": 2,<br>
    "automovil_id": 2,<br>
    "Fecha_Inicio": "2025-07-05T00:00:00.000Z",<br>
    "Fecha_Fin": "2023-01-01T00:00:00.000Z",<br>
    "Costo_Total": 280000.01,<br>
    "Estado": "Activo"<br>
  }<br>
]
</details>

------

## 🚨/PostAlquiler

**`POST /PostAlquiler`**: El SubEndPoint  `/PostAlquiler`: es una ruta de la API que permite crear un nuevo documento en la colección Alquiler.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Alquiler:</strong> Número entero (int) que identifica de manera única el alquiler.<br>
    <strong>identificacion_Cliente:</strong> Número entero (int) que identifica de manera única al cliente que realiza el alquiler.<br>
    <strong>identificacion_Automovil:</strong> Número entero (int) que identifica de manera única el automóvil que se alquila.<br>
    <strong>Fecha_Inicial:</strong> Fecha en formato de cadena (string) con la fecha de inicio del alquiler (ejemplo: "2025-07-05").<br>
    <strong>Fecha_Finalizacion:</strong> Fecha en formato de cadena (string) con la fecha de finalización del alquiler (ejemplo: "2023-01-01").<br>
    <strong>Costo_Alquiler:</strong> Número decimal (int) que representa el costo del alquiler.<br>
    <strong>Estado_Alquiler:</strong> Cadena (string) que indica el estado del alquiler, puede ser "Activo", "Pendiente", "Finalizado", etc.<br>
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Alquiler/PostAlquiler
```
**🧧Metodo HTTP🧧**

```html
POST
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
    "identificacion_Alquiler": 10,<br>
    "identificacion_Cliente": 2,<br>
    "identificacion_Automovil": 2,<br>
    "Fecha_Inicial": "2025-07-05",<br>
    "Fecha_Finalizacion": "2023-01-01",<br>
    "Costo_Alquiler": 280000.01,<br>
    "Estado_Alquiler": "Activo"<br>
}
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Data eniada Correctamente"<br>
    }
   </details>
------
## 🛃/PutAlquiler

**`PUT /PostAlquiler`**: El SubEndPoint  `/PostAlquiler`: es una ruta de la API que permite actualizar un documento en la colección Alquiler.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Cliente:</strong> Número entero (int) que identifica de manera única al cliente que realiza el alquiler.<br>
    <strong>identificacion_Automovil:</strong> Número entero (int) que identifica de manera única el automóvil que se alquila.<br>
    <strong>Fecha_Inicial:</strong> Fecha en formato de cadena (string) con la fecha de inicio del alquiler (ejemplo: "2025-07-05").<br>
    <strong>Fecha_Finalizacion:</strong> Fecha en formato de cadena (string) con la fecha de finalización del alquiler (ejemplo: "2023-01-01").<br>
    <strong>Costo_Alquiler:</strong> Número decimal (int) que representa el costo del alquiler.<br>
    <strong>Estado_Alquiler:</strong> Cadena (string) que indica el estado del alquiler, puede ser "Activo", "Pendiente", "Finalizado", etc.<br>
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Alquiler/PutAlquiler?id=<id>
    
    Reemplaza <id> por el id de la data que quieras actualizar
```
**🧧Metodo HTTP🧧**

```html
PUT 
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
    "identificacion_Cliente": 2,<br>
    "identificacion_Automovil": 2,<br>
    "Fecha_Inicial": "2025-07-05",<br>
    "Fecha_Finalizacion": "2023-01-01",<br>
    "Costo_Alquiler": 280000.01,<br>
    "Estado_Alquiler": "Activo"<br>
}
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento actualizado correctamente"<br>
    }
   </details>
------
## 💢/DeleteAlquiler

**`DELETE /DeleteAlquiler`**: El SubEndPoint  `/DeleteAlquiler`: es una ruta de la API que permite eliminar un documento en la colección Alquiler.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Alquiler/DeleteAlquiler    
```
**🧧Metodo HTTP🧧**

```html
DELETE 
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
        "id": "10"<br>
}
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento ha sido eliminado correctamente"<br>
    }
   </details>

------

# 🚨**Consultas Especiales: /Alquiler**🚨
------

## 🦊(3)/AlquilerCliente

**`GET /AlquilerCliente`**: El SubEndPoint `/AlquilerCliente`: te permite **Listar todos los alquileres activos junto con los datos de los clientes relacionados.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/AlquilerCliente
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
  {<br>
    "_id": 2,<br>
    "Fecha_Inicio": "2023-07-11T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-07-21T12:00:00.000Z",<br>
    "Costo_Total": 450000,<br>
    "Estado": "Activo",<br>
    "Clientes": [<br>
      {<br>
        "_id": 1,<br>
        "Nombre": "Maria",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "343434",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "232312321",<br>
        "Email": "Maria@gmail.com"<br>
      }<br>
    ]<br>
  },<br>
  {<br>
    "_id": 9,<br>
    "Fecha_Inicio": "2025-07-05T00:00:00.000Z",<br>
    "Fecha_Fin": "2023-01-01T00:00:00.000Z",<br>
    "Costo_Total": 280000.01,<br>
    "Estado": "Activo",<br>
    "Clientes": [<br>
      {<br>
        "_id": 2,<br>
        "Nombre": "Jose",<br>
        "Apellido": "Ortega",<br>
        "DNI": "1225631215",<br>
        "Direccion": "carreca 11 01-23",<br>
        "Telefono": "315235695",<br>
        "Email": "Maria@gmail.com"<br>
      }<br>
    ]<br>
  },<br>
  {<br>
    "_id": 1,<br>
    "Fecha_Inicio": "2023-07-05T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-08-01T12:00:00.000Z",<br>
    "Costo_Total": 2800000,<br>
    "Estado": "Activo",<br>
    "Clientes": [<br>
      {<br>
        "_id": 2,<br>
        "Nombre": "Jose",<br>
        "Apellido": "Ortega",<br>
        "DNI": "1225631215",<br>
        "Direccion": "carreca 11 01-23",<br>
        "Telefono": "315235695",<br>
        "Email": "Maria@gmail.com"<br>
      }<br>
    ]<br>
  }<br>
]
 </details>
------

## 🧧(5)/AlquilerEspecifico

**`GET /AlquilerEspecifico`**: El SubEndPoint `/AlquilerEspecifico`: te permite **Obtener los detalles del alquiler con el ID_Alquilerespecífico.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/AlquilerEspecifico?id=<id>
    
    Reemplaza <id> por el id de la data que quieras ver
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
     // usando id= 4<br>
     [
  {<br>
    "_id": 4,<br>
    "ID_Alquiler": 4,<br>
    "cliente_id": 4,<br>
    "automovil_id": 1,<br>
    "Fecha_Inicio": "2023-07-07T12:00:00.000Z",<br>
    "Fecha_Fin": "2023-08-11T12:00:00.000Z",<br>
    "Costo_Total": 250000,<br>
    "Estado": "Pendiente"<br>
  }<br>
]
</details>

------

## 🎫(8)/CostoEspecifico

**`GET /CostoEspecifico`**: El SubEndPoint `/CostoEspecifico`: te permite **Obtener el costo total de un alquiler específico.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/CostoEspecifico?id=<id>
    
    Reemplaza <id> por el id de la data que quieras ver
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva.

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
     // usando id= 4<br>
     [<br>
          {<br>
            "_id": 4,<br>
            "Costo_Total": 250000<br>
          }<br>
    ]
</details>


------

## ⚛️(11)/Alquiler2023-07-05

**`GET /Alquiler2023-07-05`**: El SubEndPoint `/Alquiler2023-07-05`: te permite **Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/Alquiler2023-07-05
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
      {<br>
        "_id": 9,<br>
        "ID_Alquiler": 9,<br>
        "cliente_id": 2,<br>
        "automovil_id": 2,<br>
        "Fecha_Inicio": "2023-07-05T00:00:00.000Z",<br>
        "Fecha_Fin": "2023-01-01T00:00:00.000Z",<br>
        "Costo_Total": 280000.01,<br>
        "Estado": "Activo"<br>
      }<br>
    ]
</details>


------

## 🏪(17)/TotalAlquileres

**`GET /TotalAlquileres`**: El SubEndPoint `/TotalAlquileres`: te permite **Obtener la cantidad total de alquileres registrados en la base de datos.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/TotalAlquileres
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
      {<br>
        "TotalAlquileres": 7<br>
      }<br>
    ]<br>
</details>
------

## 📆(20)/AlquileresEntreFechas

**`GET /AlquileresEntreFechas`**: El SubEndPoint `/AlquileresEntreFechas`: te permite **Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Alquiler/AlquileresEntreFechas
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
      {<br>
        "_id": 1,<br>
        "ID_Alquiler": 1,<br>
        "cliente_id": 2,<br>
        "automovil_id": 2,<br>
        "Fecha_Inicio": "2023-07-05T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-08-01T12:00:00.000Z",<br>
        "Costo_Total": 2800000,<br>
        "Estado": "Activo"<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "ID_Alquiler": 4,<br>
        "cliente_id": 4,<br>
        "automovil_id": 1,<br>
        "Fecha_Inicio": "2023-07-07T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-08-11T12:00:00.000Z",<br>
        "Costo_Total": 250000,<br>
        "Estado": "Pendiente"<br>
      },<br>
      {<br>
        "_id": 9,<br>
        "ID_Alquiler": 9,<br>
        "cliente_id": 2,<br>
        "automovil_id": 2,<br>
        "Fecha_Inicio": "2023-07-05T00:00:00.000Z",<br>
        "Fecha_Fin": "2023-01-01T00:00:00.000Z",<br>
        "Costo_Total": 280000.01,<br>
        "Estado": "Activo"<br>
      }<br>
    ]
</details>

---
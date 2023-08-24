# **🪄🚍Endpoint /Reserva🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(6).png?raw=true)

------

# 👩‍💼/**Reserva**👩‍💼

**Este endpoint te permite manejar y administrar la coleccion "Reserva" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [👩‍💻GetReserva👩‍💻](#getreserva) 
2. [🚨PostReserva🚨](#postreserva)
3. [🛃PutReserva🛃](#putreserva) 
4. [💢DeleteReserva💢](#deletereserva) 
5. [🚨Consultas Especiales: /Reserva🚨](#consultas-especiales-reserva)   
6. [🦊(4)ReservasPendientesCyA🦊](#4reservaspendientescya)  
7. [🧧(12)ClienteEspecificoPendiente🧧](#12clienteespecificopendiente)  

------

## 👩‍💻/GetReserva

**`GET /GetReserva`**: El SubEndPoint `/GetReserva`: te permite obtener la lista todos las reservas en la colección Reserva.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Reserva/GetReserva
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
            "ID_Reserva": 1,<br>
            "cliente_id": 1,<br>
            "automovil_id": 4,<br>
            "Fecha_Reserva": "2023-04-07T12:00:00.000Z",<br>
            "Fecha_Inicio": "2023-05-09T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-12-15T12:00:00.000Z",<br>
            "Estado": "Pendiente"<br>
          },<br>
          {<br>
            "_id": 2,<br>
            "ID_Reserva": 2,<br>
            "cliente_id": 3,<br>
            "automovil_id": 2,<br>
            "Fecha_Reserva": "2023-04-12T12:00:00.000Z",<br>
            "Fecha_Inicio": "2023-05-15T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-12-15T12:00:00.000Z",<br>
            "Estado": "Pendiente"<br>
          },<br>
          {<br>
            "_id": 3,<br>
            "ID_Reserva": 3,<br>
            "cliente_id": 2,<br>
            "automovil_id": 1,<br>
            "Fecha_Reserva": "2023-04-12T12:00:00.000Z",<br>
            "Fecha_Inicio": "2023-07-09T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-08-11T12:00:00.000Z",<br>
            "Estado": "Finalizada"<br>
          },<br>
          {<br>
            "_id": 4,<br>
            "ID_Reserva": 4,<br>
            "cliente_id": 4,<br>
            "automovil_id": 3,<br>
            "Fecha_Reserva": "2023-04-07T12:00:00.000Z",<br>
            "Fecha_Inicio": "2023-05-09T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-05-15T12:00:00.000Z",<br>
            "Estado": "Finalizada"<br>
          },<br>
          {<br>
            "_id": 5,<br>
            "ID_Reserva": 5,<br>
            "cliente_id": 5,<br>
            "automovil_id": 3,<br>
            "Fecha_Reserva": "2023-02-07T12:00:00.000Z",<br>
            "Fecha_Inicio": "2023-03-09T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-04-12T12:00:00.000Z",<br>
            "Estado": "Pendiente"<br>
          },<br>
          {<br>
            "_id": 6,<br>
            "ID_Reserva": 6,<br>
            "cliente_id": 2,<br>
            "automovil_id": 4,<br>
            "Fecha_Reserva": "2023-04-07T00:00:00.000Z",<br>
            "Fecha_Inicio": "2023-05-09T00:00:00.000Z",<br>
            "Fecha_Fin": "2023-12-15T00:00:00.000Z",<br>
            "Estado": "Pendiente"<br>
          }<br>
        ]
</details>



------

## 🚨/PostReserva

**`POST /PostReserva`**: El SubEndPoint  `/PostReserva`: es una ruta de la API que permite crear un nuevo documento en la colección Reserva.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Reserva:</strong> Número entero (int) que identifica de manera única la reserva de alquiler.<br>
    <strong>identificacion_Cliente:</strong> Número entero (int) que identifica de manera única al cliente que realiza la reserva.<br>
    <strong>identificacion_Automovil:</strong> Número entero (int) que identifica de manera única el automóvil que se reserva.<br>
    <strong>fecha_Res:</strong> Fecha en formato de cadena (string) que indica la fecha en que se realizó la reserva (ejemplo: "2023-04-07").<br>
    <strong>fecha_Inicio:</strong> Fecha en formato de cadena (string) que indica la fecha de inicio del alquiler (ejemplo: "2023-05-09").<br>
    <strong>fecha_Fin:</strong> Fecha en formato de cadena (string) que indica la fecha de finalización del alquiler (ejemplo: "2023-12-15").<br>
    <strong>Estado_Reserva:</strong> Cadena (string) que indica el estado de la reserva, como "Pendiente", "Confirmada", etc.<br>
</details>



**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Reserva/PostReserva
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
      "identificacion_Reserva": 6,<br>
      "identificacion_Cliente": 1,<br>
      "identificacion_Automovil": 4,<br>
      "fecha_Res": "2023-04-07",<br>
      "fecha_Inicio": "2023-05-09",<br>
      "fecha_Fin": "2023-12-15",<br>
      "Estado_Reserva": "Pendiente"<br>
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


## 🛃/PutReserva

**`PUT /PutReserva`**: El SubEndPoint  `/PutReserva`: es una ruta de la API que permite actualizar un documento en la colección Reserva.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
   <strong>identificacion_Cliente:</strong> Número entero (int) que identifica de manera única al cliente que realiza la reserva.<br>
    <strong>identificacion_Automovil:</strong> Número entero (int) que identifica de manera única el automóvil que se reserva.<br>
    <strong>fecha_Res:</strong> Fecha en formato de cadena (string) que indica la fecha en que se realizó la reserva (ejemplo: "2023-04-07").<br>
    <strong>fecha_Inicio:</strong> Fecha en formato de cadena (string) que indica la fecha de inicio del alquiler (ejemplo: "2023-05-09").<br>
    <strong>fecha_Fin:</strong> Fecha en formato de cadena (string) que indica la fecha de finalización del alquiler (ejemplo: "2023-12-15").<br>
    <strong>Estado_Reserva:</strong> Cadena (string) que indica el estado de la reserva, como "Pendiente", "Confirmada", etc.<br>
</details>



**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Reserva/PutReserva?id=<id>
    
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
      "identificacion_Cliente": 1,<br>
      "identificacion_Automovil": 4,<br>
      "fecha_Res": "2023-04-07",<br>
      "fecha_Inicio": "2023-05-09",<br>
      "fecha_Fin": "2023-12-15",<br>
      "Estado_Reserva": "Pendiente"<br>
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


## 💢/DeleteReserva

**`DELETE /DeleteReserva`**: El SubEndPoint  `/DeleteReserva`: es una ruta de la API que permite eliminar un documento en la colección Reserva.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Reserva/DeleteReserva
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

# 🚨**Consultas Especiales: /Reserva**🚨
------

## 🦊(4)/ReservasPendientesCyA

**`GET /ReservasPendientesCyA`**: El SubEndPoint `/ReservasPendientesCyA`: te permite **Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Reserva/ReservasPendientesCyA
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [ <br>
      {<br>
        "_id": 5,<br>
        "Fecha_Reserva": "2023-02-07T12:00:00.000Z",<br>
        "Fecha_Inicio": "2023-03-09T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-04-12T12:00:00.000Z",<br>
        "Estado": "Pendiente",<br>
        "Clientes": [<br>
          {<br>
            "_id": 5,<br>
            "Nombre": "Antonio",<br>
            "Apellido": "Rodriguez",<br>
            "DNI": "125233544",<br>
            "Direccion": "carreca 11 12-23",<br>
            "Telefono": "351554",<br>
            "Email": "Antonio@gmail.com"<br>
          }<br>
        ],<br>
        "Automoviles": [<br>
          [<br>
            {<br>
              "_id": 3,<br>
              "Marca": "Toyota",<br>
              "Modelo": "Toyota RAV4",<br>
              "Anio": 2023,<br>
              "Tipo": "SUV",<br>
              "Capacidad": 5,<br>
              "Precio_Diario": 150000<br>
            }<br>
          ]<br>
        ]<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "Fecha_Reserva": "2023-04-12T12:00:00.000Z",<br>
        "Fecha_Inicio": "2023-05-15T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-12-15T12:00:00.000Z",<br>
        "Estado": "Pendiente",<br>
        "Clientes": [<br>
          {<br>
            "_id": 3,<br>
            "Nombre": "Romeo",<br>
            "Apellido": "Santos",<br>
            "DNI": "22554451",<br>
            "Direccion": "carreca 12 12-23",<br>
            "Telefono": "315685989",<br>
            "Email": "Romeo@gmail.com"<br>
          }<br>
        ],<br>
        "Automoviles": [<br>
          [<br>
            {<br>
              "_id": 2,<br>
              "Marca": "Toyota",<br>
              "Modelo": "Toyota Corolla",<br>
              "Anio": 2023,<br>
              "Tipo": "Turismo",<br>
              "Capacidad": 4,<br>
              "Precio_Diario": 200000<br>
            }<br>
          ]<br>
        ]<br>
      },<br>
      {<br>
        "_id": 1,<br>
        "Fecha_Reserva": "2023-04-07T12:00:00.000Z",<br>
        "Fecha_Inicio": "2023-05-09T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-12-15T12:00:00.000Z",<br>
        "Estado": "Pendiente",<br>
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
        ],<br>
        "Automoviles": [<br>
          [<br>
            {<br>
              "_id": 4,<br>
              "Marca": "Toyota",<br>
              "Modelo": "Toyota Prius",<br>
              "Anio": 2023,<br>
              "Tipo": "Híbrido",<br>
              "Capacidad": 5,<br>
              "Precio_Diario": 350000<br>
            }<br>
          ]<br>
        ]<br>
      },<br>
      {<br>
        "_id": 6,<br>
        "Fecha_Reserva": "2023-04-07T00:00:00.000Z",<br>
        "Fecha_Inicio": "2023-05-09T00:00:00.000Z",<br>
        "Fecha_Fin": "2023-12-15T00:00:00.000Z",<br>
        "Estado": "Pendiente",<br>
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
        ],<br>
        "Automoviles": [<br>
          [<br>
            {<br>
              "_id": 4,<br>
              "Marca": "Toyota",<br>
              "Modelo": "Toyota Prius",<br>
              "Anio": 2023,<br>
              "Tipo": "Híbrido",<br>
              "Capacidad": 5,<br>
              "Precio_Diario": 350000<br>
            }<br>
          ]<br>
        ]<br>
      }<br>
    ]
 </details>


------

## 🦊(12)/ClienteEspecificoPendiente

**`GET /ClienteEspecificoPendiente`**: El SubEndPoint `/ClienteEspecificoPendiente`: te permite **Listar las reservas pendientes realizadas por un cliente específico.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Reserva/ClienteEspecificoPendiente?id=<id>
    
    Reemplaza <id> por el id de la data que ver
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva.

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
     // usando id= 3<br>
     [<br>
      {<br>
        "_id": 2,<br>
        "ID_Reserva": 2,<br>
        "cliente_id": 3,<br>
        "automovil_id": 2,<br>
        "Fecha_Reserva": "2023-04-12T12:00:00.000Z",<br>
        "Fecha_Inicio": "2023-05-15T12:00:00.000Z",<br>
        "Fecha_Fin": "2023-12-15T12:00:00.000Z",<br>
        "Estado": "Pendiente"<br>
      }<br>
    ]
</details>


------
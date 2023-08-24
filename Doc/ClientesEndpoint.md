# **🪄🚍Endpoint /Cliente🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(2).png?raw=true)

------

# 👩‍💻/**Cliente**👩‍💻

**Este endpoint te permite manejar y administrar la coleccion "Cliente" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [👩‍💻GetCliente👩‍💻](#getcliente) 
2. [🚨PostCliente🚨](#postcliente)
3. [🛃PutCliente🛃](#putcliente) 
4. [💢DeleteCliente💢](#deletecliente) 
5. [🚨Consultas Especiales: /Automovil🚨](#consultas-especiales-automovil)   
6. [🦊(9)ClienteDNI🦊](#9clientedni)  
7. [🧧(14)Clientes_Alquiler🧧](#14clientes_alquiler)  
8. [🎫(19) DatosClientesPorReserva🎫](#19datosclientesporreserva)  

------

## 👩‍💻/GetCliente

**`GET /GetCliente`**: El SubEndPoint `/GetCliente`: te permite obtener la lista todos los automóviles en la colección Cliente.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Cliente/GetCliente
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
        "ID_Cliente": 1,<br>
        "Nombre": "Maria",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "343434",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "232312321",<br>
        "Email": "Maria@gmail.com"<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "ID_Cliente": 2,<br>
        "Nombre": "Jose",<br>
        "Apellido": "Ortega",<br>
        "DNI": "1225631215",<br>
        "Direccion": "carreca 11 01-23",<br>
        "Telefono": "315235695",<br>
        "Email": "Maria@gmail.com"<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "ID_Cliente": 3,<br>
        "Nombre": "Romeo",<br>
        "Apellido": "Santos",<br>
        "DNI": "22554451",<br>
        "Direccion": "carreca 12 12-23",<br>
        "Telefono": "315685989",<br>
        "Email": "Romeo@gmail.com"<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "ID_Cliente": 4,<br>
        "Nombre": "Roberto",<br>
        "Apellido": "Muñoz",<br>
        "DNI": "45897812564",<br>
        "Direccion": "carreca 34 12-23",<br>
        "Telefono": "23156855",<br>
        "Email": "Roberto@gmail.com"<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "ID_Cliente": 5,<br>
        "Nombre": "Antonio",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "125233544",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "351554",<br>
        "Email": "Antonio@gmail.com"<br>
      },<br>
      {<br>
        "_id": 7,<br>
        "ID_Cliente": 7,<br>
        "Nombre": "Maria",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "343434",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "232312321",<br>
        "Email": "Maria@gmail.com",<br>
        "Dm_Email": "Maria@gmail.com"<br>
      }<br>
    ]
</details>

------

## 🚨/PostCliente

**`POST /PostCliente`**: El SubEndPoint  `/PostCliente`: es una ruta de la API que permite crear un nuevo documento en la colección Cliente.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Cliente:</strong> Número entero (int) que identifica de manera única al cliente que realiza el alquiler.<br>
    <strong>nombre_Cliente:</strong> Cadena (string) que representa el nombre del cliente.<br>
    <strong>apellido_Cliente:</strong> Cadena (string) que representa el apellido del cliente.<br>
    <strong>identification_Card_Cliente:</strong> Cadena (string) que representa el número de identificación del cliente.<br>
    <strong>direccion_Cliente:</strong> Cadena (string) que representa la dirección del cliente.<br>
    <strong>telefono_Cliente:</strong> Cadena (string) que representa el número de teléfono del cliente.<br>
    <strong>email_Cliente:</strong> Cadena (string) que representa la dirección de correo electrónico del cliente.
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Cliente/PostCliente
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
        "identificacion_Cliente": 7,<br>
        "nombre_Cliente": "Maria",<br>
        "apellido_Cliente": "Rodriguez",<br>
        "identification_Card_Cliente": "343434",<br>
        "direccion_Cliente": "carreca 11 12-23",<br>
        "telefono_Cliente": "232312321",<br>
        "email_Cliente": "Maria@gmail.com"<br>
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
## 🛃/PutCliente

**`PUT /PutCliente`**: El SubEndPoint  `/PutCliente`: es una ruta de la API que permite actualizar un documento en la colección Cliente.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
     <strong>nombre_Cliente:</strong> Cadena (string) que representa el nombre del cliente.<br>
    <strong>apellido_Cliente:</strong> Cadena (string) que representa el apellido del cliente.<br>
    <strong>identification_Card_Cliente:</strong> Cadena (string) que representa el número de identificación del cliente.<br>
    <strong>direccion_Cliente:</strong> Cadena (string) que representa la dirección del cliente.<br>
    <strong>telefono_Cliente:</strong> Cadena (string) que representa el número de teléfono del cliente.<br>
    <strong>email_Cliente:</strong> Cadena (string) que representa la dirección de correo electrónico del cliente.
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Cliente/PutCliente?id=<id>
    
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
        "nombre_Cliente": "Maria",<br>
        "apellido_Cliente": "Rodriguez",<br>
        "identification_Card_Cliente": "343434",<br>
        "direccion_Cliente": "carreca 11 12-23",<br>
        "telefono_Cliente": "232312321",<br>
        "email_Cliente": "Maria@gmail.com"<br>
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
## 💢/DeleteCliente

**`DELETE /DeleteCliente`**: El SubEndPoint  `/DeleteCliente`: es una ruta de la API que permite eliminar un documento en la colección Cliente.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Cliente/DeleteCliente
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

# 🚨**Consultas Especiales: /Cliente**🚨
------

## 🦊(9)/ClienteDNI

**`GET /ClienteDNI`**: El SubEndPoint `/ClienteDNI`: te permite **Listar los clientes con el DNI específico.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Cliente/ClienteDNI?DNI=<DNI>
    
    Reemplaza <DNI> por el DNI del cliente quieras ver
    //DNI DISPONIBLES
    // 343434
    // 1225631215
    // 22554451
    // 45897812564
    // 125233544
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
     // si DNI es 343434
    [<br>
      {<br>
        "_id": 1,<br>
        "ID_Cliente": 1,<br>
        "Nombre": "Maria",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "343434",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "232312321",<br>
        "Email": "Maria@gmail.com"
      },<br>
      {<br>
        "_id": 7,<br>
        "ID_Cliente": 7,<br>
        "Nombre": "Maria",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "343434",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "232312321",<br>
        "Email": "Maria@gmail.com",<br>
        "Dm_Email": "Maria@gmail.com"<br>
      }<br>
    ]
 </details>


------

## 🧧(14)/Clientes_Alquiler

**`GET /Clientes_Alquiler`**: El SubEndPoint `/Clientes_Alquiler`: te permite **Obtener los datos de los clientes que realizaron al menos un alquiler**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Cliente/Clientes_Alquiler
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
        "_id": 5,<br>
        "ID_Automovil": 5,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Highlander",<br>
        "Anio": 2023,<br>
        "Tipo": "SUV",<br>
        "Capacidad": 7,<br>
        "Precio_Diario": 390000<br>
      }<br>
    ]<br>
</details>
------

## 🎫(19)/DatosClientesPorReserva

**`GET /DatosClientesPorReserva`**: El SubEndPoint `/DatosClientesPorReserva`: te permite **Obtener los datos del cliente que realizó la reserva con ID_Reserva específico.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Cliente/DatosClientesPorReserva?id=<id>
    
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
     // usando id= 5<br>
     [<br>
      {<br>
        "_id": 5,<br>
        "Nombre": "Antonio",<br>
        "Apellido": "Rodriguez",<br>
        "DNI": "125233544",<br>
        "Direccion": "carreca 11 12-23",<br>
        "Telefono": "351554",<br>
        "Email": "Antonio@gmail.com",<br>
        "Estado": "El cliente tiene una reserva con el id  5"<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "Nombre": "Jose",<br>
        "Apellido": "Ortega",<br>
        "DNI": "1225631215",<br>
        "Direccion": "carreca 11 01-23",<br>
        "Telefono": "315235695",<br>
        "Email": "Maria@gmail.com",<br>
        "Estado": "El cliente tiene una reserva con el id  6"<br>
      }<br>
    ]
</details>


------

# **🪄🚍Endpoint /Sucursal🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(7).png?raw=true)

------

# 👩‍💼/**Sucursal**👩‍💼

**Este endpoint te permite manejar y administrar la coleccion "Sucursal" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [👩‍💻GetSucursal👩‍💻](#getsucursal) 
2. [🚨PostSucursal🚨](#postsucursal)
3. [🛃PutSucursal🛃](#putsucursal) 
4. [💢DeleteSucursal💢](#deletesucursal) 
5. [🚨Consultas Especiales: /Sucursal🚨](#consultas-especiales-sucursal)   
6. [🦊(7)CantidadAutosSucursal🦊](#7cantidadautossucursal)  
7. [🧧(16)CantidadTotalAutosDirect🧧](#16cantidadtotalautosdirect)  

------

## 👩‍💻/GetSucursal

**`GET /GetSucursal`**: El SubEndPoint `/GetSucursal`: te permite obtener la lista todos las sucursales en la colección Sucursal.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Sucursal/GetSucursal
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
            "_id": 1,<br>
            "ID_sucursal": 1,<br>
            "Nombre": "Zona Franca",<br>
            "Direccion": "Florida",<br>
            "Telefono": 131312<br>
          },<br>
          {<br>
            "_id": 2,<br>
            "ID_sucursal": 2,<br>
            "Nombre": "Exito",<br>
            "Direccion": "Cabecera",<br>
            "Telefono": 4353424<br>
          },<br>
          {<br>
            "_id": 3,<br>
            "ID_sucursal": 3,<br>
            "Nombre": "La Rosita",<br>
            "Direccion": "Bucaramanga",<br>
            "Telefono": 2344563<br>
          },<br>
          {<br>
            "_id": 4,<br>
            "ID_sucursal": 4,<br>
            "Nombre": "Sucursal Plus",<br>
            "Direccion": "Giron",<br>
            "Telefono": 6433522<br>
          },<br>
          {<br>
            "_id": 5,<br>
            "ID_sucursal": 5,<br>
            "Nombre": "Zona Franca",<br>
            "Direccion": "Florida",<br>
            "Telefono": 4356546<br>
          },<br>
          {<br>
            "_id": 6,<br>
            "ID_sucursal": 6,<br>
            "Nombre": "Zona Franca 2",<br>
            "Direccion": "Florida",<br>
            "Telefono": 1256544<br>
          }<br>
        ]
</details>




------

## 🚨/PostSucursal

**`POST /PostSucursal`**: El SubEndPoint  `/PostSucursal`: es una ruta de la API que permite crear un nuevo documento en la colección Sucursal.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Sucursal:</strong> Número entero (int) que identifica de manera única la sucursal.<br>
    <strong>nombre_Sucursal:</strong> Cadena de texto (string) que representa el nombre de la sucursal.<br>
    <strong>direccion_Sucursal:</strong> Cadena de texto (string) que indica la dirección de la sucursal.<br>
    <strong>telefono_Sucursal:</strong> Número entero (int) que representa el número de teléfono de la sucursal.<br>
</details>




**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal/PostSucursal
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
        "identificacion_Sucursal": 6,<br>
        "nombre_Sucursal": "Zona Franca",<br>
        "direccion_Sucursal": "Florida",<br>
        "telefono_Sucursal": 1256544<br>
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


## 🛃/PutSucursal

**`PUT /PutSucursal`**: El SubEndPoint  `/PutSucursal`: es una ruta de la API que permite actualizar un documento en la colección Sucursal.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
  <strong>nombre_Sucursal:</strong> Cadena de texto (string) que representa el nombre de la sucursal.<br>
    <strong>direccion_Sucursal:</strong> Cadena de texto (string) que indica la dirección de la sucursal.<br>
    <strong>telefono_Sucursal:</strong> Número entero (int) que representa el número de teléfono de la sucursal.<br>
</details>




**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal/PutSucursal?id=<id>
    
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
        "nombre_Sucursal": "Zona Franca",<br>
        "direccion_Sucursal": "Florida",<br>
        "telefono_Sucursal": 1256544<br>
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


## 💢/DeleteSucursal

**`DELETE /DeleteSucursal`**: El SubEndPoint  `/DeleteSucursal`: es una ruta de la API que permite eliminar un documento en la colección Sucursal.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal/DeleteSucursal
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

# 🚨**Consultas Especiales: /Sucursal**🚨
------

## 🦊(7)/CantidadAutosSucursal

**`GET /CantidadAutosSucursal`**: El SubEndPoint `/CantidadAutosSucursal`: te permite **Mostrar la cantidad total de automóviles disponibles en cada sucursal.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Sucursal/CantidadAutosSucursal
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

## 🚗(16)/CantidadTotalAutosDirect

**`GET /CantidadTotalAutosDirect`**: El SubEndPoint `/CantidadTotalAutosDirect`: te permite **Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada

- Necesitas una token generada para usar ese endpoint

  

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Sucursal/CantidadTotalAutosDirect
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva.

 <details>
    <summary> <h3> Data de Salida </h3></summary> 
    [<br>
      {<br>
        "_id": 1,<br>
        "Nombre": "Zona Franca",<br>
        "Direccion": "Florida",<br>
        "Total_Automoviles": 6<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "Nombre": "Exito",<br>
        "Direccion": "Cabecera",<br>
        "Total_Automoviles": 8<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "Nombre": "La Rosita",<br>
        "Direccion": "Bucaramanga",<br>
        "Total_Automoviles": 6<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "Nombre": "Sucursal Plus",<br>
        "Direccion": "Giron",<br>
        "Total_Automoviles": 1<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "Nombre": "Zona Franca",<br>
        "Direccion": "Florida",<br>
        "Total_Automoviles": 4<br>
      }<br>
    ]
</details>



------
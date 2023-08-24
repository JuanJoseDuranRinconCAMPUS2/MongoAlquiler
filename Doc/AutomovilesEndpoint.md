# **🪄🚍Endpoint /Automovil🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(1).png?raw=true)

------

# 🚗/**Automovil**🚗

**Este endpoint te permite manejar y administrar la coleccion "Automovil" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [🛺GetAutomovil🛺](#getautomovil) 
2. [🚨PostAutomovil🚨](#postautomovil)
3. [🛃PutAutomovil🛃](#putautomovil) 
4. [💢DeleteAutomovil💢](#deleteautomovil) 
5. [🚨Consultas Especiales: /Automovil🚨](#consultas-especiales-automovil)   
6. [🦊(2) AutomovilesDisp🦊](#2automovilesdisp)  
7. [🧧(10) AutosMax5🧧](#10autosmax5)  
8. [🎫(15) AutosMarcasModelos🎫](#15autosmarcasmodelos)  
9.  [⚛️(18)DispoAutosMax5⚛️](#%EF%B8%8F18dispoautosmax5)   

------

## 🛺/GetAutomovil

**`GET /GetAutomovil`**: El SubEndPoint `/GetAutomovil`: te permite obtener la lista todos los automóviles en la colección Automovil.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Automovil/GetAutomovil
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
        "ID_Automovil": 1,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Camry",<br>
        "Anio": 2023,<br>
        "Tipo": "\tTurismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 250000<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "ID_Automovil": 2,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Corolla",<br>
        "Anio": 2023,<br>
        "Tipo": "Turismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 200000<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "ID_Automovil": 3,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota RAV4",<br>
        "Anio": 2023,<br>
        "Tipo": "SUV",<br>
        "Capacidad": 5,<br>
        "Precio_Diario": 150000<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "ID_Automovil": 4,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Prius",<br>
        "Anio": 2023,<br>
        "Tipo": "Híbrido",<br>
        "Capacidad": 5,<br>
        "Precio_Diario": 350000<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "ID_Automovil": 5,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Highlander",<br>
        "Anio": 2023,<br>
        "Tipo": "SUV",<br>
        "Capacidad": 7,<br>
        "Precio_Diario": 390000<br>
      },<br>
      {<br>
        "_id": "64dd7f89246a52c5500a256b",<br>
        "ID_Automovil": 6,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Sammy",<br>
        "Anio": 2023,<br>
        "Tipo": "Turismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 250000<br>
      },<br>
      {<br>
        "_id": "64dd7f8e246a52c5500a256c",<br>
        "ID_Automovil": 6,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Sammy",<br>
        "Anio": 2023,<br>
        "Tipo": "Turismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 250000<br>
      }<br>
    ]
</details>


------

## 🚨/PostAutomovil

**`POST /PostAutomovil`**: El SubEndPoint  `/PostAutomovil`: es una ruta de la API que permite crear un nuevo documento en la colección Automovil.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Automovil:</strong> Número entero (int) que identifica de manera única el automóvil que se alquila.<br>
    <strong>marca_Automovil:</strong> Cadena (string) que representa la marca del automóvil.<br>
    <strong>modelo_Automovil:</strong> Cadena (string) que representa el modelo del automóvil.<br>
    <strong>anio_Automovil:</strong> Número entero (int) que indica el año de fabricación del automóvil.<br>
    <strong>tipo_Automovil:</strong> Cadena (string) que describe el tipo de automóvil, por ejemplo, "Turismo", "SUV", etc.<br>
    <strong>capacidad_Automovil:</strong> Número entero (int) que representa la capacidad de pasajeros del automóvil.<br>
    <strong>precio_Diario_Automovil:</strong> Número decimal (float) que indica el precio diario del alquiler del automóvil.
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Automovil/PostAutomovil
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
        "identificacion_Automovil": 6,<br>
        "marca_Automovil": "Toyota",<br>
        "modelo_Automovil": "Toyota Sammy",<br>
        "anio_Automovil": 2023,<br>
        "tipo_Automovil": "Turismo",<br>
        "capacidad_Automovil": 4,<br>
        "precio_Diario_Automovil": 250000<br>
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
## 🛃/PutAutomovil

**`PUT /PutAutomovil`**: El SubEndPoint  `/PutAutomovil`: es una ruta de la API que permite actualizar un documento en la colección Automovil.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
     <strong>marca_Automovil:</strong> Cadena (string) que representa la marca del automóvil.<br>
    <strong>modelo_Automovil:</strong> Cadena (string) que representa el modelo del automóvil.<br>
    <strong>anio_Automovil:</strong> Número entero (int) que indica el año de fabricación del automóvil.<br>
    <strong>tipo_Automovil:</strong> Cadena (string) que describe el tipo de automóvil, por ejemplo, "Turismo", "SUV", etc.<br>
    <strong>capacidad_Automovil:</strong> Número entero (int) que representa la capacidad de pasajeros del automóvil.<br>
    <strong>precio_Diario_Automovil:</strong> Número decimal (float) que indica el precio diario del alquiler del automóvil.
</details>


**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Automovil/PutAutomovil?id=<id>
    
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
  	{ <br>
        "marca_Automovil": "Toyota",<br>
        "modelo_Automovil": "Toyota Cautin",<br>
        "anio_Automovil": 2023,<br>
        "tipo_Automovil": "Turismo",<br>
        "capacidad_Automovil": 4,<br>
        "precio_Diario_Automovil": 15544<br>
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
## 💢/DeleteAutomovil

**`DELETE /DeleteAutomovil`**: El SubEndPoint  `/DeleteAutomovil`: es una ruta de la API que permite eliminar un documento en la colección Automovil.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Automovil/DeleteAutomovil
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

# 🚨**Consultas Especiales: /Automovil**🚨
------

## 🦊(2)/AutomovilesDisp

**`GET /AutomovilesDisp`**: El SubEndPoint `/AutomovilesDisp`: te permite **Obtener todos los automóviles disponibles para alquiler.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Automovil/AutomovilesDisp
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
        "_id": 3,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota RAV4",<br>
        "Anio": 2023,<br>
        "Tipo": "SUV",<br>
        "Capacidad": 5,<br>
        "Precio_Diario": 150000,<br>
        "Alquileres": [<br>
          {<br>
            "id": 2,<br>
            "Fecha_Inicio": "2023-07-11T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-07-21T12:00:00.000Z",<br>
            "Costo_Total": 450000,<br>
            "Estado": "Activo"<br>
          },<br>
          {<br>
            "id": 7,
            "Fecha_Inicio": "1025-07-05T00:00:00.000Z",<br>
            "Fecha_Fin": "1223-01-01T00:00:00.000Z",<br>
            "Costo_Total": 23244000,<br>
            "Estado": "Muerto"<br>
          }<br>
        ]<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Corolla",<br>
        "Anio": 2023,<br>
        "Tipo": "Turismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 200000,<br>
        "Alquileres": [<br>
          {<br>
            "id": 3,<br>
            "Fecha_Inicio": "2023-08-01T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-08-12T12:00:00.000Z",<br>
            "Costo_Total": 1600000,<br>
            "Estado": "Pendiente"<br>
          },<br>
          {<br>
            "id": 1,<br>
            "Fecha_Inicio": "2023-07-05T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-08-01T12:00:00.000Z",<br>
            "Costo_Total": 2800000,<br>
            "Estado": "Activo"<br>
          },<br>
          {<br>
            "id": 9,
            "Fecha_Inicio": "2023-07-05T00:00:00.000Z",<br>
            "Fecha_Fin": "2023-01-01T00:00:00.000Z",<br>
            "Costo_Total": 280000.01,<br>
            "Estado": "Activo"<br>
          }<br>
        ]<br>
      },<br>
      {<br>
        "_id": 1,<br>
        "Marca": "Toyota",<br>
        "Modelo": "Toyota Camry",<br>
        "Anio": 2023,<br>
        "Tipo": "\tTurismo",<br>
        "Capacidad": 4,<br>
        "Precio_Diario": 250000,<br>
        "Alquileres": [<br>
          {<br>
            "id": 4,<br>
            "Fecha_Inicio": "2023-07-07T12:00:00.000Z",<br>
            "Fecha_Fin": "2023-08-11T12:00:00.000Z",<br>
            "Costo_Total": 250000,<br>
            "Estado": "Pendiente"<br>
          },<br>
          {<br>
            "id": 5,<br>
            "Fecha_Inicio": "2023-12-01T12:00:00.000Z",<br>
            "Fecha_Fin": "2024-01-01T12:00:00.000Z",<br>
            "Costo_Total": 2500000,<br>
            "Estado": "Pendiente"<br>
          }<br>
        ]<br>
      }<br>
    ]
 </details>

------

## 🧧(10)/AutosMax5

**`GET /AutosMax5`**: El SubEndPoint `/AutosMax5`: te permite **Mostrar todos los automóviles con una capacidad mayor a 5 personas.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Automovil/AutosMax5
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

## 🎫(15)/AutosMarcasModelos

**`GET /AutosMarcasModelos`**: El SubEndPoint `/AutosMarcasModelos`: te permite **Listar todos los automóviles ordenados por marca y modelo.**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Automovil/AutosMarcasModelos
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
    "_id": 1,<br>
    "ID_Automovil": 1,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota Camry",<br>
    "Anio": 2023,<br>
    "Tipo": "\tTurismo",<br>
    "Capacidad": 4,<br>
    "Precio_Diario": 250000<br>
  },<br>
  {<br>
    "_id": 6,<br>
    "ID_Automovil": 6,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota Cautin",<br>
    "Anio": 2023,<br>
    "Tipo": "Turismo",<br>
    "Capacidad": 4,<br>
    "Precio_Diario": 15544<br>
  },<br>
  {<br>
    "_id": 2,<br>
    "ID_Automovil": 2,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota Corolla",<br>
    "Anio": 2023,<br>
    "Tipo": "Turismo",<br>
    "Capacidad": 4,<br>
    "Precio_Diario": 200000<br>
  },<br>
  {<br>
    "_id": 5,<br>
    "ID_Automovil": 5,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota Highlander",<br>
    "Anio": 2023,<br>
    "Tipo": "SUV",<br>
    "Capacidad": 7,<br>
    "Precio_Diario": 390000<br>
  },<br>
  {<br>
    "_id": 4,
    "ID_Automovil": 4,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota Prius",<br>
    "Anio": 2023,<br>
    "Tipo": "Híbrido",<br>
    "Capacidad": 5,<br>
    "Precio_Diario": 350000<br>
  },<br>
  {<br>
    "_id": 3,<br>
    "ID_Automovil": 3,<br>
    "Marca": "Toyota",<br>
    "Modelo": "Toyota RAV4",<br>
    "Anio": 2023,<br>
    "Tipo": "SUV",<br>
    "Capacidad": 5,<br>
    "Precio_Diario": 150000<br>
  }<br>
]
</details>

------

## ⚛️(18)/DispoAutosMax5

**`GET /DispoAutosMax5`**: El SubEndPoint `/DispoAutosMax5`: te permite **Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada (body)
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Automovil/DispoAutosMax5
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

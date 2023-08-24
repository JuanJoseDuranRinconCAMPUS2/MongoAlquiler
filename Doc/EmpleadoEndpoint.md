# **🪄🚍Endpoint /Empleado🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(3).png?raw=true)

------

# 👩‍💼/**Empleado**👩‍💼

**Este endpoint te permite manejar y administrar la coleccion "Empleado" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [👩‍💻GetEmpleado👩‍💻](#getempleado) 
2. [🚨PostEmpleado🚨](#postempleado)
3. [🛃PutEmpleado🛃](#putempleado) 
4. [💢DeleteEmpleado💢](#deleteempleado) 
5. [🚨Consultas Especiales: /Empleado🚨](#consultas-especiales-empleado)   
6. [🦊(6)Empleado_Vendedores🦊](#6empleado_vendedores)  
7. [🧧(13)GerenteOrAsistente🧧](#13gerenteorasistente)  

------

## 👩‍💻/GetEmpleado

**`GET /GetEmpleado`**: El SubEndPoint `/GetEmpleado`: te permite obtener la lista todos los empleados en la colección Empleado.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Empleado/GetEmpleado
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
    "ID_Empleado": 1,<br>
    "Nombre": "Juan Jose",<br>
    "Apellido": "Rincon",<br>
    "DNI": "12344234",<br>
    "Direccion": "carreca 54 23-11",<br>
    "Telefono": "234231",<br>
    "Cargo": "Gerente"<br>
  },<br>
  {<br>
    "_id": 2,<br>
    "ID_Empleado": 2,<br>
    "Nombre": "Jose Luis",<br>
    "Apellido": "Ramirez",<br>
    "DNI": "546645131",<br>
    "Direccion": "carreca 43 23-11",<br>
    "Telefono": "234231",<br>
    "Cargo": "Asistente"<br>
  },<br>
  {<br>
    "_id": 3,<br>
    "ID_Empleado": 3,<br>
    "Nombre": "Angel",<br>
    "Apellido": "ortega",<br>
    "DNI": "7888994",<br>
    "Direccion": "carreca 23 23-11",<br>
    "Telefono": "234231",<br>
    "Cargo": "Asistente"<br>
  },<br>
  {<br>
    "_id": 4,<br>
    "ID_Empleado": 4,<br>
    "Nombre": "Laura",<br>
    "Apellido": "Rincon",<br>
    "DNI": "4545645",<br>
    "Direccion": "carreca 54 23-11",<br>
    "Telefono": "234231",<br>
    "Cargo": "Vendedor"<br>
  },<br>
  {<br>
    "_id": 5,<br>
    "ID_Empleado": 5,<br>
    "Nombre": "Marsssia",<br>
    "Apellido": "Rodriguez",<br>
    "DNI": "343434",<br>
    "Direccion": "carreca 11 12-23",<br>
    "Telefono": "232312321",<br>
    "Cargo": "Activo",<br>
    "apellido_Cliente": "Rodriguez",<br>
    "direccion_Cliente": "carreca 11 12-23",<br>
    "email_Cliente": "Maria@gmail.com",<br>
    "identification_Card_Cliente": "343434",<br>
    "nombre_Cliente": "Marsssia",<br>
    "telefono_Cliente": "232312321"<br>
  },<br>
  {<br>
    "_id": 6,<br>
    "ID_Empleado": 6,<br>
    "Nombre": "Angel",<br>
    "Apellido": "ortega",<br>
    "DNI": "7888994",<br>
    "Direccion": "carreca 23 23-11",<br>
    "Telefono": "234231",<br>
    "Cargo": "Asistente"<br>
  }<br>
]
</details>


------

## 🚨/PostEmpleado

**`POST /PostEmpleado`**: El SubEndPoint  `/PostEmpleado`: es una ruta de la API que permite crear un nuevo documento en la colección Empleado.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Empleado:</strong> Número entero (int) que identifica de manera única al empleado.<br>
<strong>nombre_Empleado:</strong> Cadena (string) que representa el nombre del empleado.<br>
<strong>apellido_Empleado:</strong> Cadena (string) que representa el apellido del empleado.<br>
<strong>identification_Card_Empleado:</strong> Cadena (string) que contiene el número de la tarjeta de identificación del empleado.<br>
<strong>direccion_Empleado:</strong> Cadena (string) que describe la dirección del empleado.<br>
<strong>telefono_Empleado:</strong> Cadena (string) que representa el número de teléfono del empleado.<br>
<strong>cargo_Empleado:</strong> Cadena (string) que indica el cargo o puesto del empleado en la organización.
</details>


**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Empleado/PostEmpleado
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
        "identificacion_Empleado": 6,<br>
        "nombre_Empleado": "Angel",<br>
        "apellido_Empleado": "ortega",<br>
        "identification_Card_Empleado": "7888994",<br>
        "direccion_Empleado": "carreca 23 23-11",<br>
        "telefono_Empleado": "234231",<br>
        "cargo_Empleado": "Asistente"<br>
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


## 🛃/PutEmpleado

**`PUT /PutEmpleado`**: El SubEndPoint  `/PutEmpleado`: es una ruta de la API que permite actualizar un documento en la colección Empleado.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>nombre_Empleado:</strong> Cadena (string) que representa el nombre del empleado.<br><strong>apellido_Empleado:</strong> Cadena (string) que representa el apellido del empleado.<br><strong>identification_Card_Empleado:</strong> Cadena (string) que contiene el número de la tarjeta de identificación del empleado.<br><strong>direccion_Empleado:</strong> Cadena (string) que describe la dirección del empleado.<br><strong>telefono_Empleado:</strong> Cadena (string) que representa el número de teléfono del empleado.<br><strong>cargo_Empleado:</strong> Cadena (string) que indica el cargo o puesto del empleado en la organización.
</details>


**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Empleado/PutEmpleado?id=<id>
    
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


## 💢/DeleteEmpleado

**`DELETE /DeleteEmpleado`**: El SubEndPoint  `/DeleteEmpleado`: es una ruta de la API que permite eliminar un documento en la colección Empleado.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Empleado/DeleteEmpleado
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

# 🚨**Consultas Especiales: /Empleado**🚨
------

## 🦊(6)/Empleado_Vendedores

**`GET /Empleado_Vendedores`**: El SubEndPoint `/Empleado_Vendedores`: te permite **Listar los empleados con el cargo de "Vendedor".**

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Empleado/Empleado_Vendedores
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
        "_id": 4,<br>
        "ID_Empleado": 4,<br>
        "Nombre": "Laura",<br>
        "Apellido": "Rincon",<br>
        "DNI": "4545645",<br>
        "Direccion": "carreca 54 23-11",<br>
        "Telefono": "234231",<br>
        "Cargo": "Vendedor"<br>
      }<br>
    ]
 </details>

------

## 🧧(13)/GerenteOrAsistente

**`GET /GerenteOrAsistente`**: El SubEndPoint `/GerenteOrAsistente`: te permite **Mostrar los empleados con cargo de "Gerente" o "Asistente".** 

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Empleado/GerenteOrAsistente
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
            "ID_Empleado": 1,<br>
            "Nombre": "Juan Jose",<br>
            "Apellido": "Rincon",<br>
            "DNI": "12344234",<br>
            "Direccion": "carreca 54 23-11",<br>
            "Telefono": "234231",<br>
            "Cargo": "Gerente"<br>
          },<br>
          {<br>
            "_id": 4,<br>
            "ID_Empleado": 4,<br>
            "Nombre": "Laura",<br>
            "Apellido": "Rincon",<br>
            "DNI": "4545645",<br>
            "Direccion": "carreca 54 23-11",<br>
            "Telefono": "234231",<br>
            "Cargo": "Vendedor"<br>
          }<br>
    ]
</details>

------
# **🪄🚍Endpoint /RegistroDevolucion🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(4).png?raw=true)

------

# 📆/**RegistroDevolucion**📆

**Este endpoint te permite manejar y administrar la coleccion "RegistroDevolucion" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [🗓️GetRegistroDevolucion🗓️](#%EF%B8%8Fgetregistrodevolucion) 
2. [🚨PostRegistroDevolucion🚨](#postregistrodevolucion)
3. [🛃PutRegistroDevolucion🛃](#putregistrodevolucion) 
4. [💢DeleteRegistroDevolucion💢](#deleteregistrodevolucion) 
------

## 🗓️/GetRegistroDevolucion

**`GET /GetRegistroDevolucion`**: El SubEndPoint `/GetRegistroDevolucion`: te permite obtener la lista todos los registros en la colección RegistroDevolucion.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/RegistroDevolucion/GetRegistroDevolucion
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
        "ID_Registro": 1,<br>
        "alquiler_id": 1,<br>
        "empleado_id": 2,<br>
        "Fecha_Devolucion": "2023-04-07T12:00:00.000Z",<br>
        "Combustible_Devuelto": 2.5,<br>
        "Kilometraje_Devuelto": 1566,<br>
        "Monto_Adicional": 100000<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "ID_Registro": 2,<br>
        "alquiler_id": 4,<br>
        "empleado_id": 3,<br>
        "Fecha_Devolucion": "2023-05-03T12:00:00.000Z",<br>
        "Combustible_Devuelto": 11.5,<br>
        "Kilometraje_Devuelto": 2000,<br>
        "Monto_Adicional": 20000<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "ID_Registro": 3,<br>
        "alquiler_id": 5,<br>
        "empleado_id": 1,<br>
        "Fecha_Devolucion": "2023-03-07T12:00:00.000Z",<br>
        "Combustible_Devuelto": 6.5,<br>
        "Kilometraje_Devuelto": 1250,<br>
        "Monto_Adicional": 100<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "ID_Registro": 4,<br>
        "alquiler_id": 2,<br>
        "empleado_id": 3,<br>
        "Fecha_Devolucion": "2023-07-07T12:00:00.000Z",<br>
        "Combustible_Devuelto": 9.5,<br>
        "Kilometraje_Devuelto": 2566,<br>
        "Monto_Adicional": 20500<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "ID_Registro": 5,<br>
        "alquiler_id": 5,<br>
        "empleado_id": 1,<br>
        "Fecha_Devolucion": "2023-11-11T12:00:00.000Z",<br>
        "Combustible_Devuelto": 0.5,<br>
        "Kilometraje_Devuelto": 2500,<br>
        "Monto_Adicional": 50000<br>
      },<br>
      {<br>
        "_id": 6,<br>
        "ID_Registro": 6,<br>
        "alquiler_id": 2,<br>
        "empleado_id": 2,<br>
        "Fecha_Devolucion": "2023-02-11T00:00:00.000Z",<br>
        "Combustible_Devuelto": 2.5,<br>
        "Kilometraje_Devuelto": 1566,<br>
        "Monto_Adicional": 100000<br>
      }<br>
    ]
</details>

------

## 🚨/PostRegistroDevolucion

**`POST /PostRegistroDevolucion`**: El SubEndPoint  `/PostRegistroDevolucion`: es una ruta de la API que permite crear un nuevo documento en la colección RegistroDevolucion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_RegistroDev:</strong> Número entero (int) que identifica de manera única el registro de devolución.<br>
    <strong>identificacion_Alquiler:</strong> Número entero (int) que identifica de manera única el alquiler asociado a la devolución.<br>
    <strong>identificacion_Empleado:</strong> Número entero (int) que identifica de manera única el empleado responsable de la devolución.<br>
    <strong>fecha_Dev:</strong> Fecha en formato de cadena (string) que representa la fecha de la devolución (ejemplo: "2023-01-01").<br>
    <strong>combustible_Dev:</strong> Número decimal (float) que indica la cantidad de combustible entregado en la devolución.<br>
    <strong>kilometraje_Dev:</strong> Número entero (int) que representa el kilometraje registrado en la devolución.<br>
    <strong>monto_Superior:</strong> Número decimal (float) que indica el monto adicional aplicado en la devolución.<br>
</details>



**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/RegistroDevolucion/PostRegistroDevolucion
```
**🧧Metodo HTTP🧧**

```html
POST
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{ <br>
        "identificacion_RegistroDev": 6,<br>
        "identificacion_Alquiler": 1,<br>
        "identificacion_Empleado": 2,<br>
        "fecha_Dev": "2023-01-01",<br>
        "combustible_Dev": 2.5,<br>
        "kilometraje_Dev": 1566,<br>
        "monto_Superior": 100000<br>
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


## 🛃/PutRegistroDevolucion

**`PUT /PutRegistroDevolucion`**: El SubEndPoint  `/PutRegistroDevolucion`: es una ruta de la API que permite actualizar un documento en la colección RegistroDevolucion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      <strong>identificacion_Alquiler:</strong> Número entero (int) que identifica de manera única el alquiler asociado a la devolución.<br>
    <strong>identificacion_Empleado:</strong> Número entero (int) que identifica de manera única el empleado responsable de la devolución.<br>
    <strong>fecha_Dev:</strong> Fecha en formato de cadena (string) que representa la fecha de la devolución (ejemplo: "2023-01-01").<br>
    <strong>combustible_Dev:</strong> Número decimal (float) que indica la cantidad de combustible entregado en la devolución.<br>
    <strong>kilometraje_Dev:</strong> Número entero (int) que representa el kilometraje registrado en la devolución.<br>
    <strong>monto_Superior:</strong> Número decimal (float) que indica el monto adicional aplicado en la devolución.<br>
</details>



**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/RegistroDevolucion/PutRegistroDevolucion?id=<id>
    
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
        "identificacion_Alquiler": 2,<br>
        "identificacion_Empleado": 2,<br>
        "fecha_Dev": "2023-02-11",<br>
        "combustible_Dev": 2.5,<br>
        "kilometraje_Dev": 1566,<br>
        "monto_Superior": 100000<br>
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


## 💢/DeleteRegistroDevolucion

**`DELETE /DeleteRegistroDevolucion`**: El SubEndPoint  `/DeleteRegistroDevolucion`: es una ruta de la API que permite eliminar un documento en la colección RegistroDevolucion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/RegistroDevolucion/DeleteRegistroDevolucion
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

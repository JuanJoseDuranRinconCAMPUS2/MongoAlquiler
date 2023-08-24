# **🪄🚍Endpoint /RegistroEntrega🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(5).png?raw=true)

------

# 📆/**RegistroEntrega**📆

**Este endpoint te permite manejar y administrar la coleccion "RegistroDevolucion" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [🗓️GetRegistroEntrega🗓️](#%EF%B8%8Fgetregistroentrega) 
2. [🚨PostRegistroEntrega🚨](#postregistroentrega)
3. [🛃PutRegistroEntrega🛃](#putregistroentrega) 
4. [💢DeleteRegistroEntrega💢](#deleteregistroentrega) 
------

## 🗓️/GetRegistroEntrega

**`GET /GetRegistroEntrega`**: El SubEndPoint `/GetRegistroEntrega`: te permite obtener la lista todos los registros en la colección RegistroEntrega.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/RegistroEntrega/GetRegistroEntrega
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
        "Fecha_Entrega": "2023-04-07T12:00:00.000Z",<br>
        "Combustible_Entregado": 11.5,<br>
        "Kilometraje_Entregado": 5000<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "ID_Registro": 2,<br>
        "alquiler_id": 4,<br>
        "empleado_id": 3,<br>
        "Fecha_Entrega": "2023-01-15T12:00:00.000Z",<br>
        "Combustible_Entregado": 2.5,<br>
        "Kilometraje_Entregado": 5001<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "ID_Registro": 3,<br>
        "alquiler_id": 2,<br>
        "empleado_id": 2,<br>
        "Fecha_Entrega": "2023-09-30T12:00:00.000Z",<br>
        "Combustible_Entregado": 12.5,<br>
        "Kilometraje_Entregado": 5000<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "ID_Registro": 4,<br>
        "alquiler_id": 4,<br>
        "empleado_id": 5,<br>
        "Fecha_Entrega": "2023-05-07T12:00:00.000Z",<br>
        "Combustible_Entregado": 6.5,<br>
        "Kilometraje_Entregado": 6000<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "ID_Registro": 5,<br>
        "alquiler_id": 3,<br>
        "empleado_id": 1,<br>
        "Fecha_Entrega": "2023-04-17T12:00:00.000Z",<br>
        "Combustible_Entregado": 3.5,<br>
        "Kilometraje_Entregado": 10000<br>
      }<br>
    ]
</details>


------

## 🚨/PostRegistroEntrega

**`POST /PostRegistroEntrega`**: El SubEndPoint  `/PostRegistroEntrega`: es una ruta de la API que permite crear un nuevo documento en la colección RegistroEntrega.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_RegistroEnt:</strong> Número entero (int) que identifica de manera única el registro de entrega. <br>
    <strong>identificacion_Alquiler:</strong> Número entero (int) que identifica de manera única el alquiler asociado al registro de entrega.<br>
    <strong>identificacion_Empleado:</strong> Número entero (int) que identifica de manera única al empleado responsable de la entrega.<br>
    <strong>fecha_Ent:</strong> Fecha en formato de cadena (string) que representa la fecha de entrega (ejemplo: "2023-04-07").<br>
    <strong>combustible_Ent:</strong> Número decimal (float) que indica la cantidad de combustible entregado en litros.<br>
    <strong>kilometraje_Ent:</strong> Número entero (int) que representa el kilometraje del vehículo al momento de la entrega.<br>
</details>




**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/RegistroEntrega/PostRegistroEntrega
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
        "identificacion_RegistroEnt": 6,<br>
        "identificacion_Alquiler": 4,<br>
        "identificacion_Empleado": 2,<br>
        "fecha_Ent": "2023-04-07",<br>
        "combustible_Ent": 11.5,<br>
        "kilometraje_Ent": 5000<br>
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


## 🛃/PutRegistroEntrega

**`PUT /PutRegistroEntrega`**: El SubEndPoint  `/PutRegistroEntrega`: es una ruta de la API que permite actualizar un documento en la colección RegistroEntrega.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
      <strong>identificacion_Alquiler:</strong> Número entero (int) que identifica de manera única el alquiler asociado al registro de entrega.<br>
    <strong>identificacion_Empleado:</strong> Número entero (int) que identifica de manera única al empleado responsable de la entrega.<br>
    <strong>fecha_Ent:</strong> Fecha en formato de cadena (string) que representa la fecha de entrega (ejemplo: "2023-04-07").<br>
    <strong>combustible_Ent:</strong> Número decimal (float) que indica la cantidad de combustible entregado en litros.<br>
    <strong>kilometraje_Ent:</strong> Número entero (int) que representa el kilometraje del vehículo al momento de la entrega.<br>
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
            "identificacion_Alquiler": 4,<br>
            "identificacion_Empleado": 2,<br>
            "fecha_Ent": "2023-04-07",<br>
            "combustible_Ent": 11.5,<br>
            "kilometraje_Ent": 5000<br>
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


## 💢/DeleteRegistroEntrega

**`DELETE /DeleteRegistroEntrega`**: El SubEndPoint  `/DeleteRegistroEntrega`: es una ruta de la API que permite eliminar un documento en la colección RegistroEntrega.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/RegistroEntrega/DeleteRegistroEntrega
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
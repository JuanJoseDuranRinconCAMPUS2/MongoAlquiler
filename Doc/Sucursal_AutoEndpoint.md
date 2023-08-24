# **🪄🚍Endpoint /Sucursal_Auto🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23%20(8).png?raw=true)

------

# 📆/**Sucursal_Auto**📆

**Este endpoint te permite manejar y administrar la coleccion "Sucursal_Auto" de la base de datos MongoDB. A continuación, se detalla cómo usar las rutas de este endpoint  y qué datos se deben proporcionar en cada solicitud.**

**Recuerda cada ruta necesita obligatoriamente su Token de validacion.**

------
## 🪙**Indice**🪙
1. [🗓️GetSucursal_Auto🗓️](#%EF%B8%8Fgetsucursal_auto) 
2. [🚨PostSucursal_Auto🚨](#postsucursal_auto)
3. [🛃PutSucursal_Auto🛃](#putsucursal_auto) 
4. [💢DeleteSucursal_Auto💢](#deletesucursal_auto) 
------

## 🗓️/GetSucursal_Auto

**`GET /GetSucursal_Auto`**: El SubEndPoint `/GetSucursal_Auto`: te permite obtener la lista todos las relaciones entre autos y sucursales en la colección Sucursal_Auto.

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada
- Necesitas una token generada para usar ese endpoint

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5010/Sucursal_Auto/GetSucursal_Auto
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
        "sucursal_id": 1,<br>
        "automovil_id": 2,<br>
        "Cantidad_Disponible": 3<br>
      },<br>
      {<br>
        "_id": 2,<br>
        "sucursal_id": 5,<br>
        "automovil_id": 3,<br>
        "Cantidad_Disponible": 4<br>
      },<br>
      {<br>
        "_id": 3,<br>
        "sucursal_id": 3,<br>
        "automovil_id": 1,<br>
        "Cantidad_Disponible": 6<br>
      },<br>
      {<br>
        "_id": 4,<br>
        "sucursal_id": 4,<br>
        "automovil_id": 3,<br>
        "Cantidad_Disponible": 1<br>
      },<br>
      {<br>
        "_id": 5,<br>
        "sucursal_id": 2,<br>
        "automovil_id": 2,<br>
        "Cantidad_Disponible": 5<br>
      },<br>
      {<br>
        "_id": 6,<br>
        "sucursal_id": 2,<br>
        "automovil_id": 2,<br>
        "Cantidad_Disponible": 3<br>
      }<br>
    ]
</details>



------

## 🚨/PostSucursal_Auto

**`POST /PostSucursal_Auto`**: El SubEndPoint  `/PostSucursal_Auto`: es una ruta de la API que permite crear un nuevo documento en la colección Sucursal_Auto.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
   <strong>identificacion_Sucursal_A:</strong> Número entero (int) que identifica de manera única el registro en la colección "Sucursal_Auto".<br>
<strong>identificacion_Sucursal:</strong> Número entero (int) que identifica de manera única la sucursal asociada al registro.<br>
<strong>identificacion_Auto:</strong> Número entero (int) que identifica de manera única el automóvil asociado al registro.<br>
<strong>cantidad_Disp:</strong> Número entero (int) que indica la cantidad disponible de automóviles en la sucursal.<br>
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint


**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal_Auto/PostSucursal_Auto
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
        "identificacion_Sucursal_A": 6,<br>
        "identificacion_Sucursal": 1,<br>
        "identificacion_Auto": 2,<br>
        "cantidad_Disp": 3<br>
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


## 🛃/PutSucursal_Auto

**`PUT /PutSucursal_Auto`**: El SubEndPoint  `/PutSucursal_Auto`: es una ruta de la API que permite actualizar un documento en la colección Sucursal_Auto.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>identificacion_Sucursal:</strong> Número entero (int) que identifica de manera única la sucursal asociada al registro.<br>
<strong>identificacion_Auto:</strong> Número entero (int) que identifica de manera única el automóvil asociado al registro.<br>
<strong>cantidad_Disp:</strong> Número entero (int) que indica la cantidad disponible de automóviles en la sucursal.<br>
</details>

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint
- id debe ser un numero positivo

**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal_Auto/PutSucursal_Auto?id=<id>
    
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
            "identificacion_Sucursal": 1,<br>
            "identificacion_Auto": 2,<br>
            "cantidad_Disp": 3<br>
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


## 💢/DeleteSucursal_Auto

**`DELETE /DeleteSucursal_Auto`**: El SubEndPoint  `/DeleteSucursal_Auto`: es una ruta de la API que permite eliminar un documento en la colección Sucursal_Auto.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string) [debe ser un numero dentro de un string ejem: "3"]
</details>
**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint

**Ruta Especifica**

```html
http://127.19.8.7:5010/Sucursal_Auto/DeleteSucursal_Auto
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
# **🪄🚍Sistema de Alquileres de Vehículos🚍🪄**

------

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/proyecto1%23.png?raw=true)

**¡Bienvenidos al proyecto de Sistema de Administración de Alquileres de Vehículos! En este proyecto, aprenderemos a crear y gestionar una base de datos utilizando MongoDB, así como construir una API robusta con endpoints para manipular los datos almacenados en dicha base de datos. Además, implementaremos la creación y verificación de usuarios mediante tokens JWT para garantizar la seguridad en el acceso a la API.**

------



[TOC]

------

## **🧧⚙️ Diagrama Proyecto ⚙️🧧**

![](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/imgs/diagramaAlquiler.png?raw=true)

------

## 🔨🔗Archivos de Base de datos🔗🔨

Los archivos que configuran la base de datos dentro de `/db` son los siguientes:

- **db_campus_alquiler.mongodb**: Contiene el código referente a la creación de la base de datos 
- **query.mongodb**: Contiene el código referente a las diferentes consultas de la data de la base de datos.

------

## 🧑‍💻🆙Estructura de la Base de Datos🆙🧑‍💻

### 🏪Colección "sucursal"🏪

Esta colección almacena información sobre las sucursales de alquiler de automóviles.

  <details>
    <summary> <h3> Valores de la Colección "sucursal" </h3></summary> 
   	<strong>- _id (Number):</strong> Identificador único de la sucursal. <br>
    <strong>- ID_sucursal (Number):</strong> Identificador numérico de la sucursal.<br>
    <strong>- Nombre (String):</strong> Nombre de la sucursal. <br>
    <strong>- Direccion (String):</strong> Dirección de la sucursal. <br>
    <strong>- Telefono (Number):</strong> Número de teléfono de la sucursal. <br>
 </details>

### 🚗Colección "automovil"🚗

Esta colección almacena información sobre los automóviles disponibles para alquiler.

<details>
    <summary> <h3> Valores de la Colección "automovil" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del automóvil. <br>
    <strong>- ID_Automovil (Number):</strong> Identificador numérico del automóvil. <br>
    <strong>- Marca (String):</strong> Marca del automóvil. <br>
    <strong>- Modelo (String):</strong> Modelo del automóvil. <br>
    <strong>- Anio (Number):</strong> Año de fabricación del automóvil. <br>
    <strong>- Tipo (String):</strong> Tipo de automóvil. <br>
    <strong>- Capacidad (Number):</strong> Capacidad de pasajeros del automóvil. <br>
    <strong>- Precio_Diario (Number):</strong> Precio diario de alquiler del automóvil. <br>
 </details>

### 🚛Colección "sucursal_automovil"🚛

Esta colección relaciona las sucursales con los automóviles disponibles y la cantidad de estos.

<details>
    <summary> <h3> Valores de la Colección "sucursal_automovil" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único de la relación. <br>
    <strong>- sucursal_id (Number):</strong> Identificador de la sucursal. <br>
    <strong>- automovil_id (Number):</strong> Identificador del automóvil. <br>
    <strong>- Cantidad_Disponible (Number):</strong> Cantidad de automóviles disponibles en la sucursal. <br>
 </details>

### 👨‍🎤Colección "cliente"👨‍🎤

Esta colección almacena información sobre los clientes que realizan alquileres.

<details>
    <summary> <h3> Valores de la Colección "cliente" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del cliente. <br>
    <strong>- ID_Cliente (Number):</strong> Identificador numérico del cliente. <br>
    <strong>- Nombre (String):</strong> Nombre del cliente. <br>
    <strong>- Apellido (String):</strong> Apellido del cliente. <br>
    <strong>- DNI (String):</strong> Número de Documento Nacional de Identidad (DNI) del cliente. <br>
    <strong>- Direccion (String):</strong> Dirección del cliente. <br>
    <strong>- Telefono (String):</strong> Número de teléfono del cliente. <br>
    <strong>- Email (String):</strong> Dirección de correo electrónico del cliente. <br>
 </details>

### 🪙Colección "alquiler"🪙

Esta colección registra los alquileres de automóviles realizados por los clientes.

<details>
    <summary> <h3> Valores de la Colección "alquiler" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del alquiler. <br>
    <strong>- ID_Alquiler (Number):</strong> Identificador numérico del alquiler. <br>
    <strong>- cliente_id (Number):</strong> Identificador del cliente. <br>
    <strong>- automovil_id (Number):</strong> Identificador del automóvil alquilado. <br>
    <strong>- Fecha_Inicio (Date):</strong> Fecha de inicio del alquiler. <br>
    <strong>- Fecha_Fin (Date):</strong> Fecha de finalización del alquiler. <br>
    <strong>- Costo_Total (Number):</strong> Costo total del alquiler. <br>
    <strong>- Estado (String):</strong> Estado actual del alquiler. <br>
 </details>

### 🔗Colección "reserva"🔗

Esta colección registra las reservas de automóviles realizadas por los clientes.

<details>
    <summary> <h3> Valores de la Colección "reserva" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único de la reserva. <br>
    <strong>- ID_Reserva (Number):</strong> Identificador numérico de la reserva. <br>
    <strong>- cliente_id (Number):</strong> Identificador del cliente. <br>
    <strong>- automovil_id (Number):</strong> Identificador del automóvil reservado. <br>
    <strong>- Fecha_Reserva (Date):</strong> Fecha en que se realizó la reserva. <br>
    <strong>- Fecha_Inicio (Date):</strong> Fecha de inicio de la reserva. <br>
    <strong>- Fecha_Fin (Date):</strong> Fecha de finalización de la reserva. <br>
    <strong>- Estado (String):</strong> Estado actual de la reserva. <br>
 </details>

### 👨‍🏭Colección "empleado"👨‍🏭

Esta colección almacena información sobre los empleados que gestionan los alquileres y devoluciones.

<details>
    <summary> <h3> Valores de la Colección "empleado" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del empleado. <br>
    <strong>- ID_Empleado (Number):</strong> Identificador numérico del empleado. <br>
    <strong>- Nombre (String):</strong> Nombre del empleado. <br>
    <strong>- Apellido (String):</strong> Apellido del empleado. <br>
    <strong>- DNI (String):</strong> Número de Documento Nacional de Identidad (DNI) del empleado. <br>
    <strong>- Direccion (String):</strong> Dirección del empleado. <br>
    <strong>- Telefono (String):</strong> Número de teléfono del empleado. <br>
    <strong>- Cargo (String):</strong> Cargo del empleado en la empresa. <br>
 </details>

### 🛂Colección "registro_entrega"🛂

Esta colección registra la entrega de automóviles a los clientes.

<details>
    <summary> <h3> Valores de la Colección "registro_entrega" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del registro de entrega. <br>
    <strong>- ID_Registro (Number):</strong> Identificador numérico del registro de entrega. <br>
    <strong>- alquiler_id (Number):</strong> Identificador del alquiler asociado. <br>
    <strong>- empleado_id (Number):</strong> Identificador del empleado que realizó la entrega. <br>
    <strong>- Fecha_Entrega (Date):</strong> Fecha en que se realizó la entrega. <br>
    <strong>- Combustible_Entregado (Number):</strong> Cantidad de combustible entregado en el vehículo. <br>
    <strong>- Kilometraje_Entregado (Number):</strong> Kilometraje registrado en el momento de la entrega. <br>
 </details>

### 🛃Colección "registro_devolucion"🛃

Esta colección registra la devolución de automóviles por parte de los clientes.

<details>
    <summary> <h3> Valores de la Colección "registro_devolucion" </h3></summary> 
    <strong>- _id (Number):</strong> Identificador único del registro de devolución. <br>
    <strong>- ID_Registro (Number):</strong> Identificador numérico del registro de devolución. <br>
    <strong>- alquiler_id (Number):</strong> Identificador del alquiler asociado. <br>
    <strong>- empleado_id (Number):</strong> Identificador del empleado que recibió la devolución. <br>
    <strong>- Fecha_Devolucion (Date):</strong> Fecha en que se realizó la devolución. <br>
    <strong>- Combustible_Devuelto (Number):</strong> Cantidad de combustible registrado al momento de la devolución. <br>
    <strong>- Kilometraje_Devuelto (Number):</strong> Kilometraje registrado en el momento de la devolución. <br>
    <strong>- Monto_Adicional (Number):</strong> Monto adicional aplicado al alquiler. <br>
 </details>

### 🛩️Colección "usuario_Api"🛩️

Esta colección almacena información sobre los usuarios de la API.

<details>
    <summary> <h3> Valores de la Colección "usuario_Api" </h3></summary> 
    <strong>- _id (ObjectId):</strong> Identificador único del usuario. <br>
    <strong>- nombre (String):</strong> Nombre del usuario. <br>
    <strong>- email (String):</strong> Correo electrónico del usuario. <br>
    <strong>- password (String):</strong> Contraseña del usuario. <br>
    <strong>- codigo_Rol (String):</strong> Código de rol asignado al usuario. <br>
 </details>
### ⚛️Colección "roles_Api"⚛️

Esta colección almacena información sobre los roles y sus accesos en la API.

  <details>
    <summary> <h3> Valores de la Colección "roles_Api" </h3></summary> 
   	<strong>- _id (Number):</strong> Identificador único del rol. <br>
    <strong>- Rol (String):</strong> Nombre del rol. <br>
    <strong>- Acceso (String):</strong> Accesos disponibles para el rol. <br>
 </details>


### 🧳Colección "tokens_Api"🧳

Esta colección almacena información sobre las tokens generadas en la API.

  <details>
    <summary> <h3> Valores de la Colección "tokens_Api" </h3></summary> 
   	<strong>- _id (Number):</strong> Identificador único de la token. <br>
    <strong>- id_usuario_Api (Number):</strong> Identificador numérico del usuario que solicito la Api.<br>
    <strong>- token (String):</strong> Token generada por la api. <br>
 </details>

------

## 🚨⚙️Requisitos⚙️🚨

Antes de ejecutar el código, asegúrate: 

- tener instalada la base de datos MongoDB en tu sistema.
- Tener instalado La extensión de MongoDB de VScode o la terminal de MongoDB

------

1. ## 💥⚙️**Pasos para usar la extensión de MongoDB en Visual Studio Code⚙️**💥

   (presiona la flecha para desplegar la información)

     <details>
       <summary> <h3> Paso 1: ⚓Instalación de la extensión⚓ </h3></summary> 
      <h4>  1. Abre Visual Studio Code <br>
       2. Haz clic en el ícono de "Extensiones" en la barra lateral izquierda (o presiona `Ctrl+Shift+X` en Windows/Linux o `Cmd+Shift+X` en macOS). <br>
       3. En el campo de búsqueda, escribe "MongoDB" y selecciona la extensión "MongoDB for VSCode" creada por Microsoft. <br>
       4. Haz clic en "Instalar" para instalar la extensión. <br></h4>
    </details>

     <details>
       <summary> <h3> Paso 2: 🛫Conexión a la base de datos MongoDB🛫 </h3></summary> 
      <h4> 
          1. Abre un proyecto en Visual Studio Code o crea uno nuevo. <br>
          2. En la barra lateral izquierda, selecciona la sección "MONGODB". <br>
          3. Haz clic en el ícono "Add Connection" (Agregar conexión) en la parte superior de la sección. <br>
          4. Selecciona o ingresa la cadena de conexión de tu base de datos MongoDB. Puedes usar una conexión local (`mongodb://localhost:27017/nombre_base_datos`) o una conexión remota proporcionada por un proveedor de servicios de MongoDB. <br>
          5. Si es necesario, proporciona un nombre descriptivo para la conexión. <br>
          6. Haz click en "Connect" (Conectar). <br></h4>
    </details>

    <details>
       <summary> <h3> Paso 3: 🛰️Explorando y administrando la base de datos🛰️ </h3></summary> 
      <h4> 
          1. Una vez conectado, verás la estructura de la base de datos en la sección "MONGODB" de Visual Studio 
          Code.<br>
          2. Expande la conexión para ver las bases de datos disponibles.<br>
          3. Expande una base de datos para ver sus colecciones.<br>
          4. Expande una colección para ver los documentos almacenados en ella.<br>
          5. Puedes hacer clic derecho en una base de datos o colección para realizar acciones como crear, 
          eliminar y modificar documentos.<br>
          6. Utiliza las diferentes opciones disponibles en el menú contextual para administrar tu base de datos 
          MongoDB de manera eficiente.<br></h4>
    </details>

------

## **🍁🎉Instalación🎉**🍁

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler`

2. Accede al directorio del proyecto: `cd MongoAlquiler`

3. Instala las dependencias: (ejecute el comando `npm i` para instalar las dependencias del proyecto)

     <details>
       <summary> <h3> 🏗️ Dependencias Usadas🏗️ </h3></summary> 
         - "class-transformer": "0.5.1" <br>
         - "class-validator": "0.14.0" <br>
         - "dotenv": "16.3.1" <br>
         - "express": "4.18.2" <br>
         - "express-rate-limit": "6.9.0" <br>
         - "jose": "4.14.4" <br>
         - "mongodb": "5.7.0" <br>
         - "nodemon": "3.0.1" <br>
         - "reflect-metadata": "0.1.13" <br>
         - "typescript": "5.1.6" <br>
     </details>

4. Accede al archivo de "[db_campus_alquiler.mongodb](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/db/db_campus_alquiler.mongodb)" ubicada en la carpeta **db**: `db_campus_alquiler.mongodb`

5. inicia el archivo y monta la base de datos en tu servidor (ejecuta cada una de los comandos de mongo de manera Descendente).

6. Para facilitar las consultas ejecuta de manera Descendente el archivo del mismo archivo: `db_campus_alquiler.mongodb` en ella encontraras data para alimentar la base de datos (!Importante: En este archivo esta la data con los roles y usuarios por defecto, **si no los ejecutas no podrás usar la api**!)

7. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

8. Recuerda para ejecutar ambos archivos debes tener la extensión de mongo en tu Visual Studio y además haberte conectado

------

## **🏁🎆Configuración**🎆🏁

1. Cambia el nombre del archivo `.envexample` por  `.env`

2. Dentro del archivo `.env`, define las siguientes variables de entorno:

   - MY_CONFIG={"hostname": "127.19.8.7", "port":5010}
   - Atlas_User=""
   - Atlas_Password=""
   - Atlas_DB="db_Bodegas"
   - Jwt_Primate_Key="Nywx e tiqimr erxi e hiwtq gere hkviigx hiwx erh fiexmrkmrk hievm ehirxmsrk wmxiw xlmrk"

   Reemplaza `Atlas_User`, `Atlas_Password`, y con los datos de tu base de datos de Mongo.

------

## **🪙⚜️Uso⚜️🪙**

1. Inicia el servidor:
2. `npm run dev`
3. Accede a `http://127.19.8.7:5010` para interactuar con la API.

------

## **🎫🔩Puerto de la Api**🔩🎫

## `http://127.19.8.7:5010`

------

1. ## **‼️Importante‼️**

   Antes de entrar a la api a los métodos de la api, debes crear un usuario.

   ## ✨End Points de Manejo de  usuarios✨

   ## 🧑‍💻/CrearUsuario

   **`POST /CrearUsuario`**: El EndPoint `/CrearUsuario` Se encarga de la creación de usuarios, en el cual podras crear usuarios que usaran la API en cuestion.

   **Aclaraciones y Validaciones**

     <details>
       <summary> <h3> Tipo De data </h3></summary>
       nombre: Cadena de caracteres (string) <br>
       email: Cadena de caracteres (string) <br>
       password: Cadena de caracteres (string)
       codigo_Rol: Cadena de caracteres expecificos (CsWscIpEhqmr1987|CsWscYrYwyvemws22501) <br>
   </details>

   -  El valor de "codigo_Rol": Debe ser CsWscIpEhqmr1987 o CsWscYrYwyvemws22501. Ya que estos son los codigos para asignar roles. "CsWscIpEhqmr1987 " es el codigo para el rol: "Admin" y "CsWscYrYwyvemws22501" es el codigo para el rol: "usuario"

   **Ruta Especifica**

   ```html
   http://127.19.8.7:5010/CrearUsuario
   ```

     <details>
       <summary> <h3> Data de entrada </h3></summary> 
       {<br>
         "nombre_Usuario": "pedro3", <br>
         "correo_Usuario": "pedro3@gmail.com",<br>
         "contraseña_Usuario": "123",<br>
         "codeRol_Usuario": "CsWscIpEhqmr1987"<br>
       }
    </details>

     <details>
       <summary> <h3> Data de Salida </h3></summary> 
           {<br>
             "status": 200,<br>
             "message": "El usuario: 'pedro3', con el rol de: 'Admin', se ha creado correctamente"<br>
           }
    </details>


   Al ejecutar este endpoint se creara un usuario en la base de datos, recuerda tener presente tu usuario y contraseña para el manejo posterior de la api

   ## 🧑‍💻/IngresarUsuario

   **`GET /IngresarUsuario`**: El EndPoint `/IngresarUsuario` Se encarga de suministrar la key especifica que solicita el usuario para un endpoint especifico. Es importante tener en cuenta que este endpoint solo funciona si ya hay usuarios creados con anterioridad.

   **Aclaraciones y Validaciones**

   <details>
   <summary> <h3> Tipo De data </h3></summary>
 nombre_Usuario" : Cadena de caracteres (string)<br>
 contraseña_Usuario" : Cadena de caracteres (string)"<br>
 endPoint_Solicitado : Cadena de caracteres (string) (Debe ser un endpoint en la API)<br></details>

   -  El valor de "endPoint_Solicitado": Debe ser el nombre de los endpoints de esta api:

   **🧾Lista de Endpoint🧾**

   ```
   [
       Colecciones", 
       "Alquiler",
       "Automovil",
       "Cliente",
       "Empleado",
       "RegistroDevolucion",
       "RegistroEntrega",
       "Reserva",
       "Sucursal",
       "Sucursal_Auto"
   ]
   ```

   **🧾👩‍💻Usuario Admin de prueba👩‍💻**

   ```
   	{
         "nombre_Usuario" : "FredCreations",
         "contraseña_Usuario" : "Monochrome1dcg3",
         "endPoint_Solicitado" : "TransladoProductos"
       }
   ```

   **👩‍💼Usuario Admin de prueba👩‍💼**

   ```
   	{
         "nombre_Usuario" : "Silver",
         "contraseña_Usuario" : "1234",
         "endPoint_Solicitado" : "TransladoProductos"
       }
   ```

   **Este sistema API proporciona acceso a diversos endpoints que permiten interactuar con los recursos del sistema. Para acceder a estos endpoints y garantizar la seguridad de la información, se utiliza un sistema de autenticación basado en tokens.**

   ## 🎯Autenticación y Acceso🎯

   Al ejecutar el endpoint de autenticación, recibirás una clave de acceso (token) que te permitirá acceder a los diferentes endpoints del sistema. Es importante tener en cuenta lo siguiente:

   - La clave de acceso es única para cada usuario y sesión.
   - Cada token está asociado a un endpoint específico seleccionado por el usuario.
   - Los métodos POST en los endpoints solo están disponibles para los usuarios con el rol de administrador.
   - Cada token tiene una duración de media hora.

   ## 🎫Uso del Token🎫

   Para acceder a los endpoints protegidos, debes incluir el token de acceso en la cabecera (header) de tus solicitudes HTTP. Utiliza el parámetro "Authorization" y agrega el token.

   El token te proporcionará acceso autorizado al endpoint que seleccionaste, permitiéndote realizar operaciones y obtener información relevante. Asegúrate de mantener tu token confidencial y no compartirlo con terceros.

   **Ruta Especifica**

   ```html
   http://127.19.8.7:5010/IngresarUsuario
   ```

 <details>
   <summary> <h3> Data de entrada </h3></summary> 
   {<br>
     "nombre_Usuario" : "FredCreations",<br>
     "contraseña_Usuario" : "Monochrome1dcg3",<br>
     "endPoint_Solicitado" : "TransladoProductos"<br>
   }
</details>
 <details>
   <summary> <h3> Data de Salida </h3></summary> 
      {  <br>
     "status": 201,<br>
      "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJGcmVkQ3JlYXRpb25zIiwicGFzc3dvcmQiOiJNb25vY2hyb21lMWRjZzMiLCJlbmRQb2ludCI6IlRyYW5zbGFkb1Byb2R1Y3RvcyIsInJvbCI6IkFkbWluIiwiaWF0IjoxNjkyNjMzMDk4LCJleHAiOjE2OTI2MzQ4OTh9.mAHmqnZRnxy8mfo1uV2CHstvjjUo_cM5ohTyg5EGBl0",<br>
         "instructions": "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor"<br>
       	}
    </details>

------

## ✨End Points de Manejo de  la Base de Datos✨

### **💥Para usar todos estos endpoint debes haber creado tu usuario y solicitar el Token con los endpoints de arriba.*💥

Presiona cada endpoint para ir a la documentación con sus rutas y funcionalidades.

|                          Endpoints                           | Función                                                      |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| [Colecciones](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/ColeccionesEndpoint.md) | Este endpoint permite gestionar las colecciones en la BD. Ofrece métodos CRUD para obtener, crear, y eliminar colecciones. |
| [Alquiler](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/AlquileresEndpoint.md) | Este endpoint permite gestionar los alquileres de vehículos. Ofrece métodos CRUD para crear, leer, actualizar y eliminar alquileres. Además, proporciona consultas para buscar alquileres por diferentes criterios. |
| [Automovil](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/AutomovilesEndpoint.md) | Aquí puedes administrar los registros de vehículos disponibles. La colección proporciona operaciones CRUD para gestionar la información de los automóviles. Además, se incluyen consultas para filtrar vehículos por tipo, capacidad y otros atributos. |
| [Cliente](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/ClientesEndpoint.md) | Gestiona los detalles de los clientes de la empresa. Los métodos CRUD permiten crear, leer, actualizar y eliminar registros de clientes. También se ofrecen consultas para buscar clientes |
| [Empleado](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/EmpleadoEndpoint.md) | Esta colección se encarga de los empleados de la organización. Con los métodos CRUD, puedes agregar, consultar, actualizar y eliminar información de empleados. Además, se incluyen consultas para buscar empleados por cargo y otros criterios. |
| [RegistroDevolucion](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/RegistroDevolucionEndpoint.md) | Aquí se registran las devoluciones de alquileres. La colección presenta operaciones CRUD para administrar los registros de devolución. Además, se ofrecen consultas para buscar registros. |
| [RegistroEntrega](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/RegistroEntrega.md) | Gestiona los registros de entregas de alquileres. Los métodos CRUD permiten manejar la información de entrega. También encontrarás consultas para buscar entregas. |
| [Reserva](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/ReservaEndpoint.md) | Administra las reservas de alquileres anticipados. Ofrece operaciones CRUD para gestionar las reservas. Además, se incluyen consultas para buscar reservas especificas. |
| [Sucursal](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/SucursalEndpoint.md) | Esta colección abarca los datos de las sucursales de la empresa. Los métodos CRUD permiten administrar la información de las sucursales. También se incluyen consultas para buscar sucursales especificas. |
| [Sucursal_Auto](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Doc/Sucursal_AutoEndpoint.md) | Gestiona la disponibilidad de vehículos en cada sucursal. Los métodos CRUD permiten administrar la relación entre sucursales y automóviles. Además, encontrarás consultas para buscar automóviles disponibles en una sucursal específica. |
---
## **🪄⚗️Archivo thunder⚗️🪄**

Aqui encontraras el archivo con las colecciones de thunder usadas para ejecutar los endpoints de manera mas facil de este proyecto

[Preciona Aqui Para Ir Directamente Al Archivo](https://github.com/JuanJoseDuranRinconCAMPUS2/MongoAlquiler/blob/main/Thunder/thunder-collection_Alquiler.json)

## **🚀🎇 Importacion Archivo thunder🎇🚀**

- Descarga el archivo thunder-collection_BodegasMongoDB.json en el link de arriba
- Abre Thunder, ve a Collections y abre el menu

- Haz Click donde dice "Import"

- Selecciona el archivo thunder-collection_BodegasMongoDB.json

- Y listo!!. Ya tendras todas las carpetas que contituyen los endPoints del proyecto.
------

## **🌌Contribución🌌**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.

------

## **😶‍🌫️Licencias😶‍🌫️**

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/LICENSE).

------

¡Gracias por visitar mi proyecto!
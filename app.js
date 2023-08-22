import dotnev from 'dotenv';
import express from 'express';
import AppColecciones from './routes/CColecciones.js';
import AppAlquiler from './routes/CAlquiler.js';
import AppAutomovil from './routes/CAutomovil.js';
import AppCliente from './routes/CCliente.js';
import AppEmpleado from './routes/CEmpleado.js';
import AppRegistroDevolucion from './routes/CRegistroDevolucion.js';
import AppRegistroEntrega from './routes/CRegistroEntrega.js';
import AppReserva from './routes/CResersa.js';
import AppSucursal from './routes/CSucursal.js';
import AppSucursal_Auto from './routes/CSucursal_Auto.js';
import AppCrearUsuario from './routes/CrearUsuario.js';

console.clear();
dotnev.config();

const AlquilerApi = express();
AlquilerApi.use(express.json());

// ════════ ⋆★⋆ ════════
AlquilerApi.use('/Colecciones', AppColecciones);
AlquilerApi.use('/Alquiler', AppAlquiler);
AlquilerApi.use('/Automovil', AppAutomovil);
AlquilerApi.use('/Cliente', AppCliente);
AlquilerApi.use('/Empleado', AppEmpleado);
AlquilerApi.use('/RegistroDevolucion', AppRegistroDevolucion);
AlquilerApi.use('/RegistroEntrega', AppRegistroEntrega);
AlquilerApi.use('/Reserva', AppReserva);
AlquilerApi.use('/Sucursal', AppSucursal);
AlquilerApi.use('/Sucursal_Auto', AppSucursal_Auto);
// ════════ ⋆★⋆ ════════

//Rutas de validacion
// ════════ ⋆★⋆ ════════
AlquilerApi.use('/CrearUsuario', AppCrearUsuario);
// AlquilerApi.use('/IngresarUsuario', AppIngresoUsuario);
// ════════ ⋆★⋆ ════════


const config = JSON.parse(process.env.MY_CONFIG);
AlquilerApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})

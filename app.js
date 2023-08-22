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
import AppIngresoUsuario from './routes/IngresarUsuario.js';
import { proxyAutorizacionTk } from './middleware/proxyManejoTokens.js';

console.clear();
dotnev.config();

const AlquilerApi = express();
AlquilerApi.use(express.json());

// ════════ ⋆★⋆ ════════
AlquilerApi.use('/Colecciones', proxyAutorizacionTk, AppColecciones);
AlquilerApi.use('/Alquiler', proxyAutorizacionTk, AppAlquiler);
AlquilerApi.use('/Automovil', proxyAutorizacionTk, AppAutomovil);
AlquilerApi.use('/Cliente', proxyAutorizacionTk, AppCliente);
AlquilerApi.use('/Empleado', proxyAutorizacionTk, AppEmpleado);
AlquilerApi.use('/RegistroDevolucion', proxyAutorizacionTk, AppRegistroDevolucion);
AlquilerApi.use('/RegistroEntrega', proxyAutorizacionTk, AppRegistroEntrega);
AlquilerApi.use('/Reserva', proxyAutorizacionTk, AppReserva);
AlquilerApi.use('/Sucursal', proxyAutorizacionTk, AppSucursal);
AlquilerApi.use('/Sucursal_Auto', proxyAutorizacionTk, AppSucursal_Auto);
// ════════ ⋆★⋆ ════════

//Rutas de validacion
// ════════ ⋆★⋆ ════════
AlquilerApi.use('/CrearUsuario', AppCrearUsuario);
AlquilerApi.use('/IngresarUsuario', AppIngresoUsuario);
// ════════ ⋆★⋆ ════════


const config = JSON.parse(process.env.MY_CONFIG);
AlquilerApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})

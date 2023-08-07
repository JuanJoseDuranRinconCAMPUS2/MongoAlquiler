import dotnev from 'dotenv';
import express from 'express';
import AppColecciones from './routes/CColecciones.js';
import AppAlquiler from './routes/CAlquiler.js';
import AppAutomovil from './routes/CAutomovil.js';
console.clear();
dotnev.config();

const AlquilerApi = express();
AlquilerApi.use(express.json());

// ════════ ⋆★⋆ ════════
AlquilerApi.use('/Colecciones', AppColecciones);
AlquilerApi.use('/Alquiler', AppAlquiler);
AlquilerApi.use('/Automovil', AppAutomovil);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
AlquilerApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})

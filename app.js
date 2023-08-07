import dotnev from 'dotenv';
import express from 'express';
import AppColecciones from './routes/CColecciones.js';
console.clear();
dotnev.config();

const AlquilerApi = express();
AlquilerApi.use(express.json());

// ════════ ⋆★⋆ ════════
AlquilerApi.use('/Colecciones', AppColecciones)
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
AlquilerApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})




//como saber si una coleccion existe

// const collections = await db.listCollections().toArray();
// console.log(collections);
// const bandera = collections.some((Collection) => Collection.name === "DB_Prueba");
// console.log(bandera);

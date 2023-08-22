import { Router } from "express";
import {limitGColecciones, limitCrearColecciones} from '../middleware/limit.js';
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import { con } from '../db/atlas.js';

const AppColecciones = Router();
let db = await con();

AppColecciones.get('/GetColecciones', limitGColecciones(), proxyEndpointVerify(0, "Colecciones"), async (req, res) =>{
    if(!req.rateLimit) return;
    const collections = await db.listCollections().toArray();
    res.send(collections)

})

AppColecciones.post('/CrearColecciones', limitCrearColecciones(), proxyEndpointVerify(1, "Colecciones", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    const {Nombre} = req.body

    try {
        await db.createCollection(Nombre);

        res.send(`Coleccion ${Nombre} creada`)

    } catch (error) {
        res.send(`Coleccion ${Nombre} ya existe`)
    }
})

AppColecciones.delete('/BorrarColeccion', limitCrearColecciones(), proxyEndpointVerify(1, "Colecciones", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    const {Nombre} = req.body
    try {
        await db.collection(Nombre).drop();
        res.send(`Coleccion ${Nombre} eliminada`);
      } catch (error) {
        res.send(`Error al eliminar la coleccion ${Nombre}`);
      }
})

export default AppColecciones;
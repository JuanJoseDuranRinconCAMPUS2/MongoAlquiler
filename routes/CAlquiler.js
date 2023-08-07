import { Router } from "express";
import {limitGColecciones, limitPAlquiler, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';
import { log } from "console";

const AppAlquiler = Router();
let db = await con();

AppAlquiler.get('/GetAlquiler', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAlquiler.post('/PostAlquiler', limitPAlquiler(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");

    try {
        let result = await alquiler.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppAlquiler.put('/PutAlquiler', limitPAlquiler(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await alquiler.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppAlquiler.delete('/DeleteAlquiler', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await alquiler.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppAlquiler;
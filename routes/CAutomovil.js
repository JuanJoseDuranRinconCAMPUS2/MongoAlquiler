import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppAutomovil = Router();
let db = await con();

AppAutomovil.get('/GetAutomovil', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    let result = await automovil.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAutomovil.post('/PostAutomovil', limitPColecciones(280, "automovil"), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");

    try {
        let result = await automovil.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppAutomovil.put('/PutAutomovil', limitPColecciones(280, "automovil"), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await automovil.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppAutomovil.delete('/DeleteAutomovil', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await automovil.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppAutomovil;
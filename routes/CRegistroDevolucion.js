import { Router } from "express";
import {limitGColecciones, limitPRegistroDevolucion, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppRegistroDevolucion = Router();
let db = await con();

AppRegistroDevolucion.get('/GetRegistroDevolucion', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    let result = await registro_devolucion.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppRegistroDevolucion.post('/PostRegistroDevolucion', limitPRegistroDevolucion(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");

    try {
        let result = await registro_devolucion.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppRegistroDevolucion.put('/PutRegistroDevolucion', limitPRegistroDevolucion(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await registro_devolucion.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppRegistroDevolucion.delete('/DeleteRegistroDevolucion', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await registro_devolucion.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppRegistroDevolucion;
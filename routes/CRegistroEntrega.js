import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppRegistroEntrega = Router();
let db = await con();

AppRegistroEntrega.get('/GetRegistroEntrega', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    let result = await registro_entrega.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppRegistroEntrega.post('/PostRegistroEntrega', limitPColecciones(250, "registro_entrega"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");

    try {
        let result = await registro_entrega.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppRegistroEntrega.put('/PutRegistroEntrega', limitPColecciones(250, "registro_entrega"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await registro_entrega.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppRegistroEntrega.delete('/DeleteRegistroEntrega', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await registro_entrega.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppRegistroEntrega;
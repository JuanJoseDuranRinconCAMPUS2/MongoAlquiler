import { Router } from "express";
import {limitGColecciones, limitPCliente, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppCliente = Router();
let db = await con();

AppCliente.get('/GetCliente', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    let result = await cliente.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppCliente.post('/PostCliente', limitPCliente(), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");

    try {
        let result = await cliente.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppCliente.put('/PutCliente', limitPCliente(), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await cliente.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppCliente.delete('/DeleteCliente', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await cliente.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppCliente;
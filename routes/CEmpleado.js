import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppEmpleado = Router();
let db = await con();

AppEmpleado.get('/GetEmpleado', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    let result = await empleado.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppEmpleado.post('/PostEmpleado', limitPColecciones(240, "empleado"), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");

    try {
        let result = await empleado.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppEmpleado.put('/PutEmpleado', limitPColecciones(240, "empleado"), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await empleado.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppEmpleado.delete('/DeleteEmpleado', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await empleado.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

export default AppEmpleado;
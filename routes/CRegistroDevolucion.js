import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppRegistroDevolucion = Router();
let db = await con();

AppRegistroDevolucion.get('/GetRegistroDevolucion', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    let result = await registro_devolucion.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppRegistroDevolucion.post('/PostRegistroDevolucion', limitPColecciones(320, "registro_devolucion"), proxyPostC("registroDevPost"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    let data = {...req.body, _id : req.body.ID_Registro, Fecha_Devolucion: new Date(req.body.Fecha_Devolucion)}

    try {
        let result = await registro_devolucion.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res); 
      }
})

AppRegistroDevolucion.put('/PutRegistroDevolucion', limitPColecciones(300, "registro_devolucion"), proxyPostC("registroDevPut"), proxyQueryID, async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    let data = {...req.body, Fecha_Devolucion: new Date(req.body.Fecha_Devolucion)}
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await registro_devolucion.updateOne({ _id: id }, { $set: data })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});

        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppRegistroDevolucion.delete('/DeleteRegistroDevolucion', limitDColecciones(), proxyBodyID, async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_devolucion = db.collection("registro_devolucion");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await registro_devolucion.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

export default AppRegistroDevolucion;
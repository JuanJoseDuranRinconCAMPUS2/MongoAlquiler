import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppRegistroEntrega = Router();
let db = await con();

AppRegistroEntrega.get('/GetRegistroEntrega', limitGColecciones(), proxyEndpointVerify(0, "RegistroEntrega"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    let result = await registro_entrega.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppRegistroEntrega.post('/PostRegistroEntrega', limitPColecciones(250, "registro_entrega"), proxyPostC("registroEntPost"), proxyEndpointVerify(1, "RegistroEntrega", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    let data = {...req.body, _id : req.body.ID_Registro, Fecha_Entrega: new Date(req.body.Fecha_Entrega)}
    try {
        let result = await registro_entrega.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res); 
      }
})

AppRegistroEntrega.put('/PutRegistroEntrega', limitPColecciones(250, "registro_entrega"), proxyPostC("registroEntPut"), proxyQueryID, proxyEndpointVerify(1, "RegistroEntrega", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    let data = {...req.body, Fecha_Entrega: new Date(req.body.Fecha_Entrega)}
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await registro_entrega.updateOne({ _id: id }, { $set: data })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});

        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppRegistroEntrega.delete('/DeleteRegistroEntrega', limitDColecciones(), proxyBodyID, proxyEndpointVerify(1, "RegistroEntrega", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let registro_entrega = db.collection("registro_entrega");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await registro_entrega.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
          res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
      } else {
          res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
      }
    } catch (error) {
      errorcontroller(error, res);
    }
})

export default AppRegistroEntrega;
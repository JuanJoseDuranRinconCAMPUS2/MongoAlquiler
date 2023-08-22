import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppSucursal_Auto = Router();
let db = await con();

AppSucursal_Auto.get('/GetSucursal_Auto', limitGColecciones(), proxyEndpointVerify(0, "Sucursal_Auto"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal_automovil = db.collection("sucursal_automovil");
    let result = await sucursal_automovil.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppSucursal_Auto.post('/PostSucursal_Auto', limitPColecciones(250, "sucursal_automovil"), proxyPostC("sucursalAutoPost"), proxyEndpointVerify(1, "Sucursal_Auto", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal_automovil = db.collection("sucursal_automovil");
    try {
        let result = await sucursal_automovil.insertOne(req.body)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppSucursal_Auto.put('/PutSucursal_Auto', limitPColecciones(200, "sucursal_automovil"), proxyPostC("sucursalAutoPut"), proxyQueryID, proxyEndpointVerify(1, "Sucursal_Auto", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal_automovil = db.collection("sucursal_automovil");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await sucursal_automovil.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
          res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
      } else {
          res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});
      }
    } catch (error) {
      errorcontroller(error, res);
    }
})

AppSucursal_Auto.delete('/DeleteSucursal_Auto', limitDColecciones(), proxyBodyID, proxyEndpointVerify(1, "Sucursal_Auto", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal_automovil = db.collection("sucursal_automovil");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await sucursal_automovil.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
          res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
      } else {
          res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
      }
    } catch (error) {
      errorcontroller(error, res);
    }
})

export default AppSucursal_Auto;
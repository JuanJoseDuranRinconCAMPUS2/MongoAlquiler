import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppEmpleado = Router();
let db = await con();

AppEmpleado.get('/GetEmpleado', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    let result = await empleado.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppEmpleado.post('/PostEmpleado', limitPColecciones(350, "empleado"), proxyPostC("empleadoPost"), async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    let data = {...req.body, _id : req.body.ID_Empleado}
    try {
        let result = await empleado.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppEmpleado.put('/PutEmpleado', limitPColecciones(280, "empleado"),proxyPostC("empleadoPut"), proxyQueryID, async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await empleado.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppEmpleado.delete('/DeleteEmpleado', limitDColecciones(), proxyBodyID, async (req, res) =>{
    if(!req.rateLimit) return;
    let empleado = db.collection("empleado");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await empleado.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

//6
//  Listar los empleados con el cargo de "Vendedor".

AppEmpleado.get('/Empleado_Vendedores', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let empleado = db.collection("empleado");
  let result = await empleado.find({ Cargo: { $eq: "Vendedor" }}).toArray();
  res.send(result)

})

//13
// Mostrar los empleados con cargo de "Gerente" o "Asistente". 

AppEmpleado.get('/GerenteOrAsistente', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let empleado = db.collection("empleado");
  let result = await empleado.find({
    $or: [
        {Cargo: { $eq: "Gerente" }}, 
        {Cargo: { $eq: "Vendedor" }}
    ]
}).sort( { _id: 1 } ).toArray();
  res.send(result)

})

export default AppEmpleado;
import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppReserva = Router();
let db = await con();

AppReserva.get('/GetReserva', limitGColecciones(), proxyEndpointVerify(0, "Reserva"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    let result = await reserva.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppReserva.post('/PostReserva', limitPColecciones(310, "reserva"), proxyPostC("reservaPost"), proxyEndpointVerify(1, "Reserva", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    let data = {...req.body, _id : req.body.ID_Reserva, Fecha_Reserva: new Date(req.body.Fecha_Reserva), Fecha_Inicio: new Date(req.body.Fecha_Inicio), Fecha_Fin: new Date(req.body.Fecha_Fin)}
    try {
        let result = await reserva.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppReserva.put('/PutReserva', limitPColecciones(300, "reserva"), proxyPostC("reservaPut"), proxyQueryID, proxyEndpointVerify(1, "Reserva", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const id = parseInt(req.query.id, 10);
    let data = {...req.body, Fecha_Reserva: new Date(req.body.Fecha_Reserva), Fecha_Inicio: new Date(req.body.Fecha_Inicio), Fecha_Fin: new Date(req.body.Fecha_Fin)}
    try {
        
        let result = await reserva.updateOne({ _id: id }, { $set: data })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppReserva.delete('/DeleteReserva', limitDColecciones(), proxyBodyID, proxyEndpointVerify(1, "Reserva", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await reserva.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

//4
// Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado

AppReserva.get('/ReservasPendientesCyA', limitGColecciones(), proxyEndpointVerify(0, "Reserva"), async (req, res) =>{
  if(!req.rateLimit) return;
  let reserva = db.collection("reserva");
  let result = await reserva.aggregate([  
      {    
          $lookup: {      
              from: "cliente",     
              localField: "cliente_id",      
              foreignField: "_id",      
              as: "Clientes"   
          }  
      }, 
      {    
          $lookup: {      
              from: "automovil",     
              localField: "automovil_id",      
              foreignField: "_id",      
              as: "Automoviles"   
          }  
      },   
      {
          $match: {Clientes: { $ne: [] }, Estado: { $eq: "Pendiente" }, Automoviles: { $ne: [] }}
      },
      {
          $unwind: "$Clientes"
      },
      {    
          $project: {     
              "Clientes.ID_Cliente": 0,
              "Automoviles.ID_Automovil": 0
          } 
      },
      {
          $group: {
              _id: "$_id",
              Fecha_Reserva: {
                  $first: "$Fecha_Reserva"
              },
              Fecha_Inicio: {
                  $first: "$Fecha_Inicio"
              },
              Fecha_Fin: {
                  $first: "$Fecha_Fin"
              },
              Estado: {
                  $first: "$Estado"
              },
              Clientes: {
                  $push: "$Clientes"
              },
              Automoviles: {
                  $push: "$Automoviles"
              }
          }
      }
    ]).toArray();
  res.send(result)

})

//12
// Listar las reservas pendientes realizadas por un cliente específico.

AppReserva.get('/ClienteEspecificoPendiente', limitGColecciones(), proxyQueryID, proxyEndpointVerify(0, "Reserva"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const cliente_id = parseInt(req.query.id, 10);
    let result = await reserva.find({ Estado: { $eq: "Pendiente" }, cliente_id: { $eq: cliente_id }}).toArray();
    res.send(result)

})
export default AppReserva;
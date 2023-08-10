import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppReserva = Router();
let db = await con();

AppReserva.get('/GetReserva', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    let result = await reserva.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppReserva.post('/PostReserva', limitPColecciones(290, "reserva"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");

    try {
        let result = await reserva.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppReserva.put('/PutReserva', limitPColecciones(290, "reserva"), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await reserva.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppReserva.delete('/DeleteReserva', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await reserva.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

//4
// Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado

AppReserva.get('/ReservasPendientesCyA', limitGColecciones(), async (req, res) =>{
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

AppReserva.get('/ClienteEspecificoPendiente', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let reserva = db.collection("reserva");
    const cliente_id = parseInt(req.query.cliente_id, 10);
    let result = await reserva.find({ Estado: { $eq: "Pendiente" }, cliente_id: { $eq: cliente_id }}).toArray();
    res.send(result)

})
export default AppReserva;
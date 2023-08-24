import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppCliente = Router();
let db = await con();

//1
// Mostrar todos los clientes registrados en la base de datos

AppCliente.get('/GetCliente', limitGColecciones(), proxyEndpointVerify(0, "Cliente"), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    let result = await cliente.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppCliente.post('/PostCliente', limitPColecciones(300, "cliente"), proxyPostC("clientePost"), proxyEndpointVerify(1, "Cliente", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    let data = {...req.body, _id : req.body.ID_Cliente}
    try {
        let result = await cliente.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppCliente.put('/PutCliente', limitPColecciones(250, "cliente"),  proxyPostC("clientePut"), proxyQueryID, proxyEndpointVerify(1, "Cliente", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await cliente.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppCliente.delete('/DeleteCliente', limitDColecciones(), proxyBodyID, proxyEndpointVerify(1, "Cliente", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await cliente.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.status(200).send({status: 200, message: "Documento eliminado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

//9
// Listar los clientes con el DNI específico.
//DNI DISPONIBLES
// 343434
// 1225631215
// 22554451
// 45897812564
// 125233544
AppCliente.get('/ClienteDNI', limitGColecciones(), proxyEndpointVerify(0, "Cliente"), async (req, res) =>{
  if(!req.rateLimit) return;
  let cliente = db.collection("cliente");
  const DNI = String(req.query.DNI);
  console.log(DNI);
  let result = await cliente.find({ DNI: { $eq: DNI }}).toArray();
  res.send(result)

})

//14
// Obtener los datos de los clientes que realizaron al menos un alquiler

AppCliente.get('/Clientes_Alquiler', limitGColecciones(), proxyEndpointVerify(0, "Cliente"), async (req, res) =>{
  if(!req.rateLimit) return;
  let cliente = db.collection("cliente");
  let result = await cliente.aggregate([  
      {    
          $lookup: {      
              from: "alquiler",     
              localField: "_id",      
              foreignField: "cliente_id",      
              as: "Alquiler"   
          }  
      },  
      {
          $match: {Alquiler: { $ne: [] }}
      },
      {
          $unwind: "$Alquiler"
      },
      {
          $set: { Estado: "El cliente tiene alquileres registrados" }
      },
      {
          $group: {
              _id: "$_id",
              Nombre: {
                  $first: "$Nombre"
              },
              Apellido: {
                  $first: "$Apellido"
              },
              DNI: {
                  $first: "$DNI"
              },
              Direccion: {
                  $first: "$Direccion"
              },
              Telefono: {
                  $first: "$Telefono"
              },
              Email: {
                  $first: "$Email"
              },
              Estado: {
                  $first: "$Estado"
              }
          }
      }
  ]).sort( { _id: 1 } ).toArray();
  res.send(result)

})

//19
// Obtener los datos del cliente que realizó la reserva con ID_Reserva específico.
AppCliente.get('/DatosClientesPorReserva', limitGColecciones(), proxyQueryID, proxyEndpointVerify(0, "Cliente"), async (req, res) =>{
    if(!req.rateLimit) return;
    let cliente = db.collection("cliente");
    let id_Reserva = parseInt(req.query.id, 10);
    let result = await cliente.aggregate([  
        {    
            $lookup: {      
                from: "reserva",     
                localField: "_id",      
                foreignField: "cliente_id",      
                as: "Reserva"   
             }  
        },  
        {
            $unwind: "$Reserva"
        },
        {
            $match: {Reserva: { $ne: [] }, "Reserva._id": {$gte: id_Reserva}}
        },
        {
            $set: { Estado: {
                $concat: [
                    "El cliente tiene una reserva con el id ", " ", { $toString: "$Reserva._id" }
                ]
            } }
        },
        {
            $group: {
                _id: "$_id",
                Nombre: {
                    $first: "$Nombre"
                },
                Apellido: {
                    $first: "$Apellido"
                },
                DNI: {
                    $first: "$DNI"
                },
                Direccion: {
                    $first: "$Direccion"
                },
                Telefono: {
                    $first: "$Telefono"
                },
                Email: {
                    $first: "$Email"
                },
                Estado: {
                    $first: "$Estado"
                }
            }
        }
    ]).toArray();
    res.send(result)

})

export default AppCliente;
import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppAlquiler = Router();
let db = await con();

AppAlquiler.get('/GetAlquiler', limitGColecciones(), proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAlquiler.post('/PostAlquiler', limitPColecciones(250, "Alquiler"), proxyPostC("alquileresPost"), proxyEndpointVerify(1, "Alquiler", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let data = {...req.body, _id : req.body.ID_Alquiler, Fecha_Inicio: new Date(req.body.Fecha_Inicio), Fecha_Fin: new Date(req.body.Fecha_Fin)}
    try {
        let result = await alquiler.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppAlquiler.put('/PutAlquiler', limitPColecciones(250, "Alquiler"), proxyPostC("alquileresPut"), proxyQueryID, proxyEndpointVerify(1, "Alquiler", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    let data = {...req.body, Fecha_Inicio: new Date(req.body.Fecha_Inicio), Fecha_Fin: new Date(req.body.Fecha_Fin)}
    try {
        
        let result = await alquiler.updateOne({ _id: id }, { $set: data })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppAlquiler.delete('/DeleteAlquiler', limitDColecciones(), proxyBodyID, proxyEndpointVerify(1, "Alquiler", "Admin"),  async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await alquiler.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

// 3
//Listar todos los alquileres activos junto con los datos de los clientes relacionados. 

AppAlquiler.get('/AlquilerCliente', limitGColecciones(), proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
  if(!req.rateLimit) return;
  let alquiler = db.collection("alquiler");
  let result = await alquiler.aggregate([  
      {    
          $lookup: {      
              from: "cliente",     
              localField: "cliente_id",      
              foreignField: "_id",      
              as: "Clientes"   
          }  
      },  
      {
          $match: {Clientes: { $ne: [] }, Estado: { $eq: "Activo" }}
      },
      {
          $unwind: "$Clientes"
      },
      {    
          $project: {     
              "Clientes.ID_Cliente": 0,
          } 
      },
      {
          $group: {
              _id: "$_id",
              Fecha_Inicio: {
                  $first: "$Fecha_Inicio"
              },
              Fecha_Fin: {
                  $first: "$Fecha_Fin"
              },
              Costo_Total: {
                  $first: "$Costo_Total"
              },
              Estado: {
                  $first: "$Estado"
              },
              Clientes: {
                  $push: "$Clientes"
              },
          }
      }
    ]).toArray();
  res.send(result);
})

//5
//  Obtener los detalles del alquiler con el ID_Alquilerespecífico. 

AppAlquiler.get('/AlquilerEspecifico', limitGColecciones(), proxyQueryID, proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    let result = await alquiler.find({ ID_Alquiler: { $eq: id }}).toArray();
    res.send(result)

})

//8
//  Obtener el costo total de un alquiler específico.

AppAlquiler.get('/CostoEspecifico', limitGColecciones(), proxyQueryID, proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    let result = await alquiler.find({ ID_Alquiler: { $eq: id }},{ projection: { _id: 1, Costo_Total: 1 }}).toArray();
    res.send(result)

})

//11
// Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.

AppAlquiler.get('/Alquiler2023-07-05', limitGColecciones(), proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({ Fecha_Inicio: { $eq : new Date('2023-07-05') }}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

//17
// Obtener la cantidad total de alquileres registrados en la base de datos.

AppAlquiler.get('/TotalAlquileres', limitGColecciones(), proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let TotalAlquileres = await alquiler.countDocuments({});
    res.send([{ TotalAlquileres: TotalAlquileres }]);

})

//20
// Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.

AppAlquiler.get('/AlquileresEntreFechas', limitGColecciones(), proxyEndpointVerify(0, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({
        Fecha_Inicio: {
          $gte: new Date('2023-07-05'),
          $lte: new Date('2023-07-10')
        }
      }).sort( { _id: 1 } ).toArray();
    res.send(result)

})
export default AppAlquiler;
import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppAlquiler = Router();
let db = await con();

AppAlquiler.get('/GetAlquiler', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAlquiler.post('/PostAlquiler', limitPColecciones(250, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");

    try {
        let result = await alquiler.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppAlquiler.put('/PutAlquiler', limitPColecciones(250, "Alquiler"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await alquiler.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppAlquiler.delete('/DeleteAlquiler', limitDColecciones(), async (req, res) =>{
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
        res.send(`Error al Actualizar la data`);
      }
})

// 3
//Listar todos los alquileres activos junto con los datos de los clientes relacionados. 

AppAlquiler.get('/AlquilerCliente', limitGColecciones(), async (req, res) =>{
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

AppAlquiler.get('/AlquilerEspecifico', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    let result = await alquiler.find({ ID_Alquiler: { $eq: id }}).toArray();
    res.send(result)

})

//8
//  Obtener el costo total de un alquiler específico.

AppAlquiler.get('/CostoEspecifico', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    const id = parseInt(req.query.id, 10);
    let result = await alquiler.find({ ID_Alquiler: { $eq: id }},{ projection: { _id: 1, Costo_Total: 1 }}).toArray();
    res.send(result)

})

//11
// Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.

AppAlquiler.get('/Alquiler2023-07-05', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let result = await alquiler.find({ Fecha_Inicio: { $eq : new Date('2023-07-05') }}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

//17
// Obtener la cantidad total de alquileres registrados en la base de datos.

AppAlquiler.get('/TotalAlquileres', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("alquiler");
    let TotalAlquileres = await alquiler.countDocuments({});
    res.send([{ TotalAlquileres: TotalAlquileres }]);

})

//20
// Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.

AppAlquiler.get('/AlquileresEntreFechas', limitGColecciones(), async (req, res) =>{
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
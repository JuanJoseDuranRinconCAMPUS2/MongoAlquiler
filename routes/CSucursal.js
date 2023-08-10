import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppSucursal = Router();
let db = await con();

AppSucursal.get('/GetSucursal', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal = db.collection("sucursal");
    let result = await sucursal.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppSucursal.post('/PostSucursal', limitPColecciones(200, "sucursal"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal = db.collection("sucursal");

    try {
        let result = await sucursal.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppSucursal.put('/PutSucursal', limitPColecciones(200, "sucursal"), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal = db.collection("sucursal");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await sucursal.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppSucursal.delete('/DeleteSucursal', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal = db.collection("sucursal");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await sucursal.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

//7
//  Mostrar la cantidad total de automóviles disponibles en cada sucursal. 

AppSucursal.get('/CantidadAutosSucursal', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let sucursal = db.collection("sucursal");
  let result = await sucursal.aggregate([  
      {    
          $lookup: {      
              from: "sucursal_automovil",     
              localField: "_id",      
              foreignField: "sucursal_id",      
              as: "Cantidad_Automovil"   
          }  
      },  
      {
          $match: {CantididadAutomovil: { $ne: [] }}
      },
      {
          $unwind: "$Cantidad_Automovil"
      },
      {    
          $project: {     
              "Cantidad_Automovil.sucursal_id": 0,
              "Cantidad_Automovil.automovil_id": 0
          } 
      },
      {
          $group: {
              _id: "$_id",
              Nombre: {
                  $first: "$Nombre"
              },
              Direccion: {
                  $first: "$Direccion"
              },
              Telefono: {
                  $first: "$Telefono"
              },
              Cantidad_Automovil: {
                  $first: "$Cantidad_Automovil"
              },
              Total_Automoviles: {
                  $sum: "$Cantidad_Automovil.Cantidad_Disponible"
              }
          }
      }
    ]).toArray();
  res.send(result)

})

//16
// Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.

AppSucursal.get('/CantidadTotalAutosDirect', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let sucursal = db.collection("sucursal");
    let result = await sucursal.aggregate([  
        {    
            $lookup: {      
                from: "sucursal_automovil",     
                localField: "_id",      
                foreignField: "sucursal_id",      
                as: "Cantidad_Automovil"   
             }  
        },  
        {
            $match: {CantididadAutomovil: { $ne: [] }}
        },
        {
            $unwind: "$Cantidad_Automovil"
        },
        {    
            $project: {     
                "Cantidad_Automovil.sucursal_id": 0,
                "Cantidad_Automovil.automovil_id": 0
            } 
        },
        {
            $group: {
                _id: "$_id",
                Nombre: {
                    $first: "$Nombre"
                },
                Direccion: {
                    $first: "$Direccion"
                },
                Total_Automoviles: {
                    $sum: "$Cantidad_Automovil.Cantidad_Disponible"
                }
            }
        }
    ]).sort( { _id: 1 } ).toArray();
    res.send(result)

})
export default AppSucursal;
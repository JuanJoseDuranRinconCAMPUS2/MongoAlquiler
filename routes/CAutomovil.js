import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppAutomovil = Router();
let db = await con();

AppAutomovil.get('/GetAutomovil', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    let result = await automovil.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAutomovil.post('/PostAutomovil', limitPColecciones(280, "automovil"), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");

    try {
        let result = await automovil.insertOne(req.body)
        res.send(`Data Enviada correctamente`);
      } catch (error) {
        res.send(`Error al guardar la data, _id ya se encuentra en uso`);
      }
})

AppAutomovil.put('/PutAutomovil', limitPColecciones(280, "automovil"), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await automovil.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.send("Documento actualizado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se realizaron cambios");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

AppAutomovil.delete('/DeleteAutomovil', limitDColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await automovil.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.send("Documento ha sido eliminado correctamente");
        } else {
            res.send("El documento no pudo ser encontrado o no se elimino el documento");
        }
      } catch (error) {
        res.send(`Error al Actualizar la data`);
      }
})

// 2
// Obtener todos los automóviles disponibles para alquiler.
AppAutomovil.get('/AutomovilesDisp', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let automovil = db.collection("automovil");
  let result = await automovil.aggregate([  
      {    
          $lookup: {      
              from: "alquiler",     
              localField: "_id",      
              foreignField: "automovil_id",      
              as: "Alquileres"   
          }  
      },  
      {
          $match: {Alquileres: { $ne: [] }}
      },
      {    
          $project: {     
              Marca: 1,      
              Modelo: 1,     
              Anio: 1,      
              Tipo: 1,      
              Capacidad: 1,      
              Precio_Diario: 1,      
              Alquileres: {
                  $map: {
                    input: "$Alquileres",
                    as: "alquiler",
                    in: {
                      id: "$$alquiler._id",
                      Fecha_Inicio: "$$alquiler.Fecha_Inicio",
                      Fecha_Fin: "$$alquiler.Fecha_Fin",
                      Costo_Total: "$$alquiler.Costo_Total",
                      Estado: "$$alquiler.Estado"
                    }
                  }
              }
          } 
      } 
  ]).toArray();
  res.send(result)
})

//10
// Mostrar todos los automóviles con una capacidad mayor a 5 personas. 

AppAutomovil.get('/AutosMax5', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let automovil = db.collection("automovil");
  let result = await automovil.find({ Capacidad: { $gt: 5 }}).sort( { _id: 1 } ).toArray();
  res.send(result)

})

//15
// Listar todos los automóviles ordenados por marca y modelo.

AppAutomovil.get('/AutosMarcasModelos', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let automovil = db.collection("automovil");
  let result = await automovil.find().sort( { Marca: 1, Modelo: 1 } ).toArray();
  res.send(result)

})

//18
// Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles

AppAutomovil.get('/DispoAutosMax5', limitGColecciones(), async (req, res) =>{
  if(!req.rateLimit) return;
  let automovil = db.collection("automovil");
  let result = await automovil.aggregate([  
    {    
        $lookup: {      
            from: "alquiler",     
            localField: "_id",      
            foreignField: "automovil_id",      
            as: "Alquileres"   
         }  
    },  
    {
        $match: {Alquileres: { $ne: [] }, Capacidad: {$gte: 5}}
    },
    {
        $unwind: "$Alquileres"
    },
    {
        $group: {
            _id: "$_id",
            Marca: {
                $first: "$Marca"
            },
            Modelo: {
                $first: "$Modelo"
            },
            Año: {
                $first: "$Anio"
            },
            Tipo: {
                $first: "$Tipo"
            },
            Capacidad: {
                $first: "$Capacidad"
            },
            Precio_Diario: {
                $first: "$Precio_Diario"
            }
        }
    }
]).sort( { Marca: 1, Modelo: 1 } ).toArray();
  res.send(result)

})
export default AppAutomovil;
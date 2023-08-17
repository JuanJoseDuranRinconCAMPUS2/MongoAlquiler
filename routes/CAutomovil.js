import { Router } from "express";
import {limitGColecciones, limitPColecciones, limitDColecciones} from '../middleware/limit.js';
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
import {proxyQueryID, proxyBodyID} from "../middleware/proxyUniversal.js"
import errorcontroller from "../middleware/ErroresMongo.js";
import { con } from '../db/atlas.js';

const AppAutomovil = Router();
let db = await con();

AppAutomovil.get('/GetAutomovil', limitGColecciones(), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    let result = await automovil.find({}).sort( { _id: 1 } ).toArray();
    res.send(result)

})

AppAutomovil.post('/PostAutomovil', limitPColecciones(280, "automovil"), proxyPostC("automovilesPost"), async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    let data = {...req.body, _id : req.body.ID_Automovil}
    try {
        let result = await automovil.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppAutomovil.put('/PutAutomovil', limitPColecciones(280, "automovil"), proxyPostC("automovilesPut"), proxyQueryID, async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.query.id, 10);
    try {
        
        let result = await automovil.updateOne({ _id: id }, { $set: req.body })
        if (result.modifiedCount > 0) {
            res.status(200).send({status: 200, message: "Documento actualizado correctamente"});
        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se realizaron cambios"});
        }
      } catch (error) {
        errorcontroller(error, res);
      }
})

AppAutomovil.delete('/DeleteAutomovil', limitDColecciones(), proxyBodyID, async (req, res) =>{
    if(!req.rateLimit) return;
    let automovil = db.collection("automovil");
    const id = parseInt(req.body.id, 10);
    try {
        let result = await automovil.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            res.status(200).send({status: 200, message: "Documento eliminado correctamente"});

        } else {
            res.status(404).send({status: 404, message: "El documento no pudo ser encontrado o no se elimino el documento"});
        }
      } catch (error) {
        errorcontroller(error, res);
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
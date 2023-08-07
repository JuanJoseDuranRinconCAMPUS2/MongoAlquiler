import { Router } from "express";
import {limitGColecciones} from '../middleware/limit.js';
import bodyParser  from 'body-parser';
import { Collection, ObjectId } from 'mongodb';
import { con } from '../db/atlas.js';

const AppColecciones = Router();
let db = await con();

AppColecciones.use(limitGColecciones());

AppColecciones.get('/GetColecciones', async (req, res) =>{
    if(!req.rateLimit) return;
    const collections = await db.listCollections().toArray();
    res.send(collections)

})

export default AppColecciones;
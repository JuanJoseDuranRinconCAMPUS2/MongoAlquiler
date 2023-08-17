import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateIDColeccion } from "../controllers/vCrudUniversal.js";
import { validate } from 'class-validator';

const proxyQueryID = express();
const proxyBodyID = express();

//proxy usado para validar el Id de todos los metodos que tengan id enviados por el query
proxyQueryID.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateIDColeccion, req.query, {excludeExtraneousValues: true});
        await validate(data);
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar el Id de todos los metodos delete que son enviados por el body

proxyBodyID.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateIDColeccion, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyQueryID, proxyBodyID};
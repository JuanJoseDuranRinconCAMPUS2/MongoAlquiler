import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostAlquiler, validatePutAlquiler } from "../controllers/vCrudAlquiler.js";
import { validate } from 'class-validator';

const proxyPutColeccion = express();

const Validaciones = {
    "alquileresPut" : validatePutAlquiler,
    "alquileresPost" : validatePostAlquiler
}

//proxy usado para validar el metodo Post
export function proxyPostC(coleccion) {
    const proxyPostColeccion = express();
    console.log(coleccion);
    proxyPostColeccion.use(async(req, res, next)=>{
        try {
            let validation = Validaciones[coleccion];
            let data = plainToClass(validation, req.body, {excludeExtraneousValues: true});
            await validate(data);
            req.body = JSON.parse(JSON.stringify(data));
            next();
        } catch (err) {
            res.status(err.status).send(err);
        }
    });

    return proxyPostColeccion;
}

//proxy usado para validar el metodo Put
proxyPutColeccion.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePutAlquiler, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

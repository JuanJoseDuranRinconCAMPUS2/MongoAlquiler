import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostAlquiler, validatePutAlquiler } from "../controllers/vCrudAlquiler.js";
import { validatePostAuto, validatePutAuto } from '../controllers/vCrudAutomovil.js';
import { validatePostCliente, validatePutCliente} from '../controllers/vCrudCliente.js';
import { validatePostEmpleado, validatePutEmpleado} from '../controllers/vCrudEmpleado.js'
import { validatePostRegistroDevolucion, validatePutRegistroDevolucion} from '../controllers/vCrudRegistroDevolucion.js'
import { validatePostRegistroEntrega, validatePutRegistroEntrega} from '../controllers/vCrudRegistroEnt.js'
import { validatePostReserva, validatePutReserva } from '../controllers/vCrudReserva.js';
import { validatePostSucursal, validatePutSucursal } from '../controllers/vCrudSucursal.js';
import { validatePostSucursal_Auto, validatePutSucursal_Auto } from '../controllers/vCrudSucursal_Auto.js';
import { validateIngresoU } from "../controllers/vIngresoUsuario.js";
import { validateCreacionU } from "../controllers/vCrearUsuarios.js";
import { validate } from 'class-validator';

const Validaciones = {
    "validateCreacionUsuario" : validateCreacionU,
    "validateIngresoUsuario" : validateIngresoU,
    "alquileresPut" : validatePutAlquiler,
    "alquileresPost" : validatePostAlquiler,
    "automovilesPut" : validatePutAuto,
    "automovilesPost" : validatePostAuto,
    "clientePut" : validatePutCliente,
    "clientePost" : validatePostCliente,
    "empleadoPut" : validatePutEmpleado,
    "empleadoPost" : validatePostEmpleado,
    "registroDevPut" : validatePutRegistroDevolucion,
    "registroDevPost" : validatePostRegistroDevolucion,
    "registroEntPut" : validatePutRegistroEntrega,
    "registroEntPost" : validatePostRegistroEntrega,
    "reservaPut" : validatePutReserva,
    "reservaPost" : validatePostReserva,
    "sucursalPut" : validatePutSucursal,
    "sucursalPost" : validatePostSucursal,
    "sucursalAutoPut" : validatePutSucursal_Auto,
    "sucursalAutoPost" : validatePostSucursal_Auto
}

//proxy usado para validar los metodos put y post
export function proxyPostC(coleccion) {
    const proxyPostColeccion = express();
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

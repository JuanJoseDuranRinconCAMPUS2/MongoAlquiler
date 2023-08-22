import  express from 'express';
import 'reflect-metadata';
import { con } from '../db/atlas.js';
import errorcontroller from "../middleware/ErroresMongo.js";

let db = await con();

const proxyUsuarios = express();
let usuario_Api = db.collection("usuario_Api");

let validorExistenciaValores = async (nombre, valor) => {
    return await usuario_Api.findOne({ [nombre]: valor });
}

let ErrorValidacion = (res, mensaje) => {
    res.status(409).send(mensaje);
}

proxyUsuarios.use(async(req, res, next)=>{
    try {
        let nombreVal = await validorExistenciaValores("nombre", req.body.nombre);
        if (nombreVal) {
            let mensaje = {status: 409, message: `El usuario con el nombre de usuario: '${nombreVal.nombre}', ya está registrado en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }

        let emailVal = await validorExistenciaValores("email", req.body.email);
        if (emailVal) {
            let mensaje = {status: 409, message: `El usuario con el email: '${emailVal.email}', ya está registrado en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        next();
    } catch (error) {
      errorcontroller(error, res);
    }
});
export {proxyUsuarios};
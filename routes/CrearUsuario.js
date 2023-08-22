import { Router } from "express";
import { limitPColecciones } from "../middleware/limit.js";
import { con } from '../db/atlas.js';
import errorcontroller from "../middleware/ErroresMongo.js";
import { proxyUsuarios } from "../middleware/proxyCrearUsuario.js";
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
const AppCrearUsuario = Router();
let db = await con();

let usuario_Api = db.collection("usuario_Api");
let roles_Api = db.collection("roles_Api");

AppCrearUsuario.post('/', limitPColecciones(235, "CrearUsuario"), proxyPostC("validateCreacionUsuario"), proxyUsuarios, async (req, res) =>{
    if(!req.rateLimit) return;
    try {
        let result = await usuario_Api.insertOne(req.body);
        let rol = await roles_Api.findOne({ _id: req.body.codigo_Rol });
        res.status(200).send({status: 200, message: `El usuario: '${req.body.nombre}', con el rol de: '${rol.rol}', se ha creado correctamente`});
    } catch (error) {
      console.log(error);
      errorcontroller(error, res);
    }

})


export default AppCrearUsuario;
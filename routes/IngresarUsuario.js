import { Router } from "express";
import { limitPColecciones } from "../middleware/limit.js";
import { con } from '../db/atlas.js';
import { SignJWT } from 'jose';
import { proxyExistUsuario, proxyValidateColeccion } from "../middleware/proxyIngresoU.js";
import { proxyPostC } from "../middleware/proxyCrudColecciones.js";
const AppIngresoUsuario = Router();
let db = await con();

let tokens_Api = db.collection("tokens_Api");

AppIngresoUsuario.get('/', limitPColecciones(235, "IngresoUsuario"), proxyPostC("validateIngresoUsuario"), proxyExistUsuario, proxyValidateColeccion, async (req, res) =>{
    if(!req.rateLimit) return;
    try {
      let data = req.body
      const encoder = new TextEncoder();
      const jwtconstructor = new SignJWT(Object.assign({}, data));
      const jwt = await jwtconstructor
      .setProtectedHeader({alg:"HS256", typ: "JWT"})
      .setIssuedAt()
      .setExpirationTime("30m")
      .sign(encoder.encode(process.env.Jwt_Primate_Key));
      req.data = jwt;
      let id_usuario_Api = req.usuarioID 
      let tokens = {id_usuario_Api}
      tokens.token = jwt
      let result = await tokens_Api.insertOne(tokens)
      res.status(201).send({status: 201, message: jwt, instructions: "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor"});
  } catch (error) {
      res.status(404).send({status: 404, message: "Error al crear el Token"});
  }

})


export default AppIngresoUsuario;
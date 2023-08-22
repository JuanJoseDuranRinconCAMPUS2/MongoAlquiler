import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validateIngresoU{

    @Expose({ name: "nombre_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener numeros y mayusculas'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario no puede estar vacio'}}})
    nombre: string;

    @Expose({ name: "contraseña_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario debe tener como máximo 100 caracteres'}}})
    @IsString({ message: 'El parámetro contraseña_Usuario debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario no puede estar vacio'}}})
    password: string;

    @Expose({ name: "endPoint_Solicitado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro endPoint_Solicitado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro endPoint_Solicitado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!_]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro endPoint_Solicitado debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener numeros y mayusculas'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro endPoint_Solicitado no puede estar vacio'}}})
    endPoint: string;


    constructor(data: Partial<validateIngresoU>){
     Object.assign(this, data);
    }
}
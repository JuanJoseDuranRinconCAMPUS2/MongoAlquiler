import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validateCreacionU{

    @Expose({ name: "nombre_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener numeros y mayusculas'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Usuario no puede estar vacio'}}})
    nombre: string;

    @Expose({ name: "correo_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro correo_Usuario es obligatorio'}}})
    @MaxLength(150, { message: ()=>{ throw { status: 400, message: 'El parametro correo_Usuario debe tener como máximo 150 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro correo_Usuario debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro correo_Usuario no puede estar vacio'}}})
    email: string;

    @Expose({ name: "contraseña_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario debe tener como máximo 100 caracteres'}}})
    @IsString({ message: 'El parámetro contraseña_Usuario debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro contraseña_Usuario no puede estar vacio'}}})
    password: string;

    @Expose({ name: "codeRol_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro codeRol_Usuario es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro codeRol_Usuario debe tener como máximo 200 caracteres'}}})
    @Matches(/^(CsWscIpEhqmr1987|CsWscYrYwyvemws22501)$/, {  message: ()=>{ throw { status: 400, message: 'El parametro codeRol_Usuario debe ser un codigo valido suministrado por el desarrollador de la api'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro codeRol_Usuario no puede estar vacio'}}})
    codigo_Rol: string;


    constructor(data: Partial<validateCreacionU>){
     Object.assign(this, data);
    }
}
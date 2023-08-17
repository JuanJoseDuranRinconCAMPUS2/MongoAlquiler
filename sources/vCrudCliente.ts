import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validatePostCliente{

    @Expose({ name: "identificacion_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio'}}})
    ID_Cliente: number;

    @Expose({ name: "nombre_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "apellido_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio'}}})
    Apellido: string;

    @Expose({ name: "identification_Card_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro identification_Card_Cliente debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente no puede estar vacio'}}})
    DNI: number;

    @Expose({ name: "direccion_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro direccion_Cliente debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro telefono_Cliente debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente no puede estar vacio'}}})
    Telefono: number;
    
    @Expose({ name: "email_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente no puede estar vacio'}}})
    Email: string;

    constructor(data: Partial<validatePostCliente>){
     Object.assign(this, data);
    }
}

export class validatePutCliente{

    @Expose({ name: "nombre_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "apellido_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio'}}})
    Apellido: string;

    @Expose({ name: "identification_Card_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro identification_Card_Cliente debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Cliente no puede estar vacio'}}})
    DNI: number;

    @Expose({ name: "direccion_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro direccion_Cliente debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Cliente no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro telefono_Cliente debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Cliente no puede estar vacio'}}})
    Telefono: number;
    
    @Expose({ name: "email_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro email_Cliente no puede estar vacio'}}})
    Dm_Email: string;

    constructor(data: Partial<validatePutCliente>){
     Object.assign(this, data);
    }
}

import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validatePostEmpleado{

    @Expose({ name: "identificacion_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio'}}})
    ID_Empleado: number;

    @Expose({ name: "nombre_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "apellido_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado no puede estar vacio'}}})
    Apellido: string;

    @Expose({ name: "identification_Card_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro identification_Card_Empleado debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado no puede estar vacio'}}})
    DNI: number;

    @Expose({ name: "direccion_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro direccion_Empleado debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro telefono_Empleado debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado no puede estar vacio'}}})
    Telefono: number;
    
    @Expose({ name: "cargo_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado no puede estar vacio'}}})
    Cargo: string;

    constructor(data: Partial<validatePostEmpleado>){
     Object.assign(this, data);
    }
}

export class validatePutEmpleado{

    @Expose({ name: "nombre_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Empleado no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "apellido_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro apellido_Empleado no puede estar vacio'}}})
    Apellido: string;

    @Expose({ name: "identification_Card_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro identification_Card_Empleado debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identification_Card_Empleado no puede estar vacio'}}})
    DNI: number;

    @Expose({ name: "direccion_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro direccion_Empleado debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Empleado no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado es obligatorio'}}})
    @MaxLength(15, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado debe tener como máximo 15 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro telefono_Empleado debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Empleado no puede estar vacio'}}})
    Telefono: number;
    
    @Expose({ name: "cargo_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cargo_Empleado no puede estar vacio'}}})
    Cargo: string;

    constructor(data: Partial<validatePutEmpleado>){
     Object.assign(this, data);
    }
}

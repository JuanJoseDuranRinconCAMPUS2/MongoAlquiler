import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostSucursal{

    @Expose({ name: "identificacion_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal no puede estar vacio'}}})
    ID_sucursal: number;

    @Expose({ name: "nombre_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "direccion_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal no puede estar vacio'}}})
    Telefono: number;

    constructor(data: Partial<validatePostSucursal>){
     Object.assign(this, data);
    }
}

export class validatePutSucursal{

    @Expose({ name: "nombre_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Sucursal no puede estar vacio'}}})
    Nombre: string;

    @Expose({ name: "direccion_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro direccion_Sucursal no puede estar vacio'}}})
    Direccion: string;

    @Expose({ name: "telefono_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono_Sucursal no puede estar vacio'}}})
    Telefono: number;

    constructor(data: Partial<validatePostSucursal>){
     Object.assign(this, data);
    }
}

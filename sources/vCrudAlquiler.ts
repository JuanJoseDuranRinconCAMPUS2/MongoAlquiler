import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostAlquiler{

    @Expose({ name: "identificacion_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio'}}})
    ID_Alquiler: number;

    @Expose({ name: "identificacion_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio'}}})
    cliente_id: number;

    @Expose({ name: "identificacion_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio'}}})
    automovil_id: number;

    @Expose({ name: "Fecha_Inicial" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial no puede estar vacio'}}})
    Fecha_Inicio: Date;

    @Expose({ name: "Fecha_Finalizacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion no puede estar vacio'}}})
    Fecha_Fin: Date;

    @Expose({ name: "Costo_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio'}}})
    Costo_Total: number;

    @Expose({ name: "Estado_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler no puede estar vacio'}}})
    Estado: string;

    constructor(data: Partial<validatePostAlquiler>){
     Object.assign(this, data);
    }
}

export class validatePutAlquiler{

    @Expose({ name: "identificacion_Cliente" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio'}}})
    cliente_id: number;

    @Expose({ name: "identificacion_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio'}}})
    automovil_id: number;

    @Expose({ name: "Fecha_Inicial" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Inicial no puede estar vacio'}}})
    Fecha_Inicio: Date;

    @Expose({ name: "Fecha_Finalizacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Finalizacion no puede estar vacio'}}})
    Fecha_Fin: Date;

    @Expose({ name: "Costo_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio'}}})
    Costo_Total: number;

    @Expose({ name: "Estado_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Alquiler no puede estar vacio'}}})
    Estado: string;

    constructor(data: Partial<validatePostAlquiler>){
     Object.assign(this, data);
    }
}

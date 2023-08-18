import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostReserva{

    @Expose({ name: "identificacion_Reserva" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Reserva es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Reserva debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Reserva debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Reserva no puede estar vacio'}}})
    ID_Reserva: number;

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

    @Expose({ name: "fecha_Res" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res no puede estar vacio'}}})
    Fecha_Reserva: Date;

    @Expose({ name: "fecha_Inicio" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio no puede estar vacio'}}})
    Fecha_Inicio: Date;

    @Expose({ name: "fecha_Fin" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin no puede estar vacio'}}})
    Fecha_Fin: Date;

    @Expose({ name: "Estado_Reserva" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva no puede estar vacio'}}})
    Estado: string;

    constructor(data: Partial<validatePostReserva>){
     Object.assign(this, data);
    }
}

export class validatePutReserva{

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

    @Expose({ name: "fecha_Res" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Res no puede estar vacio'}}})
    Fecha_Reserva: Date;

    @Expose({ name: "fecha_Inicio" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Inicio no puede estar vacio'}}})
    Fecha_Inicio: Date;

    @Expose({ name: "fecha_Fin" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Fin no puede estar vacio'}}})
    Fecha_Fin: Date;

    @Expose({ name: "Estado_Reserva" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Estado_Reserva no puede estar vacio'}}})
    Estado: string;

    constructor(data: Partial<validatePutReserva>){
     Object.assign(this, data);
    }
}

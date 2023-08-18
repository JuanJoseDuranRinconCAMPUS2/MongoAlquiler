import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostRegistroEntrega{

    @Expose({ name: "identificacion_RegistroEnt" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroEnt es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroEnt debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroEnt debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroEnt no puede estar vacio'}}})
    ID_Registro: number;

    @Expose({ name: "identificacion_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio'}}})
    alquiler_id: number;

    @Expose({ name: "identificacion_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio'}}})
    empleado_id: number;

    @Expose({ name: "fecha_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent no puede estar vacio'}}})
    Fecha_Entrega: Date;

    @Expose({ name: "combustible_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent no puede estar vacio'}}})
    Combustible_Entregado: number;

    @Expose({ name: "kilometraje_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent no puede estar vacio'}}})
    Kilometraje_Entregado: number;

    constructor(data: Partial<validatePostRegistroEntrega>){
     Object.assign(this, data);
    }
}

export class validatePutRegistroEntrega{

    @Expose({ name: "identificacion_Alquiler" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio'}}})
    alquiler_id: number;

    @Expose({ name: "identificacion_Empleado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio'}}})
    empleado_id: number;

    @Expose({ name: "fecha_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro fecha_Ent no puede estar vacio'}}})
    Fecha_Entrega: Date;

    @Expose({ name: "combustible_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Ent no puede estar vacio'}}})
    Combustible_Entregado: number;

    @Expose({ name: "kilometraje_Ent" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro kilometraje_Ent no puede estar vacio'}}})
    Kilometraje_Entregado: number;

    constructor(data: Partial<validatePutRegistroEntrega>){
     Object.assign(this, data);
    }
}

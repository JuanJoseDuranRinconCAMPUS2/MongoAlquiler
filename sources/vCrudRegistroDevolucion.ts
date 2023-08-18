import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostRegistroDevolucion{

    @Expose({ name: "identificacion_RegistroDev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroDev es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroDev debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroDev debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_RegistroDev no puede estar vacio'}}})
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

    @Expose({ name: "fecha_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev no puede estar vacio'}}})
    Fecha_Devolucion: Date;

    @Expose({ name: "combustible_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev no puede estar vacio'}}})
    Combustible_Devuelto: number;

    @Expose({ name: "kilometraje_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio'}}})
    Kilometraje_Devuelto: number;

    @Expose({ name: "monto_Superior" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior no puede estar vacio'}}})
    Monto_Adicional: number;

    constructor(data: Partial<validatePostRegistroDevolucion>){
     Object.assign(this, data);
    }
}

export class validatePutRegistroDevolucion{

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

    @Expose({ name: "fecha_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Fecha_Dev no puede estar vacio'}}})
    Fecha_Devolucion: Date;

    @Expose({ name: "combustible_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro combustible_Dev no puede estar vacio'}}})
    Combustible_Devuelto: number;

    @Expose({ name: "kilometraje_Dev" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio'}}})
    Kilometraje_Devuelto: number;

    @Expose({ name: "monto_Superior" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior es obligatorio'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro monto_Superior no puede estar vacio'}}})
    Monto_Adicional: number;

    constructor(data: Partial<validatePostRegistroDevolucion>){
     Object.assign(this, data);
    }
}

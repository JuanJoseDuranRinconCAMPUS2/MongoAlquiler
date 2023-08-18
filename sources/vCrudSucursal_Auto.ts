import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostSucursal_Auto{

    @Expose({ name: "identificacion_Sucursal_A" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal_A es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal_A debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal_A debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal_A no puede estar vacio'}}})
    _id: number;

    @Expose({ name: "identificacion_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal no puede estar vacio'}}})
    sucursal_id: number;

    @Expose({ name: "identificacion_Auto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto no puede estar vacio'}}})
    automovil_id: number;

    @Expose({ name: "cantidad_Disp" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp no puede estar vacio'}}})
    Cantidad_Disponible: number;

    constructor(data: Partial<validatePostSucursal_Auto>){
     Object.assign(this, data);
    }
}

export class validatePutSucursal_Auto{

    @Expose({ name: "identificacion_Sucursal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Sucursal no puede estar vacio'}}})
    sucursal_id: number;

    @Expose({ name: "identificacion_Auto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Auto no puede estar vacio'}}})
    automovil_id: number;

    @Expose({ name: "cantidad_Disp" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Disp no puede estar vacio'}}})
    Cantidad_Disponible: number;

    constructor(data: Partial<validatePostSucursal_Auto>){
     Object.assign(this, data);
    }
}

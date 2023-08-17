import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsDecimal} from 'class-validator';

export class validatePostAuto{

    @Expose({ name: "identificacion_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio'}}})
    ID_Automovil: number;

    @Expose({ name: "marca_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil no puede estar vacio'}}})
    Marca: string;

    @Expose({ name: "modelo_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil no puede estar vacio'}}})
    Modelo: string;

    @Expose({ name: "anio_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil no puede estar vacio'}}})
    Anio: number;

    @Expose({ name: "tipo_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil no puede estar vacio'}}})
    Tipo: string;

    @Expose({ name: "capacidad_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil no puede estar vacio'}}})
    Capacidad: number;

    @Expose({ name: "precio_Diario_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil no puede estar vacio'}}})
    Precio_Diario: number;

    constructor(data: Partial<validatePostAuto>){
     Object.assign(this, data);
    }
}

export class validatePutAuto{

    @Expose({ name: "marca_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro marca_Automovil no puede estar vacio'}}})
    Marca: string;

    @Expose({ name: "modelo_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro modelo_Automovil no puede estar vacio'}}})
    Modelo: string;

    @Expose({ name: "anio_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro año_Automovil no puede estar vacio'}}})
    Anio: number;

    @Expose({ name: "tipo_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro tipo_Automovil no puede estar vacio'}}})
    Tipo: string;

    @Expose({ name: "capacidad_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro capacidad_Automovil no puede estar vacio'}}})
    Capacidad: number;

    @Expose({ name: "precio_Diario_Automovil" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro precio_Diario_Automovil no puede estar vacio'}}})
    Precio_Diario: number;

    constructor(data: Partial<validatePutAuto>){
     Object.assign(this, data);
    }
}

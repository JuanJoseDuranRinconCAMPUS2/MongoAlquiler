import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';


//clase de validacion para los ids en los metodos que necesiten un id por medio del Query y body
export class validateIDColeccion{

    @Expose({ name: "id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro id es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro id debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id no puede estar vacio'}}})
    id: number;

    constructor(data: Partial<validateIDColeccion>){
        Object.assign(this, data);
       }
}

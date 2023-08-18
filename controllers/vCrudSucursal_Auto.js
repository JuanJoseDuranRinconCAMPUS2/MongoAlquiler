var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';
export class validatePostSucursal_Auto {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Sucursal_A" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal_A es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal_A debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal_A debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal_A no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSucursal_Auto.prototype, "_id", void 0);
__decorate([
    Expose({ name: "identificacion_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSucursal_Auto.prototype, "sucursal_id", void 0);
__decorate([
    Expose({ name: "identificacion_Auto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Auto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSucursal_Auto.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "cantidad_Disp" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cantidad_Disp debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSucursal_Auto.prototype, "Cantidad_Disponible", void 0);
export class validatePutSucursal_Auto {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutSucursal_Auto.prototype, "sucursal_id", void 0);
__decorate([
    Expose({ name: "identificacion_Auto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Auto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Auto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutSucursal_Auto.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "cantidad_Disp" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cantidad_Disp debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cantidad_Disp no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutSucursal_Auto.prototype, "Cantidad_Disponible", void 0);

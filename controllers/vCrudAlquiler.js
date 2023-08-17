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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePostAlquiler {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAlquiler.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: "identificacion_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAlquiler.prototype, "cliente_id", void 0);
__decorate([
    Expose({ name: "identificacion_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAlquiler.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "Fecha_Inicial" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostAlquiler.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "Fecha_Finalizacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostAlquiler.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: "Costo_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAlquiler.prototype, "Costo_Total", void 0);
__decorate([
    Expose({ name: "Estado_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostAlquiler.prototype, "Estado", void 0);
export class validatePutAlquiler {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAlquiler.prototype, "cliente_id", void 0);
__decorate([
    Expose({ name: "identificacion_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAlquiler.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "Fecha_Inicial" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Inicial no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutAlquiler.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "Fecha_Finalizacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Finalizacion no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutAlquiler.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: "Costo_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAlquiler.prototype, "Costo_Total", void 0);
__decorate([
    Expose({ name: "Estado_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Estado_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutAlquiler.prototype, "Estado", void 0);

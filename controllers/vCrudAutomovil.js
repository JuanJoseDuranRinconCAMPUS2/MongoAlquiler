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
export class validatePostAuto {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAuto.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: "marca_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro marca_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro marca_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro marca_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro marca_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostAuto.prototype, "Marca", void 0);
__decorate([
    Expose({ name: "modelo_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro modelo_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro modelo_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro modelo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro modelo_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostAuto.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: "anio_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro año_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro año_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro año_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro año_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAuto.prototype, "Anio", void 0);
__decorate([
    Expose({ name: "tipo_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro tipo_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro tipo_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro tipo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro tipo_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostAuto.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: "capacidad_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAuto.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: "precio_Diario_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostAuto.prototype, "Precio_Diario", void 0);
export class validatePutAuto {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "marca_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro marca_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro marca_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro marca_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro marca_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutAuto.prototype, "Marca", void 0);
__decorate([
    Expose({ name: "modelo_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro modelo_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro modelo_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro modelo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro modelo_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutAuto.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: "anio_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro año_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro año_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro año_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro año_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAuto.prototype, "Anio", void 0);
__decorate([
    Expose({ name: "tipo_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro tipo_Automovil es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro tipo_Automovil debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro tipo_Automovil debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro tipo_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutAuto.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: "capacidad_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro capacidad_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAuto.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: "precio_Diario_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro precio_Diario_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutAuto.prototype, "Precio_Diario", void 0);

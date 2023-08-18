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
export class validatePostSucursal {
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
], validatePostSucursal.prototype, "ID_sucursal", void 0);
__decorate([
    Expose({ name: "nombre_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSucursal.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "direccion_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSucursal.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSucursal.prototype, "Telefono", void 0);
export class validatePutSucursal {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "nombre_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutSucursal.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "direccion_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutSucursal.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Sucursal" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Sucursal no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutSucursal.prototype, "Telefono", void 0);

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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString } from 'class-validator';
export class validatePostEmpleado {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostEmpleado.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: "nombre_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEmpleado.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro apellido_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro apellido_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro apellido_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro apellido_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEmpleado.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "identification_Card_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostEmpleado.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Empleado es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro direccion_Empleado debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro direccion_Empleado debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEmpleado.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Empleado es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro telefono_Empleado debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro telefono_Empleado debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostEmpleado.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: "cargo_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro cargo_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro cargo_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro cargo_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cargo_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEmpleado.prototype, "Cargo", void 0);
export class validatePutEmpleado {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "nombre_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutEmpleado.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro apellido_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro apellido_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro apellido_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro apellido_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutEmpleado.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "identification_Card_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutEmpleado.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Empleado es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro direccion_Empleado debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro direccion_Empleado debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutEmpleado.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Empleado es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro telefono_Empleado debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro telefono_Empleado debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutEmpleado.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: "cargo_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro cargo_Empleado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro cargo_Empleado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro cargo_Empleado debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cargo_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutEmpleado.prototype, "Cargo", void 0);

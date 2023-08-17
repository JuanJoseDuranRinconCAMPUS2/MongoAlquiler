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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail } from 'class-validator';
export class validatePostCliente {
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
], validatePostCliente.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: "nombre_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCliente.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCliente.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "identification_Card_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCliente.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccion_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Cliente es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro direccion_Cliente debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro direccion_Cliente debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCliente.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Cliente es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro telefono_Cliente debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro telefono_Cliente debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCliente.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: "email_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro email_Cliente es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro email_Cliente debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro email_Cliente debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro email_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCliente.prototype, "Email", void 0);
export class validatePutCliente {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "nombre_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutCliente.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Cliente debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutCliente.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: "identification_Card_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identification_Card_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutCliente.prototype, "DNI", void 0);
__decorate([
    Expose({ name: "direccion_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro direccion_Cliente es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro direccion_Cliente debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro direccion_Cliente debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro direccion_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutCliente.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: "telefono_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro telefono_Cliente es obligatorio' }; } }),
    MaxLength(15, { message: () => { throw { status: 400, message: 'El parametro telefono_Cliente debe tener como máximo 15 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro telefono_Cliente debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutCliente.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: "email_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro email_Cliente es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro email_Cliente debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro email_Cliente debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro email_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutCliente.prototype, "Dm_Email", void 0);

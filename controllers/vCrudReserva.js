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
export class validatePostReserva {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Reserva" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Reserva es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Reserva debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Reserva debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Reserva no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostReserva.prototype, "ID_Reserva", void 0);
__decorate([
    Expose({ name: "identificacion_Cliente" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Cliente no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostReserva.prototype, "cliente_id", void 0);
__decorate([
    Expose({ name: "identificacion_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostReserva.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "fecha_Res" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Res es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Res debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Res no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostReserva.prototype, "Fecha_Reserva", void 0);
__decorate([
    Expose({ name: "fecha_Inicio" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Inicio es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Inicio debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Inicio no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostReserva.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "fecha_Fin" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Fin es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Fin debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Fin no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostReserva.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: "Estado_Reserva" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Estado_Reserva es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Estado_Reserva debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Estado_Reserva debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Estado_Reserva no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostReserva.prototype, "Estado", void 0);
export class validatePutReserva {
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
], validatePutReserva.prototype, "cliente_id", void 0);
__decorate([
    Expose({ name: "identificacion_Automovil" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Automovil no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutReserva.prototype, "automovil_id", void 0);
__decorate([
    Expose({ name: "fecha_Res" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Res es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Res debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Res no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutReserva.prototype, "Fecha_Reserva", void 0);
__decorate([
    Expose({ name: "fecha_Inicio" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Inicio es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Inicio debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Inicio no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutReserva.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: "fecha_Fin" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Fin es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Fin debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Fin no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutReserva.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: "Estado_Reserva" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Estado_Reserva es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro Estado_Reserva debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Estado_Reserva debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Estado_Reserva no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePutReserva.prototype, "Estado", void 0);

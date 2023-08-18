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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePostRegistroEntrega {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_RegistroEnt" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroEnt es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroEnt debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroEnt debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroEnt no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroEntrega.prototype, "ID_Registro", void 0);
__decorate([
    Expose({ name: "identificacion_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroEntrega.prototype, "alquiler_id", void 0);
__decorate([
    Expose({ name: "identificacion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroEntrega.prototype, "empleado_id", void 0);
__decorate([
    Expose({ name: "fecha_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Ent es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Ent debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostRegistroEntrega.prototype, "Fecha_Entrega", void 0);
__decorate([
    Expose({ name: "combustible_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro combustible_Ent es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro combustible_Ent debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro combustible_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroEntrega.prototype, "Combustible_Entregado", void 0);
__decorate([
    Expose({ name: "kilometraje_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroEntrega.prototype, "Kilometraje_Entregado", void 0);
export class validatePutRegistroEntrega {
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
], validatePutRegistroEntrega.prototype, "alquiler_id", void 0);
__decorate([
    Expose({ name: "identificacion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroEntrega.prototype, "empleado_id", void 0);
__decorate([
    Expose({ name: "fecha_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro fecha_Ent es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro fecha_Ent debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro fecha_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutRegistroEntrega.prototype, "Fecha_Entrega", void 0);
__decorate([
    Expose({ name: "combustible_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro combustible_Ent es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro combustible_Ent debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro combustible_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroEntrega.prototype, "Combustible_Entregado", void 0);
__decorate([
    Expose({ name: "kilometraje_Ent" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro kilometraje_Ent no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroEntrega.prototype, "Kilometraje_Entregado", void 0);

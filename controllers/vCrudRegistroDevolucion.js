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
export class validatePostRegistroDevolucion {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_RegistroDev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroDev es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroDev debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroDev debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_RegistroDev no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "ID_Registro", void 0);
__decorate([
    Expose({ name: "identificacion_Alquiler" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "alquiler_id", void 0);
__decorate([
    Expose({ name: "identificacion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "empleado_id", void 0);
__decorate([
    Expose({ name: "fecha_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Dev es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Dev debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Dev no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostRegistroDevolucion.prototype, "Fecha_Devolucion", void 0);
__decorate([
    Expose({ name: "combustible_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro combustible_Dev es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro combustible_Dev debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro combustible_Dev no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "Combustible_Devuelto", void 0);
__decorate([
    Expose({ name: "kilometraje_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "Kilometraje_Devuelto", void 0);
__decorate([
    Expose({ name: "monto_Superior" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro monto_Superior es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro monto_Superior debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro monto_Superior no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostRegistroDevolucion.prototype, "Monto_Adicional", void 0);
export class validatePutRegistroDevolucion {
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
], validatePutRegistroDevolucion.prototype, "alquiler_id", void 0);
__decorate([
    Expose({ name: "identificacion_Empleado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Empleado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroDevolucion.prototype, "empleado_id", void 0);
__decorate([
    Expose({ name: "fecha_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Fecha_Dev es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Fecha_Dev debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Fecha_Dev no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePutRegistroDevolucion.prototype, "Fecha_Devolucion", void 0);
__decorate([
    Expose({ name: "combustible_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro combustible_Dev es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro combustible_Dev debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro combustible_Dev no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroDevolucion.prototype, "Combustible_Devuelto", void 0);
__decorate([
    Expose({ name: "kilometraje_Dev" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Costo_Alquiler no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroDevolucion.prototype, "Kilometraje_Devuelto", void 0);
__decorate([
    Expose({ name: "monto_Superior" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro monto_Superior es obligatorio' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro monto_Superior debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro monto_Superior no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePutRegistroDevolucion.prototype, "Monto_Adicional", void 0);

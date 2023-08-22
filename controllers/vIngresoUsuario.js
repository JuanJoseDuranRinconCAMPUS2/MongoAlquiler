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
import { IsDefined, MaxLength, IsNotEmpty, Matches, IsString } from 'class-validator';
export class validateIngresoU {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "nombre_Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Usuario es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Usuario debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Usuario debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener numeros y mayusculas' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Usuario no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateIngresoU.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "contraseña_Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro contraseña_Usuario es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro contraseña_Usuario debe tener como máximo 100 caracteres' }; } }),
    IsString({ message: 'El parámetro contraseña_Usuario debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro contraseña_Usuario no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateIngresoU.prototype, "password", void 0);
__decorate([
    Expose({ name: "endPoint_Solicitado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro endPoint_Solicitado es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro endPoint_Solicitado debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro endPoint_Solicitado debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener numeros y mayusculas' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro endPoint_Solicitado no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateIngresoU.prototype, "endPoint", void 0);

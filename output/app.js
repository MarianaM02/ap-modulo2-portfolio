"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hola Mundo
let message = 'Holi Mundis! ✨';
console.log(message);
// Inferencia de tipo de dato
let a; // Inferencia explícita
let b; // Inferencia explícita
let c = 101; // Inferencia implícita
let recursos = ['memoria', 'disco', 'procesador', 100];
let recursos2 = ['memoria', 'disco', 'procesador'];
// Tipo de Datos
//any
let cantidad = 4;
let desc = [1, true, "verde"];
//string
let nombre = "Matteo";
let mensaje = `Mi nombre es ${nombre}.
	Soy nuevo en Typescript.`;
console.log(mensaje);
//number
let codigoProducto = 6;
//void
function mensajeUsuario() {
    console.log("Este es un mensaje para usuario");
}
//enum
// Crear la enumeración
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
// Declarar la variable y asignar un valor de la enumeración
let colorAuto = Color.Blanco;
console.log(colorAuto); //return 0;
// Tipos de objetos
// Arrays
let list = ['pimiento', 'papas', 'tomate'];
let rocosos = [true, false, false, true];
let perdidos = [9, true, 'asteroides'];
let diametro = ['Saturno', 116460];
//generic
function display(arg) {
    console.log(arg);
    return arg;
}
let cadena = "Holis";
let dato = display(cadena);
// dato = 6; // no se puede, quedó establecido el tipo 
function display2(valor) {
    console.log(valor.length);
    return valor;
}
function prueba(obj, key) {
    return obj[key];
}
//object
let persona = { nombre: "Ana", edad: 45 };
//desestructuración
//desestructuración de un objeto:
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c); //3
//desestructuración de un array:
var array = [1, 2, 3];
console.log(array[2]); //3
//desestructuración con estructuración:
var array = [1, 2, 3, 5];
var [x, y, ...rest] = array;
console.log(rest); //[3,5]
function DecoradorPersona(data) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.array = data.split(",");
                this.Nombre = this.array[0];
                this.Apellido = this.array[1];
            }
        };
    };
}
let Persona = class Persona {
    constructor(nombre, apellido) {
        this.nombre = "";
        this.apellido = "";
        this.anioNac = 0;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Apellido() {
        return this.nombre;
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
    get AnioNacimiento() {
        return this.anioNac;
    }
    set AnioNacimiento(anioNac) {
        this.anioNac = anioNac;
    }
};
Persona = __decorate([
    DecoradorPersona('Juan,López')
], Persona);
let person = new Persona("Juan", "Lopez");
console.log(person.Nombre);

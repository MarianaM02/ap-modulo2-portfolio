// Hola Mundo
let message: string = 'Holi Mundis! ✨';
console.log(message);

// Inferencia de tipo de dato
let a: number; // Inferencia explícita
let b: string; // Inferencia explícita
let c = 101;   // Inferencia implícita

let recursos = ['memoria', 'disco', 'procesador', 100];
let recursos2: string[] = ['memoria', 'disco', 'procesador'];

// Tipo de Datos
//any
let cantidad: any = 4;
let desc: any[] = [1, true, "verde"];

//string
let nombre: string = "Matteo";
let mensaje: string = `Mi nombre es ${nombre}.
	Soy nuevo en Typescript.`;
console.log(mensaje);

//number
let codigoProducto: number = 6;

//void
function mensajeUsuario(): void {
	console.log("Este es un mensaje para usuario");
}

//enum
// Crear la enumeración
enum Color {
	Blanco,
	Rojo,
	Verde
}

// Declarar la variable y asignar un valor de la enumeración
let colorAuto: Color = Color.Blanco;

console.log(colorAuto); //return 0;

// Tipos de objetos
// Arrays
let list: string[] = ['pimiento', 'papas', 'tomate'];
let rocosos: boolean[] = [true, false, false, true];
let perdidos: any[] = [9, true, 'asteroides'];
let diametro: [string, number] = ['Saturno', 116460];

//generic
function display<T>(arg: T): T {
	console.log(arg);
  return arg;
}

let cadena:string = "Holis";

let dato = display(cadena);

// dato = 6; // no se puede, quedó establecido el tipo 

function display2<T>(valor: T[]): T[] {
  console.log(valor.length);
  return valor;
}

function prueba<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


//object
let persona: object = {nombre: "Ana", edad: 45}

//desestructuración
//desestructuración de un objeto:
var obj = {a:1, b:2, c:3};
console.log(obj.c); //3

//desestructuración de un array:
var array = [1,2,3];
console.log(array[2]); //3

//desestructuración con estructuración:
var array = [1,2,3,5];
var [x,y, ...rest] = array;
console.log(rest); //[3,5]

// Decorators
function DecoradorPersona(data: string) {
	return function <T extends {new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			array = data.split(",");
			Nombre=this.array[0];
			Apellido=this.array[1];
		}
	}
}

@DecoradorPersona('Juan,López')
class Persona {
	private nombre: string = "";
	private apellido: string = "";
	private anioNac: number= 0;

	constructor(nombre: string, apellido: string) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

  get Nombre():string {
    return this.nombre;
  }
  set Nombre(nombre: string) {
    this.nombre = nombre;
  }
  get Apellido():string {
    return this.nombre;
  }
  set Apellido(apellido: string) {
    this.apellido = apellido;
  }
  get AnioNacimiento():number{
    return this.anioNac;
  }
  set AnioNacimiento(anioNac: number) {
    this.anioNac = anioNac;
  }
}

let person = new Persona("Juan","Lopez");
console.log(person.Nombre);

enum Compass {
  North = 0,
  East = '1',
  South = 2,
  West = '3'
}


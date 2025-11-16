/* 1- Calcular area rectángulo */

function calcularAreaRectangulo(longitud, ancho){
    let width = Number(longitud)
    let height = Number(ancho)
    if (width === 0 || height === 0){
        return 'Error, la longitud y/o el ancho no pueden ser 0 (cero)'
    }
    return width * height
}

console.log(calcularAreaRectangulo(5,2))

/* 2- Contar cantidad de palabras en una cadena */

function obtenerCantidadPalabras(cadena){
    let words = cadena.trim().split(' ')
    return words.length
}

console.log(obtenerCantidadPalabras('En la calle Titicaca hay una señora con una alpaca'))

/* 3- Contar vocales en una cadena */

function obtenerCantidadVocales(cadena){
    let letters = cadena.trim().split('')
    let letterCount = letters.filter((letter) => ['a','e','i','o','u'].includes(letter))
    return letterCount.length
}

console.log(obtenerCantidadVocales('Hola Manola'))

/* 4- Es palíndromo? */

function esPalindromo(palabra){
    let fin = palabra.length - 1
    for (let inicio = 0; inicio < ((fin + 1) / 2); inicio++){
        if (palabra[inicio] !== palabra[fin]){
            return false
        }
        fin--
    }
    return true
}

console.log(esPalindromo('neuquen'))

/* 5- Convertir edad canina */

function convertirEdadCanina(edad){
    console.log('Tu perro tiene ' + (edad * 7) + ' años humanos')
}

let edad = prompt('Ingrese los años de su perro')
edad = parseInt(edad, 10)
convertirEdadCanina(edad)

/* 6- Capitalizar palabras */

function capitalizarPalabras(texto) {
    return texto
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

console.log(capitalizarPalabras("hola mundo desde javascript"));

/* Imprimir sucesion fibonacci */

function fibonacci(largo){
    if (largo <= 0) return []
    if (largo == 1) return [0]

    let numeros = [0, 1]

    for (let i = 2; i < numeros; i++) {
        numeros.push(numeros[i - 1] + numeros[i - 2])
    }

    return numeros;
}
console.log("Resultado: [" + fibonacci(5) + "]") 

/* 8- Actividades con arreglo de productos */

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. forEach: Mostrar nombre + precio
productos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

// 2. map: Array solo con nombres
let nombres = productos.map(producto => producto.nombre);
console.log(nombres); 

// 3. filter: Electrónicos con stock > 20
let electronicosStock = productos.filter(
  p => p.categoria == 'electrónica' && p.stock > 20
);
console.log(electronicosStock);

// 4. find: Producto con id = 3
let producto = productos.find(p => p.id === 3);
console.log(producto);

// 5. reduce: Valor total del inventario
let valorTotal = productos.reduce(
  (total, p) => total + p.precio * p.stock,
  0
);
console.log(valorTotal);

/* 9- Ejecrcicios con arreglo de estudiantes */

const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// Función para promedio
let promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// 1. forEach: Mostrar nombre + edad
estudiantes.forEach(e => {
  console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}`);
});

// 2. map: Array con nombre y promedio
let promedios = estudiantes.map(e => ({
  nombre: e.nombre,
  promedio: promedio(e.calificaciones)
}));
console.log(promedios);

// 3. filter: Estudiantes con promedio > 7.5
let sobresalientes = estudiantes.filter(
  e => promedio(e.calificaciones) > 7.5
);
console.log(sobresalientes);

// 4. find: Estudiante llamado "María"
let estudiante = estudiantes.find(e => e.nombre === "María");
console.log(estudiante);

// 5. reduce: Edad promedio del grupo
let edadPromedio = estudiantes.reduce(
  (acc, e) => acc + e.edad,
  0
) / estudiantes.length;
console.log(edadPromedio);

/* 10- Ejercicios con peliculas */

const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. forEach: Mostrar título + año
peliculas.forEach(p => {
  console.log(`Título: ${p.titulo}, Año: ${p.año}`);
});

// 2. map: Array de títulos en mayúsculas
let titulos = peliculas.map(p => p.titulo.toUpperCase());
console.log(titulos);

// 3. filter: Películas de drama con rating > 8.5
let drama = peliculas.filter(
  p => p.genero === 'drama' && p.rating > 8.5
);
console.log(drama);

// 4. find: Película de 2014
let pelicula = peliculas.find(p => p.año === 2014);
console.log(pelicula);

// 5. reduce: Duración total
let duracionTotal = peliculas.reduce(
  (acc, p) => acc + p.duracion,
  0
);
console.log(duracionTotal);

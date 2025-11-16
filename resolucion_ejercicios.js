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

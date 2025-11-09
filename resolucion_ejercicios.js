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
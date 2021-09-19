function sumar (num) {
    console.log(num)
}

sumar(10)

// Arrow functions
const sumarDos = (num1, num2) => (num1 + num2)

const resultado = sumarDos(20, 30)

console.log(resultado)

const mensaje = nombre => 'hola soy ' + nombre

const resultadoDos = mensaje('Sergio')

console.log(resultadoDos)

const sumaTres = (num = 0) => {
    console.log(num + 3)
}

sumaTres()
sumaTres(7)

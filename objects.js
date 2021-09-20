const mascota = {
    nombre : 'Tom',
    edad : '10',
    vivo : true,
    razas : ['peludo', 'negro']
}

console.log(mascota.razas[1])
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)

mascota.id = 1

const nombreMascota = mascota.nombre

const {edad, vivo} = mascota

console.log(mascota.id)

console.log(nombreMascota)
console.log(vivo)
console.log(edad)
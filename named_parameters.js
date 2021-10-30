function createGodzilla (color, weight = 200, sound, powers) {
    // ...
}

createGodzilla('blue', undefined, ['lighting'])

function createGodzilla({color, material = 'metal', weight = 200, sound, powers}) {

}

const godzillaParams = {
    color: 'blue',
    material: 'plastic',
    sound: 'GROARRR',
    powers: ['lighting', 'nuclear bomb']
}

createGodzilla(godzillaParams)
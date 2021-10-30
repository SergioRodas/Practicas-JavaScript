const adversario = 'Iron-Man'
let loki = ''

// ELSE IF

if (adversario === 'Iron-Man') {
    loki = 'Magneto'
} else if (adversario === 'Hulk') {
    loki = 'Thanos'
} else if (adversario === 'Thor') {
    loki = 'Odin'
} else {
    loki = 'Loki'
}

console.log(loki)

// SWITCH

switch (adversario) {
    case 'Iron-Man':
        loki = 'Magneto'
        break

    case 'Hulk':
        loki = 'Thanos'
        break

    case 'Thor':
        loki = 'Odin'
        break

    default:
        loki = 'Loki'
}

console.log(loki)

// HASH TABLE: Más fácil de leer, más fácil de escalar para este caso.

const LOKI_DISFRACES = {
    'Iron-Man': 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thanos',
    Lobezno: 'Magneto'
}

const LOKI_DEFAULT_DISFRAZ = 'Loki'

const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ

console.log(loki)
require('isomorphic-fetch')

fetch('http://jsonplaceholder.typicode.com/users').then(x => x.json()).then(x => console.log(x))
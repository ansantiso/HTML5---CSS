let lista = ['azucar', 'shampoo', 'jabon', 'queso', 'cafe'];
lista.push('aceite de girasol');
console.log(lista);
lista.pop();
console.log(lista);

let peliculas = [{
        titulo: 'Batman',
        director: 'Christopher Nolan',
        fecha: new Date(2005, 07, 30)
    },
    {
        titulo: 'Robin',
        director: 'Juan Perez',
        fecha: new Date(2009, 09, 22)
    },
    {
        titulo: 'Superman',
        director: 'Ricardo Iorio',
        fecha: new Date(2011, 0, 15)
    }
]

console.log(peliculas);
let peliFecha = peliculas.filter(p => p.fecha > new Date(2010, 1, 1))
console.log(peliFecha);
let peliDir = peliculas.map(p => p.director)
console.log([peliDir]);
let peliTit = peliculas.map(p => p.titulo)
console.log([peliTit]);
let peliConcat = peliDir.concat(peliTit);
console.log(peliConcat);
let peliPropag = [
    [...peliDir] + ',' + [...peliTit]
];
console.log(peliPropag);



let fecha = new Date(999999999999999);
console.log(fecha);
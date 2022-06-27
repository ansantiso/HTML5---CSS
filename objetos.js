let datos = {
    nombre: 'Andres',
    apellido: 'Santiso',
    edad: 40,
    altura: 1.79,
    eresDesarrollador: true
}
console.log(datos);
let edadDatos = datos.edad;
console.log(edadDatos);


let lista = [{
    ...datos
}, {
    nombre: 'Nicolas',
    apellido: 'Gomez',
    edad: 39,
    altura: 1.85,
    eresDesarrollador: false
}, {
    nombre: 'Mauricio',
    apellido: 'Valenzuela',
    edad: 45,
    altura: 1.59,
    eresDesarrollador: false
}];
console.log(lista);

let nuevaLista = lista.sort((a, b) => b.edad - a.edad)
console.log(nuevaLista);
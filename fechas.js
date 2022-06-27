const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(1981, 10, 25);
console.log(nacimiento);

let tarde = hoy > nacimiento;
console.log(tarde);

let diaNac = nacimiento.getDate();
console.log(diaNac);

let mesNac = nacimiento.getMonth();
console.log(mesNac + 1);

let anoNac = nacimiento.getFullYear();
console.log(anoNac);
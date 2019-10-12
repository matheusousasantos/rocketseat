
/* REST */

/* Objeto */

//const usuario = {
//	nome: 'Matheus',
//	idade: 26,
//	empresa: 'Mandy'
//};

//const { nome , ...resto } = usuario;

//console.log(nome);
//console.log(resto);

/* Função */

//const arr = [1,2,3,4];
//const [ a, b, ...c ] = arr;

//console.log(a);
//console.log(b);
//console.log(c);

/*Parâmetro de funções*/

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

console.log(soma(10, 10, 30));


//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario1 = {
	nome: 'Matheus',
	idade: 26,
	empresa: 'Rockseat'
}

const usuario2 = { ...usuario1, nome: 'Luma' };
console.log(usuario2);
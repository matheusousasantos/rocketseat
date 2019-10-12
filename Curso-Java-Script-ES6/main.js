const usuario = {
	nome: 'Matheus',
	idade: 26,
	endereco: {
		cidade: 'São Luis',
		estado: 'MA'
	},

};

/*const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);*/

function mostrarNome({ nome, idade}) {
	console.log(nome, idade);
}

mostrarNome(usuario);



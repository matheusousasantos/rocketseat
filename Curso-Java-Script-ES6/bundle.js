"use strict";

var usuario = {
  nome: 'Matheus',
  idade: 26,
  endereco: {
    cidade: 'São Luis',
    estado: 'MA'
  }
};
/*const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);*/

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);

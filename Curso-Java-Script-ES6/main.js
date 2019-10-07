class List {
	constructor() {
		this.data = [];
	}


	addData(data) {
		this.data.push(data);
		console.log(this.data);
	}
}


class TodoList extends List {

	constructor() {
		super();
		this.todos = [];
		this.usuario = 'Matheus';
	}

	mostrarUsuario() {
		console.log(this.usuario);
	}

	addTodo() {
		this.todos.push('Novo Tudo');
		console.log(this.todos);
	}

}

var MinhaLista = new TodoList();

document.getElementById('novotudo').onclick = function() {
	MinhaLista.addTodo();
}

MinhaLista.mostrarUsuario();
MinhaLista.addData('111');

class Matematica {

	static soma(a,b) {
		return a + b;
	}

}

console.log(Matematica.soma(10, 10));
import api from './api';

class App {

    constructor() {

        this.repositories = [];
        this.formEl = document.getElementById('repo-form');

//      Buscar esse input
        this.inputEl = document.querySelector('input[name=repository]');

        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();

    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

//      Vou pegar o valor do input
        const repoInput = this.inputEl.value;

        if(repoInput.length === 0) {
            return;
        }

//      Variável que irá conter todos as informações sobre um usuário no github
        const response = await api.get(`/users/${repoInput}`);

//      iremos usar a desestruturação para recuperar os dados corretos
//      Eu preciso recuperar esses dados do response.data
        const { name, bio, html_url, avatar_url } = response.data;

        console.log(response);

        this.repositories.push({

            name, //A mesma coisa de name: 'name'
            bio,
            avatar_url,
            html_url

        });

        this.inputEl.value = '';

        this.render();
    }

    render(){

        this.listEl.innerHTML = '';
        this.repositories.forEach( repo => {

            let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
                linkEl.setAttribute('href',repo.html_url)
                linkEl.setAttribute('target','_blank');
                linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);            
            listItemEl.appendChild(descriptionEl);            
            listItemEl.appendChild(linkEl);            

            this.listEl.appendChild(listItemEl);
        }) ;

    }
}

new App();
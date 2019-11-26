class App {

    constructor() {

        this.repositories = [];
        this.formEl = document.getElementById('repo-form');

//      Referenciado a lista
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();

    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {

        event.preventDefault();
        this.repositories.push({

            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e de vida a sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'

        });

        this.render();
    }

//  Apagar todo o conteúdo da lista e começar do zero
    render(){

//      Apaga tudo que tem na lista
        this.listEl.innerHTML = '';


 //  Preciso percorrer os meus repositórios     
//    Percorrer:
//     Map - retorna o resultado que agente tem dentro dele
//           serve pra alterar o array de alguma forma

//     ForEach - Só percorre, ele não faz alteração por conta própria
//     serve pra alterar o array de alguma forma


//      Vamos receber cada repositório( repo ) e depois vamos fazer alguma coisa...
        this.repositories.forEach( repo => {

//        Criar os elemento em tela e renderizar eles em tela

//          Elemento de imagem
            let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);

//          Elemento de título
            let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

//          Elemento de descrição
            let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));

//          Elemento de link
            let linkEl = document.createElement('a');
                linkEl.setAttribute('target','_blank');
                linkEl.appendChild(document.createTextNode('Acessar'));

//          Elemento de lista
            let listItemEl = document.createElement('li');

//          Agora vamos colocar tudo dentro do 'li'
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);            
            listItemEl.appendChild(descriptionEl);            
            listItemEl.appendChild(linkEl);            

//          Agora vamos jogar todo para a 'ul'
            this.listEl.appendChild(listItemEl);
        }) ;

    }
}

new App();
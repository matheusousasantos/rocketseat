const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
});

//minhaPromise().then( response => {
 //   console.log( response );
//}).catch( err => {

//});


//Contante que será uma função:
//const minhaPromise = ()

//Que retorna uma promise
//() => new Promise();


//async function executaPromise() {
 //   console.log(await minhaPromise());
  //  console.log(await minhaPromise());
 //   console.log(await minhaPromise());
//}

//executaPromise();

//Sempre tem que ter uma função por volta
//Await - Mesma coisa do .then

//acync/await com array function

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();
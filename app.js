let amigos = [];
let nombreAmigo = '';

function agregarAmigo() {
        let nombreAmigo = document.getElementById('amigo').value;

        if (nombreAmigo === ''){
            alert('Ingrese un nombre válido');
        } else{
        amigos.push(nombreAmigo);

        console.log(amigos);
        }
        enlistarAmigos();
        limpiarCaja();

        return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
    return;
}
// Se crea función para mostrar en pantalla los nombres de los amigos que se van ingresando
function enlistarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigos(){
    if(amigos.length === 0){
        alert('No existen datos de amigos para sortear');
    }

    let amigoElegido = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById('resultado');

    if (resultado = ''){
        resultado.innerHTML = ''
    } else{
    resultado.innerHTML = `Tu amigo secreto es: ${amigoElegido}`;
    }

}


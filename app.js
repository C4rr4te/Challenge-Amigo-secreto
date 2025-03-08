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
//función para limpiar la caja de input después de hacer clic en el botón de añadir
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
/*Se crea función para sortear amigos y se especifica también que si no se ingresa ningún dato en el input
no aparecerá ninguna expresión o dato en la lista*/

function sortearAmigos(){
    let amigoElegido = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById('resultado');
    if(amigos.length === 0){
        alert('No existen datos de amigos para sortear');
        resultado.innerHTML = ''
    } else{
        resultado.innerHTML = `Tu amigo secreto es: ${amigoElegido}`;
    }

}


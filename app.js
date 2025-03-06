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
        limpiarCaja();
        return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
    return;
}


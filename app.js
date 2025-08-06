// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Agrerar amigos
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; 
    mostrarLista();
}

// mostrar listado
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        li.setAttribute("role", "listitem");
        lista.appendChild(li);
    }
}

// sortear nombres
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (amigos.length === 1) {
        alert("Escribe por lo menos 2 nombres para hacer el sorteo.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let li = document.createElement('li');
    li.textContent = "Tu amigo secreto es: " + amigoSorteado;
    resultado.appendChild(li);
}

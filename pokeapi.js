
function busqueda(){
    var idpoke = document.formulario.idpok.value;
    ajaxGet("https://pokeapi.co/api/v2/pokemon/"+idpoke, function(respuesta){
        var pokemon = JSON.parse(respuesta);
        mostrarPokemon(pokemon);
    });
};

function mostrarPokemon(pokemon){
    var informacionPoke = document.getElementById("idpokemon")
    informacionPoke.innerHTML = "";
    
    var mensaje1 = document.createElement("h3");
    mensaje1.textContent = "Información del pokemon";
    mensaje1.style.color = "#0d1d3d"
    mensaje1.style.fontSize = "20pt"
    informacionPoke.appendChild(mensaje1);

    var imagenpokemon = document.createElement("img")
    // imagenpokemon.src = pokemon.sprites.other.home.front_default;
    imagenpokemon.src = pokemon.sprites.other["official-artwork"].front_default;
    // imagenpokemon.style.weight = "150px"
    informacionPoke.appendChild(imagenpokemon);
 
    // var nombrepokemon = document.createElement("p");
    // nombrepokemon.textContent = "Nombre de pokemon: " + pokemon.name;
    // informacionPoke.appendChild(nombrepokemon);

    var posicion = document.createElement("p");
    posicion.textContent = "# " + pokemon.id;
    posicion.style.fontSize = "15pt"
    informacionPoke.appendChild(posicion);

    var pesopokemon = document.createElement("p");
    pesopokemon.textContent = "Peso de pokemon: " + " " + pokemon.weight;
    pesopokemon.style.fontSize = "15pt"
    informacionPoke.appendChild(pesopokemon);

    var habilidad = document.createElement("p");
    habilidad.textContent = "Habilidad: " + pokemon.abilities[0].ability.name;
    habilidad.style.fontSize = "15pt"
    informacionPoke.appendChild(habilidad)

    var tipo0 = document.createElement("p");
    tipo0.textContent = "Tipo1: " + pokemon.types[0].type.name;
    tipo0.style.fontSize = "15pt"
    informacionPoke.appendChild(tipo0)

    var tipo = document.createElement("p");
    tipo.textContent = "Tipo2: " + pokemon.types[1].type.name;
    tipo.style.fontSize = "15pt"
    informacionPoke.appendChild(tipo)
    
}
    function minusculas(e){
    e.value = e.value.toLowerCase()
    }


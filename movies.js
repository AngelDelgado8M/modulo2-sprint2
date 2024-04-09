let content = document.getElementById ("main")
content.innerHTML += "<div id='contenedor' class='flex justify-center flex-wrap gap-3'> </div>"
let div = document.getElementById ("contenedor")
let contenedor = document.getElementById("gene")

let creartarjeta = function ( peliculas ) {
    return`
    <div class=" bg-slate-700 w-60 h-68 w-1/5 p-3 flex flex-col border-solid border-2 m-2 border-gray-400 rounded-lg items-center max-md:w-4/5 ">
        <img class=" w-full h-28 rounded" src=${peliculas.image} />
        <h3 class="text-lg text-neutral-50 ">${peliculas.title }</h3>
        <p class="text-xs line-clamp-4">${peliculas.overview}</p>
        <a class="hover:text-white" href="./details.html?id=${peliculas.id}">Ver mas</a>
    </div>`
}

let creartarjetas = function (peli, elemento) {
    let movies = ""
    for (const iteradorpelis of peli) {
        movies += creartarjeta(iteradorpelis)
    }
    elemento.innerHTML = movies
}

creartarjetas(peliculas, div)


//filtros

let inputBuscador = document.getElementById('buscador')


inputBuscador.addEventListener( "input" , () =>{
    console.log(inputBuscador.value );
    const peliculasfiltradas = filtrarPorNombre(peliculas , inputBuscador.value)
    console.log(peliculasfiltradas);
    creartarjetas(peliculasfiltradas, div)
})


function filtrarPorNombre( listapeliculas , nombreingresado){
   return listapeliculas.filter( pelicula => pelicula.title.toLowerCase().includes(nombreingresado.toLowerCase()) )
}


function generoSinRepetir(peli) {
    let listagenero = peli.map(pelicula => pelicula.genres).flat()
    let sinRep = new Set(listagenero)
    return [...sinRep]
}

console.log(generoSinRepetir(peliculas));


function crearOptions(gen, elemento) {
    let gener = ""
    for (const iteradorgen of gen) {
        gener += `<option value="${iteradorgen}"> ${iteradorgen} </option> `
    }
    elemento.innerHTML += gener
}


let generos = generoSinRepetir(peliculas)

crearOptions(generos , contenedor)


/* function filtrarPorGenero(listapeliculas) {
       let seleccionados = Array.from(document.querySelectorAll('option'))
       .map( option => option.value)
       let peliculasFiltrados = listapeliculas.filter(pelicula => seleccionados)
       console.log(peliculasFiltrados);
    } */

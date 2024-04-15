
export let creartarjetas = function (peli, elemento) {
    let movie = ""
    for (const iteradorpelis of peli) {
        movie += creartarjeta(iteradorpelis)
    }
    elemento.innerHTML += movie
}

export let creartarjeta = function ( pelicu ) {
    return`
    <div id="contentCard" class=" bg-slate-700 w-60 h-68 w-1/5 p-3 flex flex-col border-solid border-2 m-2 border-gray-400 rounded-lg items-center max-md:w-4/5 ">
        <img class=" w-full h-28 rounded" src=https://moviestack.onrender.com/static/${pelicu.image} />
        <h3 class="text-lg text-neutral-50 ">${pelicu.title }</h3>
        <p class="text-xs line-clamp-4">${pelicu.overview}</p>
        <a class="hover:text-white" href="./details.html?id=${pelicu.id}">Ver mas</a>
        <button data-movies="${pelicu.id}" value="${pelicu.id}">
        <i class="fa-regular fa-heart" data-movies="${pelicu.id}"></i>
        </button>
        <button data-movies="${pelicu.id}" value="${pelicu.id}">
        <i class="fa-solid fa-heart" data-movies="${pelicu.id}"></i>
        </button>
    </div>`
}

//funcion crear por input
export function filtrarPorNombre( listapeliculas , nombreingresado){
    return listapeliculas.filter( pelicula => pelicula.title.toLowerCase().includes(nombreingresado.toLowerCase()) )
 }

 //crear options
export function crearOptions(gen, elemento) {
    let gener = ""
    for (const iteradorgen of gen) {
        gener += `<option value="${iteradorgen}"> ${iteradorgen} </option> `
    }
    elemento.innerHTML += gener
}
//funcion crear genero
export function filtrarPorGenero( listapeliculas, generoingresado){
    if (generoingresado=='todos') {
        return listapeliculas
    }
    return listapeliculas.filter( pelicula => pelicula.genres.includes(generoingresado))
  
 }

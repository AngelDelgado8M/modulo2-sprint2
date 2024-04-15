import {creartarjetas , filtrarPorNombre , filtrarPorGenero , crearOptions} from "./module/funciones.js"


let contenedormain = document.getElementById ("main")
contenedormain.innerHTML += "<div id='div' class='flex justify-center flex-wrap gap-3'> </div>"
let contenedorDiv = document.getElementById ("div")
let contenedor = document.getElementById("gene")
let inputBuscador = document.getElementById('buscador')



let movies = []
fetch('https://moviestack.onrender.com/api/movies',
{
    headers:{
        "X-API-Key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
       }
    })
    .then(res => res.json())
    .then(data => {
        movies = data.movies
        creartarjetas(movies, contenedorDiv)
        

        //ids a localstorage
        let arrayPeliculasFavs = []; 
 
        contenedorDiv.addEventListener('click', (event) => {
            let dataSetId = event.target.dataset.movies;
            if (dataSetId) {
                if (!arrayPeliculasFavs.includes(dataSetId)) {
                    arrayPeliculasFavs.push(dataSetId);
                } else {
                    arrayPeliculasFavs = arrayPeliculasFavs.filter(id => id != dataSetId);
                }
                localStorage.setItem('listapelis', JSON.stringify(arrayPeliculasFavs));
                console.log(arrayPeliculasFavs); // Imprimir el array actualizado
            }
        });

        //Filtros de input
       inputBuscador.addEventListener( "input" , () =>{
           const peliculaFiltradaPorGenero = filtrarPorGenero(movies, contenedor.value)
           const peliculasfiltradas = filtrarPorNombre(peliculaFiltradaPorGenero , inputBuscador.value)
           creartarjetas(peliculasfiltradas, contenedorDiv)
       })
       
       //generos 
       function generoSinRepetir(peli) {
           let listagenero = peli.map(pelicula => pelicula.genres).flat()
           let sinRep = new Set(listagenero)
           let resultadogenero = Array.from(sinRep)
           return resultadogenero.toSorted()
       }
       
       //filtro de genero
       
           contenedor.addEventListener('change', () =>{
               const crearFiltroPorNombre = filtrarPorNombre(movies, inputBuscador.value)
              const peliculasfiltrada = filtrarPorGenero(crearFiltroPorNombre, contenedor.value)
              creartarjetas(peliculasfiltrada, contenedorDiv)
           }) 
       
       let generos2 = generoSinRepetir(movies)

       crearOptions(generos2, contenedor)

       filtrarPorGenero(movies, contenedor.value)
       
       filtrarPorNombre(peliculaFiltradaPorGenero, inputBuscador.value)
        
    })
    .catch(err => console.log(err))
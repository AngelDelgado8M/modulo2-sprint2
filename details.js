
let url = new URLSearchParams(location.search)
let id = url.get("id")
console.log(id);

let pelis = (array, key) => array.find( obj => obj.id == key )

console.log(pelis(peliculas, id))

let creardetalle = function ( peliculas ) {
    return`
    <div class=" ">
        <img class=" w-86 h-82 rounded-lg m-12" src=${peliculas.image} />
    </div>

    <div class="border border-[black]">
    <h1 class="text-center text-xl">TITLE</h1>
    <h3 class="text-lg text-center text-neutral-50 ">${peliculas.title }</h3>
    <p class="text-center m-2">${peliculas.genres}</p>
    <p class="text-sm w-80 text-center mx-20">${peliculas.overview}</p>
    </div>

    <table class="m-20 p-10 "> 
    <tr>
    <td>Original Language</td>
    <td>${peliculas.original_language}</td>
    </tr>
    <tr>
    <td>Release Date</td>
    <td>${peliculas.release_date}</td>
    </tr>
    <tr>
    <td>Runtime</td>
    <td>${peliculas.runtime}</td>
    </tr>
    <tr>
    <td>Status</td>
    <td>${peliculas.status}</td>
    </tr>
    </table>

    <table class=" m-20"> 
    <tr>
    <td>Vote Storage</td>
    <td>${peliculas.vote_count}</td>
    
    </tr>
    <tr>
    <td>Budget</td>
    <td>${peliculas.budget}</td>
    
    </tr>
    <tr>
    <td>Revenue</td>
    <td>${peliculas.revenue}</td>
    
    </tr>
    </table>
    `
}

let conten = document.getElementById("main")
conten.innerHTML = creardetalle(pelis(peliculas, id))
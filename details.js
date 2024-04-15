
let url = new URLSearchParams(location.search)
let id = url.get("id")
console.log(id);

let pelis = (array, key) => array.find( obj => obj.id == key )


let creardetalle = function ( movies ) {
    return`
    <div class=" ">
        <img class=" w-86 h-82 rounded-lg m-12" src=https://moviestack.onrender.com/static/${movies.image} />
    </div>

    <div class="border border-[black]">
    <h1 class="text-center text-xl">TITLE</h1>
    <h3 class="text-lg text-center text-neutral-50 ">${movies.title }</h3>
    <p class="text-center m-2">${movies.genres}</p>
    <p class="text-sm w-80 text-center mx-20">${movies.overview}</p>
    </div>

    <table class="m-20 p-10 border"> 
    <tr>
    <td class="border p-2">Original Language</td>
    <td class="border p-2">${movies.original_language}</td>
    </tr>
    <tr>
    <td class="border p-2">Release Date</td>
    <td class="border p-2">${movies.release_date}</td>
    </tr>
    <tr>
    <td class="border p-2">Runtime</td>
    <td class="border p-2">${movies.runtime}</td>
    </tr>
    <tr>
    <td class="border p-2">Status</td>
    <td class="border p-2">${movies.status}</td>
    </tr>
    </table>

    <table class=" m-20 border"> 
    <tr>
    <td class="border p-2">Vote Storage</td>
    <td class="border p-2">${movies.vote_count}</td>
    
    </tr>
    <tr>
    <td class="border p-2">Budget</td>
    <td class="border p-2">${movies.budget}</td>
    
    </tr>
    <tr>
    <td class="border p-2">Revenue</td>
    <td class="border p-2">${movies.revenue}</td>
    
    </tr>
    </table>
    `
}



fetch('https://moviestack.onrender.com/api/movies',
{
    headers:{
        "X-API-Key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
       }
   })
   .then(res => res.json())
   .then(data => {
       movies = data.movies
       let conten = document.getElementById("main")
    conten.innerHTML = creardetalle(pelis(movies, id))
    })
    .catch(err => console.log(err))
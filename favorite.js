import {creartarjetas , creartarjeta }from "./module/funciones.js"

let contenedormain = document.getElementById ("main")
contenedormain.innerHTML += "<div id='div' class='flex justify-center flex-wrap gap-3'> </div>"
let contenedorDiv = document.getElementById ("div")



document.addEventListener("DOMContentLoaded", () => {
    let movies = [];

    fetch("https://moviestack.onrender.com/api/movies", {
        headers: {
            "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
        }
    })
    .then(res => res.json())
    .then(data => {
        movies = data.movies;
        const arrayPeliculasFavs = JSON.parse(localStorage.getItem("listapelis")) || [];
        const peliculasFavoritas = movies.filter(pelicula => arrayPeliculasFavs.includes(pelicula.id));

        creartarjetas(peliculasFavoritas, contenedorDiv);
    })
    .catch(err => console.error("Error al obtener películas:", err));
});
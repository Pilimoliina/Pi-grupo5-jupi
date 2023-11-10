let busqueda = document.querySelector(".formulario-div");
let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let url0     = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`


fetch(url)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        for (let index = 0; index < 5; index++) {
            julia.innerHTML += `<div class="pelicula">
            <a href="./detallepelicula.html?id=${data.results[index].id}">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path
            }" alt="">
            <h5 class="subtitulo-pelicula">${data.results[index].title}</h5>
            </a>
            </div>`
        }
    })
        .catch(function(error){
        return;
    })
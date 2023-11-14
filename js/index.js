let julia   = document.querySelector(".peliculas-container");
let pilar   = document.querySelector(".favoritos");
let jupi    = document.querySelector("#jupi");
let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let url     = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
let url2    = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
let url3    = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;


fetch(url)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        for (let index = 0; index < 6; index++) {
            julia.innerHTML += `<div class="pelicula">
            <a href="./detallepelicula.html?id=${data.results[index].id}">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path
            }" alt="">
            <h5 class="subtitulo-pelicula">${data.results[index].title}</h5>
            </a>
            <h5 class = "subtitulo-pelicula">${data.results[index].release_date}</h5>
            </div>`
        }
    })
        .catch(function(error){
        return;
    })


    fetch(url2)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        for (let index = 0; index < 6; index++) {
            pilar.innerHTML += `<div class="pelicula">
            <a href="./detallepelicula.html?id=${data.results[index].id}">
            <img class="imagen twow" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path
        }" alt="">
            <h5 class="subtitulo-pelicula">${data.results[index].title}</h5>
            </a>
        </div>`
        }
    })
        .catch(function(error){
        return;
    })

    fetch(url3)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        for (let index = 0; index < 6; index++) {
            jupi.innerHTML += `<div class="pelicula">
            <a href="./detalleserie.html?id=${data.results[index].id}">
            <img class="imagen twow" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path
            }">
            <h5 class="subtitulo-pelicula">${data.results[index].name}</h5>
            </a>
            </div>`
        }
    })
        .catch(function(error){
        return;
    })


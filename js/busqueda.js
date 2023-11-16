let julia = document.querySelector(".sec-buscar");
let API_KEY  = "73bbcaff8fd928767c5142a00f422fa2";

let qs = location.search; 
let Obj = new URLSearchParams(qs)
let buscar = Obj.get("Buscar")
let url0     = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${buscar}`
console.log(buscar)

let noHay = document.querySelector(".resu");
let nomP = document.querySelector("#resu2");

fetch(url0)
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
        for (let index = 0; index < 1; index++) {
            noHay.innerHTML += `<h3 class="titulo-buscar">Resultados de su busqueda:${buscar}</h3>`  
        }
    })
        .catch(function(error){
        return;
    })

    
let julia = document.querySelector(".sec-buscar");
let API_KEY  = "73bbcaff8fd928767c5142a00f422fa2";

let qs = location.search; 
let Obj = new URLSearchParams(qs)
let buscar = Obj.get("Buscar")
let url0     = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${buscar}`
let url01     = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${buscar}`
console.log(buscar)

let noHay = document.querySelector(".resu");

let nomP = document.querySelector("#resu2");
noHay.innerHTML = `<img  class="cargando" src="./img/cargando2.gif" alt="Cargando...">`

fetch(url0)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        if (data.results.length == 0) {
            noHay.innerHTML = `No hay resultados para: ${buscar}`
        } 
        else {
            noHay.innerHTML = `Resultados de su busqueda:${buscar}`
        }
        for (let index = 0; index < 5; index++) {
            julia.innerHTML += `<div class="pelicula">
            <a href="./detallepelicula.html?id=${data.results[index].id}">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="">
            <h5 class="subtitulo-pelicula">${data.results[index].title}</h5>
            </a>
            </div>`  
        }
    })
        .catch(function(error){
        return;
    })

fetch(url01)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        if (data.results.length == 0) {
            noHay.innerHTML = `No hay resultados para: ${buscar}`
        } 
        else {
            noHay.innerHTML = `Resultados de su busqueda:${buscar}`
        }
        for (let index = 0; index < 5; index++) {
            
            julia.innerHTML += `<div class="pelicula">
            <a href="./detalleserie.html?id=${data.results[index].id}">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="">
            <h5 class="subtitulo-pelicula">${data.results[index].name}</h5>
            </a>
            </div>`  
        }
    })
        .catch(function(error){
        return;
}) 
let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let qs = location.search;
let Obj = new URLSearchParams(qs);
let id = Obj.get("id");
let urlP = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`;
let urlS = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}`;
let detG = document.querySelector(".sec-buscar");
let detS = document.querySelector(".s-series");

fetch(urlP)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = "";

        for (let index = 0; index < 6; index++) {
            info += `
            <div class="div-buscar">
                <a href="./detallepelicula.html?id=${data.results[index].id}">
                <img class="imagen-buscar" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="">
                <h4 class="subtitulo-b">${data.results[index].title}</h4>
                </a>
            </div>`
        }
        detG.innerHTML += info;
    })
    .catch(function(error){
        console.log(error);
    });


    fetch(urlS)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info1 = "";

        for (let index = 0; index < 6; index++) {
            info1 += `
            <div class="div-buscar">
            <a href="./detalleserie.html?id=${data.results[index].id}">
            <img class="imagen-buscar" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="">
            <h4 class="subtitulo-b">${data.results[index].title}</h4>
            </a>
        </div>`
        }
        detS.innerHTML += info1;
    })
    .catch(function(error){
        console.log(error);
    });
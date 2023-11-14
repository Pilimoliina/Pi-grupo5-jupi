let detallep = document.querySelector(".div-detalle")
let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let qs = location.search;
let Obj = new URLSearchParams(qs);
let id = Obj.get("id");
let url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
let img = document.querySelector(".imagen-detalle");
let titulo = document.querySelector(".detalle1");
let fecha = document.querySelector(".fecha");
let desc = document.querySelector(".desc");
let dur = document.querySelector(".duracion");
let generos1 = document.querySelector(".genero");
let calificacion = document.querySelector(".estrella");
let boton = document.querySelector("#recom");
let container = document.querySelector(".reco-container")
let recomenDisplay = document.querySelector(".recomendar");




console.log(id);

fetch(url4)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let generos = ""
        for (let index = 0; index < data.genres.length; index++) {
            generos += `${data.genres[index].name}`
            
        }
            img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
            titulo.innerText = data.title;
            generos.innerText = data.genres;
            fecha.innerText = "Lanzamiento:" + " " + data.release_date;
            desc.innerText = "Sinopsis:" + " " + data.overview;
            dur.innerText = data.runtime + " " + "min";
            calificacion.innerText = "Calificacion:" + " " + data.vote_average;
            generos1.innerText = "Genero:" + " " + generos;


    })
        .catch(function(error){
        return;
    })

boton.addEventListener('click', function (e) {
        let recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

        console.log(recom);
        fetch(recom)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                container.style.display = "block";
                let info = "";
                for (let index = 0; index < 5; index++) {
                    info += `<img class="imagen-detalle" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}";
                    <h3 class ="detalle1">${data.results[index].title}</h3>`
                    
                }
            recomenDisplay.innerHTML = info;
            
            })
                

            
    
    .catch(function(error){
        console.log(error);
    })
})

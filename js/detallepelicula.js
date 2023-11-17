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
let classT = document.querySelector(".classTrailer")
let urlT = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
let botMasInfo = document.querySelector(".botonMas");
let containerInfo = document.querySelector(".info-container");
let InfoDisplay = document.querySelector(".informacion1");



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
            generos1.innerText = "Genero: " + generos ;


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
                    info += `<a href="./detallepelicula.html?id=${data.results[index].id}"><img class="imagen-detalle" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt ="${data.results[index].title}"></a>
                    <h3 class ="detalle1">${data.results[index].title}</h3>`
                    
                }
            recomenDisplay.innerHTML = info;
            
            })
               

            
    
    .catch(function(error){
        console.log(error);
    })
})

//Trailer

fetch(urlT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.results);
        classT.innerHTML = `<iframe width="420" height="300" src="https://www.youtube.com/embed/${data.results[0].key}?si=iiP5A0Grbeb8srOu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        if (video == null){
            return 'No hay trailer disponible'
        } else{
            for (let index = 0; index < 5; index++) {
                classT.innerHTML += `${data.results[index].title}`
                
            }
        }
         })
        .catch(function(error){
            console.log(error);
       
    })


    botMasInfo.addEventListener('click', function (e) {
        let masInfo = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;
        console.log(masInfo);

        fetch(masInfo)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                containerInfo.style.display = "block";
                let infoMas = "";
                if (data.results.length > 0){
                    for (let index = 0; index < 5; index++) {
                    const review = data.results[index]
                    infoMas += `<p>${review.author}</p>
                    <p>${review.content}</p>`
                    }
                } else {
                    alert("No hay reseñas")
                }
                   InfoDisplay.innerHTML = infoMas; 
                
    })  
    .catch(function(error){
        console.log(error);
    });
})
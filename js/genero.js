let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let urlP = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
let urlS = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`

fetch(urlP)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = document.querySelector(".sec-genero");

        for (let index = 0; index < 7; index++) {
            info.innerHTML += `<ul>
                    <li class="pilar"><a class="button-genero" href="./generos.html?id=${data.genres[index].id}">${data.genres[index].name}</a></li>
                </ul>`;
        }
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
        let info = document.querySelector("#sec-series");

        for (let index = 0; index < 7; index++) {
            info.innerHTML += ` <ul>
                    <li class="pilar"><a class="button-genero" href="./generos.html?id=${data.genres[index].id}">${data.genres[index].name}</a></li>
                </ul>`;
        }
    })
    .catch(function(error){
        console.log(error);
    });

let julia = document.querySelector(".sec-genero");
let API_KEY = "73bbcaff8fd928767c5142a00f422fa2";
let url6 = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`


fetch(url)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        console.log(data);
        for (let index = 0; index < 11; index++) {
            julia.innerHTML += `<a href="./generos.html">
            <button type="submit" class="button-genero">${data.genres[index].name}</button>`
    })
        .catch(function(error){
        return;
    })
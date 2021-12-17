async function getMoviesList() {
    axios
        .get("https://swapi.py4e.com/api/films/")
        .then(function (response) {
            return response.data.results;
        })
        .then(function (data) {
            appendMovieData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });;
}

async function getUsersList() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendUserData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendMovieData(data) {
    var mainContainer = document.getElementById("myMovieData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML =
            '<div class="card" style="width: 24rem;">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + data[i].title + '</h5>' +
            '<h6 class="card-subtitle mb-2 text-muted">' + 'Release date-' + data[i].release_date +'</h6>' +
            '<p class="card-text">' + 'Director-' + data[i].director +   '</p>'+
            '<p class="card-text">' + 'Producer-' + data[i].producer +   '</p>'+
            '</div>'+
            '</div>';
        mainContainer.appendChild(div);
    }
}

function appendUserData(data) {
    var mainContainer = document.getElementById("myUserData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML =
            '<div class="card" style="width: 24rem;">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + data[i].name + '</h5>' +
            '<h6 class="card-subtitle mb-2 text-muted">' + 'Username-' + data[i].username +'</h6>' +
            '<p class="card-text">' + 'Email-' + data[i].email +   '</p>'+
            '</div>'+
            '</div>';
        mainContainer.appendChild(div);
    }
}